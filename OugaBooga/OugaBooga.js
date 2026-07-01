/* ════════════════════════════════════════════════════════════
   OUGABOOGA — Jeu de rôles (façon Loup-Garou de Thiercelieux)
   ════════════════════════════════════════════════════════════ */

/* ───────── ÉTAT GLOBAL ───────── */
let joueurs = [];          // [{nom, role, vivant, mortNuit, amoureuxDe, modeleDe, devenuInfiltre, vieBooma, derniereActionBoumata}]
let config = {};           // switches du setup
let ordreDistribution = []; // ordre de distribution des cartes (mélangé)
let indexDistribution = 0;
let nightQueue = [];       // liste des rôles à réveiller cette nuit (clé de role config)
let nightIndex = 0;
let nightTarget1 = null;   // 1ère sélection (ex: victime infiltrés)
let nightActionsThisNight = {}; // résultats des actions de la nuit en cours
let nightNumber = 0;
let mortsCetteNuit = [];   // noms morts pendant la nuit en cours (avant annonce matin)
let bougamoureuxPaire = null; // [nomA, nomB]
let bougamoutarPaire = null;  // {jeune, modele}
let boumataCompteur = 0;   // pour 1 action / 2 nuits
let lanceEnAttente = [];   // file des Lance morts qui doivent encore désigner leur cible
let maire = null;          // nom du maire élu
let ougabountaRevele = false; // true si l'OugaBounta a été révélé publiquement
let lanceCallbackApresChoix = null; // fonction à rappeler une fois tous les Lance résolus

/* ───────── CONFIG DES RÔLES ───────── */
/* camp: 'booga' (vert) | 'infiltre' (rouge) | 'solo' (jaune)
   wakesAtNight: true si le rôle a une action de nuit
   icon: fonction retournant le SVG (pictogramme simple, stroke=currentColor) */
const ROLES = {
  booga: {
    nom: "OugaBooga",
    camp: "booga",
    mot: "Clan Bouga",
    desc: "Doit survivre avec tous ses amis du clan Bouga.",
    wakesAtNight: false,
    // Flaticon : icône villageois / personnage tribu
    icon: () => `<img src="image/arbre.png" alt="Icône OugaBooga (villageois du clan)" class="role-icon-img">`
  },
  infiltre: {
    nom: "OugaBooga Infiltré",
    camp: "infiltre",
    mot: "Infiltré",
    desc: "Doit tuer tous les OugaBooga du clan (sauf ses coéquipiers infiltrés).",
    wakesAtNight: true,
    // Flaticon : icône espion / masque
    icon: () => `<img src="image/infiltre.png" alt="Icône Infiltré (espion masqué)" class="role-icon-img">`
  },
  mystique: {
    nom: "OugaBooga Mystique",
    camp: "booga",
    mot: "Bouga Mystique",
    desc: "Peut tuer ou faire revivre un OugaBooga.",
    wakesAtNight: true,
    icon: () => `<img src="image/personnel.png" alt="Icône Mystique (étoile magique)" class="role-icon-img">`
  },
  lance: {
    nom: "OugaBooga à Lance",
    camp: "booga",
    mot: "Bouga à Lance",
    desc: "Peut tuer un OugaBooga quand il meurt.",
    wakesAtNight: false,
    icon: () => `<img src="image/spear.png" alt="Icône Lance (arme de jet)" class="role-icon-img">`
  },
  turfu: {
    nom: "OugaBooga Dans le Turfu",
    camp: "booga",
    mot: "Bouga Du Turfu",
    desc: "Il voit l'avenir ! Il peut connaître un rôle chaque nuit.",
    wakesAtNight: true,
    icon: () => `<img src="image/oeil.png" alt="Icône Turfu (œil voyant)" class="role-icon-img">`
  },
  babybooga: {
    nom: "BabyBooga",
    camp: "booga",
    mot: "BabyBooga",
    desc: "Il est discret ! Il peut regarder quand les OugaBooga Infiltrés se réveillent.",
    wakesAtNight: true,
    icon: () => `<img src="image/baby.png" alt="Icône BabyBooga (bébé discret)" class="role-icon-img">`
  },
  ougabooma: {
    nom: "OugaBooma",
    camp: "booga",
    mot: "OugaBooma",
    desc: "C'est un Boomer, il a leur sagesse ! Et il peut donc vivre 2 fois.",
    wakesAtNight: false,
    // Flaticon : icône vieux sage / personnage âgé
    icon: () => `<img src="image/booma.png" alt="Icône OugaBooma (sage boomer)" class="role-icon-img">`
  },
  ougabounta: {
    nom: "OugaBounta",
    camp: "booga",
    mot: "OugaBounta",
    desc: "Comme un Bounty personne ne l'aime... Mais il ne peut pas se faire voter pour sortir de la grotte et ses voix comptent double (ne peut pas être élu chef Bouga) !",
    wakesAtNight: false,
    // Flaticon : icône paria / personnage isolé
    icon: () => `<img src="image/chase.png" alt="Icône OugaBounta (paria du clan)" class="role-icon-img">`
  },
  ougabanana: {
    nom: "OugaBanana",
    camp: "solo",
    mot: "OugaBanana",
    desc: "Il n'est pas comme les autres, il aime les bananes. Il veut tuer tous les OugaBooga car c'est le seul à aimer les bananes.",
    wakesAtNight: true,
    // Flaticon : icône banane / fruit
    icon: () => `<img src="image/banana.png" alt="Icône OugaBanana (banane)" class="role-icon-img">`
  },
  petitbouga: {
    nom: "Petit Bouga en Plus",
    camp: "booga",
    mot: "Petit Bouga en Plus",
    desc: "Il a un petit truc en plus... Une massue Bouga, il peut l'utiliser pour tuer quelqu'un mais si ce bouga n'est pas infiltré ou solitaire il meurt.",
    wakesAtNight: true,
    // Flaticon : icône massue / marteau primitif
    icon: () => `<img src="image/caveman.png" alt="Icône Petit Bouga (massue)" class="role-icon-img">`
  },
  bougamoureux: {
    nom: "Bougamoureux",
    camp: "booga",
    mot: "Bougamoureux",
    desc: "Il tombe amoureux d'une personne au hasard, seuls lui et son amoureux sont au courant et leurs rôles sont révélés. Mais si l'un meurt, l'autre se frappera trop fort avec une massue Bouga et mourra.",
    wakesAtNight: false,
    // Flaticon : icône cœur / amour
    icon: () => `<img src="image/coeur.png" alt="Icône Bougamoureux (cœur amour)" class="role-icon-img">`
  },
  bougamoutar: {
    nom: "Le BougaMoutar",
    camp: "booga",
    mot: "Le BougaMoutar",
    desc: "Il est jeune et suit l'exemple d'un modèle. Si ce modèle meurt, il devient méchant et s'infiltre avec les autres Bouga.",
    wakesAtNight: false,
    // Flaticon : icône apprenti / jeune disciple
    icon: () => `<img src="image/moutar.png" alt="Icône BougaMoutar (jeune disciple)" class="role-icon-img">`
  },
  boumata: {
    nom: "Le Bouga Infiltré de la grotte Boumata",
    camp: "solo",
    mot: "Le Bouga Infiltré de la grotte Boumata",
    desc: "Il est infiltré chez les infiltrés, toutes les 2 nuits il peut tuer quelqu'un.",
    wakesAtNight: true,
    // Flaticon : icône loup / ombre mystérieuse
    icon: () => `<img src="image/art" alt="Icône Boumata (loup solitaire)" class="role-icon-img">`
  }
};

/* ───────── COMPTEURS +/- ───────── */
function changeCount(id, delta) {
  const input = document.getElementById(id);
  const display = document.getElementById(id + '-display');
  let val = parseInt(input.value) || 0;
  val = Math.max(0, val + delta);
  input.value = val;
  if (display) display.textContent = val;
  checkStartButton();
}

/* ───────── FONCTIONS FIN DE PARTIE ───────── */

/* Nouveau tour : redistribue les rôles aux mêmes joueurs, relance la partie */
function nouveauTour() {
  // remet l'état de jeu mais garde joueurs + config
  ordreDistribution = [];
  indexDistribution = 0;
  nightQueue = [];
  nightIndex = 0;
  nightActionsThisNight = {};
  nightNumber = 0;
  mortsCetteNuit = [];
  bougamoureuxPaire = null;
  bougamoutarPaire = null;
  boumataCompteur = 0;
  lanceEnAttente = [];
  lanceCallbackApresChoix = null;
  maire = null;
  ougabountaRevele = false;
  paroleOrdre = [];
  paroleIndex = 0;
  startGame();
}

/* Nouvelle partie : retour au menu de sélection, joueurs conservés */
function nouvellePartie() {
  // remet l'état de jeu mais garde la liste de joueurs
  const joueursActuels = joueurs.map(j => j.nom);
  quitGame(); // remet tout à zéro
  // restaure les joueurs
  joueursActuels.forEach(nom => {
    joueurs.push({ nom, role: null, vivant: true, amoureuxDe: null, modeleDe: null, devenuInfiltre: false, vieBooma: false, massueUtilisee: false, causeMort: null });
  });
  renderPlayerList();
  checkStartButton();
}

/* Quitter : retour à index.html */
function quitterJeu() {
  window.location.href = '../index.html';
}


/* Ordre logique de réveil la nuit. On filtre dynamiquement
   selon les rôles activés dans la partie. */
const ORDRE_NUIT = ["babybooga", "infiltre", "boumata", "ougabanana", "petitbouga", "mystique", "turfu"];

/* ───────── SETUP : AJOUT DE JOUEURS ───────── */

document.getElementById('player-input').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') addPlayer();
});

function addPlayer() {
  const input = document.getElementById('player-input');
  const nom = input.value.trim();
  if (!nom || joueurs.some(j => j.nom === nom)) { input.value = ''; return; }
  joueurs.push({ nom, role: null, vivant: true, amoureuxDe: null, modeleDe: null, devenuInfiltre: false, vieBooma: false, massueUtilisee: false, causeMort: null });
  input.value = '';
  renderPlayerList();
  checkStartButton();
}

function removePlayer(nom) {
  joueurs = joueurs.filter(j => j.nom !== nom);
  renderPlayerList();
  checkStartButton();
}

function renderPlayerList() {
  const container = document.getElementById('player-list');
  if (joueurs.length === 0) {
    container.innerHTML = '<span class="empty-hint">Aucun joueur ajouté…</span>';
    return;
  }
  container.innerHTML = joueurs.map(j => `
    <div class="player-tag">
      ${escapeHtml(j.nom)}
      <button onclick="removePlayer('${escapeAttr(j.nom)}')" title="Retirer">✕</button>
    </div>`).join('');
}

/* recompte le nombre de rôles activés à chaque interaction pour activer le bouton */
// switch-booga et switch-infiltre sont des champs hidden gérés par changeCount()
Object.keys(ROLES).forEach(key => {
  if (key === 'booga' || key === 'infiltre') return;
  const el = document.getElementById('switch-' + roleKeyToSwitchId(key));
  if (el) el.addEventListener('change', checkStartButton);
});

function roleKeyToSwitchId(key) {
  const map = {
    mystique: 'mystique', lance: 'lance', turfu: 'turfu', babybooga: 'babybooga',
    ougabooma: 'booma', ougabounta: 'bounta', ougabanana: 'banana',
    petitbouga: 'petit', bougamoureux: 'bougamoureux', bougamoutar: 'moutar', boumata: 'boumata'
  };
  return map[key];
}

function readConfig() {
  return {
    booga: parseInt(document.getElementById('switch-booga').value) || 0,
    infiltre: parseInt(document.getElementById('switch-infiltre').value) || 0,
    mystique: document.getElementById('switch-mystique').checked,
    lance: document.getElementById('switch-lance').checked,
    turfu: document.getElementById('switch-turfu').checked,
    babybooga: document.getElementById('switch-babybooga').checked,
    ougabooma: document.getElementById('switch-booma').checked,
    ougabounta: document.getElementById('switch-bounta').checked,
    ougabanana: document.getElementById('switch-banana').checked,
    petitbouga: document.getElementById('switch-petit').checked,
    bougamoureux: document.getElementById('switch-bougamoureux').checked,
    bougamoutar: document.getElementById('switch-moutar').checked,
    boumata: document.getElementById('switch-boumata').checked
  };
}

function countSelectedRoles(cfg) {
  let n = cfg.booga + cfg.infiltre;
  ['mystique', 'lance', 'turfu', 'babybooga', 'ougabooma', 'ougabounta', 'ougabanana', 'petitbouga', 'bougamoureux', 'bougamoutar', 'boumata']
    .forEach(k => { if (cfg[k]) n += 1; });
  return n;
}

function checkStartButton() {
  const cfg = readConfig();
  const total = countSelectedRoles(cfg);
  const errorBox = document.getElementById('setup-error');
  const btn = document.getElementById('btn-start');

  let msg = '';
  if (joueurs.length < 5) {
    msg = 'Ajoute au moins 5 joueurs.';
  } else if (cfg.infiltre < 1 && !cfg.boumata && !cfg.ougabanana) {
    msg = 'Il faut au moins un antagoniste : un OugaBooga Infiltré, un Bouga Infiltré de la grotte Boumata ou un OugaBanana.';
  } else if (total !== joueurs.length) {
    msg = `Le nombre de rôles (${total}) ne correspond pas au nombre de joueurs (${joueurs.length}). Ajuste les nombres ci-dessus.`;
  } else if (cfg.bougamoureux && joueurs.length < 4) {
    msg = 'Bougamoureux nécessite au moins 4 joueurs (2 amoureux + 2 autres).';
  }

  if (msg) {
    errorBox.style.display = 'block';
    errorBox.textContent = msg;
    btn.disabled = true;
  } else {
    errorBox.style.display = 'none';
    btn.disabled = false;
  }
}

// validation initiale + à chaque ajout/retrait
document.getElementById('player-input').addEventListener('input', checkStartButton);
checkStartButton();

/* ───────── LANCEMENT DE PARTIE ───────── */

function startGame() {
  config = readConfig();
  const total = countSelectedRoles(config);
  if (joueurs.length < 5 || total !== joueurs.length) { checkStartButton(); return; }

  // construit le sac de rôles
  let sac = [];
  for (let i = 0; i < config.booga; i++) sac.push('booga');
  for (let i = 0; i < config.infiltre; i++) sac.push('infiltre');
  ['mystique', 'lance', 'turfu', 'babybooga', 'ougabooma', 'ougabounta', 'ougabanana', 'petitbouga', 'bougamoureux', 'bougamoutar', 'boumata']
    .forEach(k => { if (config[k]) sac.push(k); });

  shuffle(sac);

  joueurs.forEach((j, i) => {
    j.role = sac[i];
    j.vivant = true;
    j.amoureuxDe = null;
    j.modeleDe = null;
    j.devenuInfiltre = false;
    j.vieBooma = false;
    j.massueUtilisee = false;
    j.causeMort = null;
  });

  // Bougamoureux : tire 2 joueurs au hasard (peuvent être de camps différents)
  bougamoureuxPaire = null;
  if (config.bougamoureux) {
    const pool = shuffle([...joueurs]).slice(0, 2);
    if (pool.length === 2) {
      pool[0].amoureuxDe = pool[1].nom;
      pool[1].amoureuxDe = pool[0].nom;
      bougamoureuxPaire = [pool[0].nom, pool[1].nom];
    }
  }

  // BougaMoutar : choisit un modèle au hasard parmi les autres joueurs
  bougamoutarPaire = null;
  if (config.bougamoutar) {
    const moutar = joueurs.find(j => j.role === 'bougamoutar');
    const candidats = joueurs.filter(j => j.nom !== moutar.nom);
    if (moutar && candidats.length > 0) {
      const modele = candidats[Math.floor(Math.random() * candidats.length)];
      moutar.modeleDe = modele.nom;
      bougamoutarPaire = { jeune: moutar.nom, modele: modele.nom };
    }
  }

  boumataCompteur = 0;
  nightNumber = 0;

  // ordre aléatoire de distribution des cartes
  ordreDistribution = shuffle(joueurs.map(j => j.nom));
  indexDistribution = 0;

  showScreen('screen-card');
  renderPlayersRow();
  setupCardForCurrentPlayer();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  ['screen-setup', 'screen-card', 'screen-night', 'screen-morning', 'screen-parole', 'screen-vote', 'screen-win', 'screen-final', 'screen-maire']
    .forEach(s => {
      const el = document.getElementById(s);
      if (!el) return;
      el.style.display = (s === id) ? 'flex' : 'none';
    });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escapeAttr(str) { return escapeHtml(str); }

/* ════════════════════════════════════════════════════════════
   DISTRIBUTION DES CARTES
   ════════════════════════════════════════════════════════════ */

function renderPlayersRow() {
  const row = document.getElementById('players-row');
  row.innerHTML = ordreDistribution.map((nom, i) => {
    return chipJoueur(nom, i === indexDistribution);
  }).join('');
}

function setupCardForCurrentPlayer() {
  const nom = ordreDistribution[indexDistribution];
  const joueur = joueurs.find(j => j.nom === nom);
  const roleInfo = ROLES[joueur.role];
  const inner = document.getElementById('card-inner');

  // 1. on remet d'abord la carte en position verso (cachant le recto)
  inner.classList.remove('flipped');
  document.getElementById('btn-next').style.display = 'none';

  // 2. on attend la fin de la rotation avant d'injecter le contenu du recto,
  //    pour qu'il ne soit jamais visible avant que la carte ne soit vraiment retournée
  const updateRecto = () => {
    document.getElementById('card-recto-title').textContent = `Carte de ${nom}`;
    document.getElementById('card-role-icon').innerHTML = roleInfo.icon();
    document.getElementById('card-mot').textContent = roleInfo.mot;
    const badge = document.getElementById('type-badge');
    badge.className = 'type-badge ' + roleInfo.camp;
    badge.textContent = roleInfo.camp === 'booga' ? 'Clan Bouga' : (roleInfo.camp === 'infiltre' ? 'Infiltré' : 'Solitaire');
  };

  // si la carte précédente était retournée, on laisse le temps à l'anim de revenir
  // (0.6s définie dans le CSS) avant d'écrire le nouveau rôle ; sinon, instantané
  if (inner.dataset.wasFlipped === '1') {
    setTimeout(updateRecto, 620);
  } else {
    updateRecto();
  }
  inner.dataset.wasFlipped = '0';
}

function flipCard() {
  const inner = document.getElementById('card-inner');
  const willFlip = !inner.classList.contains('flipped');
  inner.classList.toggle('flipped');
  inner.dataset.wasFlipped = willFlip ? '1' : '0';
  if (willFlip) {
    document.getElementById('btn-next').style.display = 'block';
  }
}

function nextTurn() {
  indexDistribution++;
  if (indexDistribution >= ordreDistribution.length) {
    // tous les joueurs ont vu leur carte -> démarrage de la nuit 1
    beginNight();
    return;
  }
  renderPlayersRow();
  setupCardForCurrentPlayer();
}


/* ════════════════════════════════════════════════════════════
   ÉLECTION DU CHEF BOUGA (première journée uniquement)
   ════════════════════════════════════════════════════════════ */

function beginElectionMaire() {
  showScreen('screen-vote');
  document.getElementById('vote-result').style.display = 'none';
  document.getElementById('vote-result').innerHTML = '';
  document.querySelector('#screen-vote .vote-title').textContent = 'Election du Chef Bouga';
  document.querySelector('#screen-vote .vote-sub').textContent = 'Chaque joueur plaide sa cause, puis le village vote a main levee. Appuie sur le joueur elu.';
  const container = document.getElementById('vote-players');
  container.innerHTML = vivants().map(function(j) {
    const interdit = j.role === 'ougabounta' && ougabountaRevele;
    return '<button class="vote-btn' + (interdit ? ' maire-interdit' : '') + '"'
      + (interdit ? ' disabled title="OugaBounta ne peut pas etre Chef Bouga"' : '')
      + ' onclick="elireMaire(' + "'" + escapeAttr(j.nom) + "'" + ')">'
      + escapeHtml(j.nom) + '</button>';
  }).join('');
}

function elireMaire(nom) {
  const j = joueurByNom(nom);
  if (j && j.role === 'ougabounta') {
    // OugaBounta révélé — il peut pas être Chef Bouga, election reportée au jour suivant
    ougabountaRevele = true;
    const resultEl = document.getElementById('vote-result');
    resultEl.style.display = 'flex';
    resultEl.innerHTML = '<div class="result-block fail"><strong>' + escapeHtml(nom) + '</strong> est OugaBounta et ne peut pas etre Chef de la tribu. Le village perd son vote de Chef Bouga pour cette journee.</div>';
    document.getElementById('vote-players').innerHTML = '';
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Continuer';
    btn.style.marginTop = '1rem';
    btn.onclick = function() { beginParole(); };
    resultEl.appendChild(btn);
    return;
  }
  maire = nom;
  const btns = document.querySelectorAll('#vote-players .vote-btn');
  btns.forEach(function(btn) {
    btn.disabled = true;
    if (btn.textContent.trim() === nom) btn.classList.add('maire-elu');
  });
  setTimeout(function() { beginParole(); }, 900);
}


/* Chip joueur avec médaillon Chef Bouga */
function chipJoueur(nom, isActive) {
  const isMaire = maire && maire === nom;
  const cls = isActive ? 'player-chip active' : 'player-chip';
  const medaillon = isMaire ? '<img src="image/prix.png" class="maire-medaillon" alt="Chef Bouga">' : '';
  return '<span class="' + cls + '">' + medaillon + escapeHtml(nom) + '</span>';
}


/* ════════════════════════════════════════════════════════════
   CYCLE DE NUIT
   ════════════════════════════════════════════════════════════ */

function vivants() { return joueurs.filter(j => j.vivant); }
function joueurByNom(nom) { return joueurs.find(j => j.nom === nom); }

function beginNight() {
  nightNumber++;
  mortsCetteNuit = [];
  nightActionsThisNight = {};
  nightTarget1 = null;

  // construit la file des rôles à réveiller cette nuit, en ne gardant que
  // ceux effectivement présents en jeu ET encore en vie quelque part
  nightQueue = ORDRE_NUIT.filter(roleKey => {
    if (!config[roleKey]) return false;
    if (roleKey === 'infiltre') {
      return vivants().some(j => j.role === 'infiltre');
    }
    if (roleKey === 'boumata') {
      // le Bouga Infiltré de la grotte Boumata agit seul, une nuit sur deux
      const boumataJoueur = vivants().find(j => j.role === 'boumata');
      if (!boumataJoueur) return false;
      boumataCompteur++;
      return boumataCompteur % 2 === 0; // agit les nuits paires de son point de vue
    }
    if (roleKey === 'babybooga') {
      return vivants().some(j => j.role === 'babybooga') &&
             vivants().some(j => j.role === 'infiltre');
    }
    if (roleKey === 'petitbouga') {
      return vivants().some(j => j.role === 'petitbouga' && !j.massueUtilisee);
    }
    // rôle générique : il faut un joueur vivant ayant ce rôle
    return vivants().some(j => j.role === roleKey);
  });

  nightIndex = 0;
  showScreen('screen-night');
  document.getElementById('night-jour-label').textContent = `Nuit ${nightNumber}`;
  runNightStep();
}

function runNightStep() {
  if (nightIndex >= nightQueue.length) {
    resolveNight();
    return;
  }
  const roleKey = nightQueue[nightIndex];
  const roleInfo = ROLES[roleKey];
  document.getElementById('night-role-title').textContent = roleInfo.nom + ' se réveille';
  document.getElementById('night-role-desc').textContent = roleInfo.desc;
  document.getElementById('night-info').style.display = 'none';
  document.getElementById('night-info').innerHTML = '';

  const targetArea = document.getElementById('night-target-area');
  const skipBtn = document.getElementById('btn-night-skip');
  targetArea.innerHTML = '';
  skipBtn.style.display = 'block';
  skipBtn.textContent = 'Passer ce rôle ›';

  if (roleKey === 'infiltre') {
    renderNightTargets(targetArea, vivants().filter(j => j.role !== 'infiltre'), (nom) => {
      nightActionsThisNight.victimeInfiltres = nom;
      advanceNightStep();
    });
  } else if (roleKey === 'boumata') {
    const boumataJoueur = vivants().find(j => j.role === 'boumata');
    const pool = vivants().filter(j => j.nom !== boumataJoueur.nom);
    renderNightTargets(targetArea, pool, (nom) => {
      nightActionsThisNight.victimeBoumata = nom;
      advanceNightStep();
    });
  } else if (roleKey === 'ougabanana') {
    const bananaJoueur = vivants().find(j => j.role === 'ougabanana');
    const pool = vivants().filter(j => j.nom !== bananaJoueur.nom);
    renderNightTargets(targetArea, pool, (nom) => {
      nightActionsThisNight.victimeBanana = nom;
      advanceNightStep();
    });
  } else if (roleKey === 'mystique') {
    const mystiqueJoueur = vivants().find(j => j.role === 'mystique');
    const info = document.getElementById('night-info');
    info.style.display = 'block';
    info.innerHTML = `Choisis une action puis un joueur.`;
    targetArea.innerHTML = `
      <button class="vote-btn" onclick="mystiqueChoisirAction('tuer')">Tuer quelqu'un</button>
      <button class="vote-btn" onclick="mystiqueChoisirAction('proteger')">Protéger quelqu'un</button>
    `;
  } else if (roleKey === 'turfu') {
    renderNightTargets(targetArea, vivants(), (nom) => {
      const cible = joueurByNom(nom);
      const info = document.getElementById('night-info');
      info.style.display = 'block';
      info.innerHTML = `<strong>${escapeHtml(nom)}</strong> est : <strong>${ROLES[cible.role].nom}</strong>`;
      targetArea.innerHTML = '';
      skipBtn.textContent = 'Continuer ›';
    });
  } else if (roleKey === 'babybooga') {
    // Le BabyBooga reste discret : il observe le réveil des infiltrés sans que
    // rien ne soit révélé à l'écran (le Maître du Jeu sait qu'il regarde en silence).
    const info = document.getElementById('night-info');
    info.style.display = 'block';
    info.innerHTML = `Le BabyBooga observe discrètement le réveil des infiltrés (rien à révéler ici, il garde ça pour lui).`;
    skipBtn.textContent = 'Continuer ›';
  } else if (roleKey === 'petitbouga') {
    const petitJoueur = vivants().find(j => j.role === 'petitbouga');
    const info = document.getElementById('night-info');
    info.style.display = 'block';
    info.innerHTML = `Utilise-t-il sa massue cette nuit (à usage unique) ?`;
    targetArea.innerHTML = `<button class="vote-btn" onclick="petitBougaUtiliserMassue()">Utiliser la massue</button>`;
    skipBtn.textContent = 'Ne rien faire cette nuit ›';
  }
}

function renderNightTargets(container, liste, onPick) {
  container.innerHTML = liste.map(j =>
    `<button class="vote-btn" onclick="nightPick('${escapeAttr(j.nom)}')">${escapeHtml(j.nom)}</button>`
  ).join('');
  window.__nightPickCallback = onPick;
}

function nightPick(nom) {
  if (window.__nightPickCallback) window.__nightPickCallback(nom);
}

function petitBougaUtiliserMassue() {
  const petitJoueur = vivants().find(j => j.role === 'petitbouga');
  if (!petitJoueur) { advanceNightStep(); return; }
  const targetArea = document.getElementById('night-target-area');
  const pool = vivants().filter(j => j.nom !== petitJoueur.nom);
  renderNightTargets(targetArea, pool, (nom) => {
    nightActionsThisNight.victimePetitBouga = nom;
    nightActionsThisNight.auteurPetitBouga = petitJoueur.nom;
    advanceNightStep();
  });
}

function mystiqueChoisirAction(action) {
  const targetArea = document.getElementById('night-target-area');
  const info = document.getElementById('night-info');

  let pool;
  if (action === 'tuer') {
    pool = vivants().filter(j => j.role !== 'mystique');
  } else {
    // "Protéger" ne peut cibler que des joueurs visés cette nuit même,
    // par les Infiltrés, le Boumata, OugaBanana ou la massue du Petit Bouga
    // (pas encore officiellement morts, la résolution n'a pas encore eu lieu).
    const viseesCetteNuit = [];
    if (nightActionsThisNight.victimeInfiltres) {
      const c = joueurByNom(nightActionsThisNight.victimeInfiltres);
      if (c && c.vivant) viseesCetteNuit.push(c);
    }
    if (nightActionsThisNight.victimeBoumata) {
      const c = joueurByNom(nightActionsThisNight.victimeBoumata);
      if (c && c.vivant) viseesCetteNuit.push(c);
    }
    if (nightActionsThisNight.victimeBanana) {
      const c = joueurByNom(nightActionsThisNight.victimeBanana);
      if (c && c.vivant) viseesCetteNuit.push(c);
    }
    if (nightActionsThisNight.victimePetitBouga) {
      const c = joueurByNom(nightActionsThisNight.victimePetitBouga);
      if (c && c.vivant) viseesCetteNuit.push(c);
    }
    // dédoublonne (au cas où une même personne serait visée deux fois)
    const noms = new Set();
    pool = viseesCetteNuit.filter(j => {
      if (noms.has(j.nom)) return false;
      noms.add(j.nom);
      return true;
    });
  }

  if (pool.length === 0) {
    info.style.display = 'block';
    info.innerHTML = action === 'tuer' ? "Aucune cible possible." : "Personne n'est visé cette nuit pour l'instant, impossible de protéger quelqu'un.";
    targetArea.innerHTML = '';
    document.getElementById('btn-night-skip').textContent = 'Continuer ›';
    return;
  }

  if (action === 'proteger') {
    info.style.display = 'block';
    info.innerHTML = 'Choisis qui sauver parmi les joueurs visés cette nuit même :';
  }

  renderNightTargets(targetArea, pool, (nom) => {
    if (action === 'tuer') {
      nightActionsThisNight.victimeMystique = nom;
    } else {
      nightActionsThisNight.protegeMystique = nom;
    }
    advanceNightStep();
  });
}

function advanceNightStep() {
  nightIndex++;
  runNightStep();
}

function nightSkip() {
  advanceNightStep();
}

/* ════════════════════════════════════════════════════════════
   RÉSOLUTION DE LA NUIT
   ════════════════════════════════════════════════════════════ */

function resolveNight() {
  mortsCetteNuit = [];

  // 1. Le Mystique protège uniquement une victime visée cette nuit même
  //    (il ne peut plus ressusciter un mort des nuits précédentes).
  let nomProtegeParMystique = null;
  if (nightActionsThisNight.protegeMystique) {
    const cible = joueurByNom(nightActionsThisNight.protegeMystique);
    if (cible && cible.vivant) {
      nomProtegeParMystique = cible.nom;
    }
  }

  // 2. Petit Bouga : usage unique de la massue
  if (nightActionsThisNight.victimePetitBouga) {
    const petit = joueurByNom(nightActionsThisNight.auteurPetitBouga);
    const cible = joueurByNom(nightActionsThisNight.victimePetitBouga);
    if (petit) petit.massueUtilisee = true;

    if (cible && cible.nom === nomProtegeParMystique) {
      mortsCetteNuit.push(`(la massue visait ${cible.nom}, mais le Mystique l'a sauvé)`);
    } else if (cible) {
      const cibleEstMechante = estInfiltre(cible) || estSolo(cible);
      if (cibleEstMechante) {
        // bonne pioche : la cible (méchante) meurt
        killPlayer(cible.nom, mortsCetteNuit, `Tué par la massue du Petit Bouga (Nuit ${nightNumber})`);
      } else {
        // mauvaise pioche : seul le Petit Bouga meurt, la cible est révélée innocente
        if (petit && petit.vivant) {
          killPlayer(petit.nom, mortsCetteNuit, `Mort en se trompant de cible avec sa massue (Nuit ${nightNumber})`);
        }
        mortsCetteNuit.push(`(la massue visait ${cible.nom}, qui est innocenté)`);
      }
    }
  }

  // 3. Victimes désignées cette nuit (infiltrés, Boumata, OugaBanana)
  let candidats = []; // [{nom, cause}]
  if (nightActionsThisNight.victimeInfiltres) candidats.push({ nom: nightActionsThisNight.victimeInfiltres, cause: `Tué par les Infiltrés (Nuit ${nightNumber})` });
  if (nightActionsThisNight.victimeBoumata) candidats.push({ nom: nightActionsThisNight.victimeBoumata, cause: `Tué par le Bouga Infiltré de la grotte Boumata (Nuit ${nightNumber})` });
  if (nightActionsThisNight.victimeBanana) candidats.push({ nom: nightActionsThisNight.victimeBanana, cause: `Tué par OugaBanana (Nuit ${nightNumber})` });

  candidats.forEach(({ nom, cause }) => {
    if (nom === nomProtegeParMystique) {
      mortsCetteNuit.push(`(${nom} était visé cette nuit, mais le Mystique l'a sauvé)`);
      return;
    }
    killPlayer(nom, mortsCetteNuit, cause);
  });

  traiterLanceEnAttente(mortsCetteNuit, (finalDeathLog) => {
    mortsCetteNuit = finalDeathLog;
    showMorningRecap([]);
  });
}

/* tue un joueur en gérant: OugaBooma (2 vies), Lance (vengeance), Bougamoureux (chagrin).
   `cause` est un texte lisible stocké sur le joueur pour le récap final (ex: "Tué par les Infiltrés (Nuit 2)"). */
function killPlayer(nom, deathLog, cause) {
  const j = joueurByNom(nom);
  if (!j || !j.vivant) return;

  const causeFinale = cause || 'Mort en pleine nuit';

  // OugaBooma : survit une première fois
  if (j.role === 'ougabooma' && !j.vieBooma) {
    j.vieBooma = true; // a consommé sa "résurrection"
    if (!deathLog.includes(nom + ' (a survécu grâce à sa sagesse)')) {
      deathLog.push(nom + ' (a survécu grâce à sa sagesse)');
    }
    return;
  }

  j.vivant = false;
  j.causeMort = causeFinale;
  deathLog.push(nom);

  // Lance : doit désigner lui-même une cible à sa mort (traité après coup, façon chasseur)
  if (j.role === 'lance') {
    lanceEnAttente.push(nom);
  }

  // Bougamoureux : l'amoureux meurt de chagrin
  if (j.amoureuxDe) {
    const autre = joueurByNom(j.amoureuxDe);
    if (autre && autre.vivant) {
      autre.vivant = false;
      autre.causeMort = `Mort de chagrin (amoureux de ${nom})`;
      deathLog.push(autre.nom + ' (meurt de chagrin)');
    }
  }
  joueurs.forEach(p => {
    if (p.amoureuxDe === nom && p.vivant) {
      p.vivant = false;
      p.causeMort = `Mort de chagrin (amoureux de ${nom})`;
      deathLog.push(p.nom + ' (meurt de chagrin)');
    }
  });

  // BougaMoutar : si son modèle meurt, il devient infiltré
  joueurs.forEach(p => {
    if (p.modeleDe === nom && p.vivant && !p.devenuInfiltre) {
      p.devenuInfiltre = true;
      deathLog.push(p.nom + ' (devient infiltré, son modèle est tombé)');
    }
  });
}

/* effectivement infiltré pour le calcul des conditions de victoire */
function estInfiltre(j) {
  return j.role === 'infiltre' || j.devenuInfiltre;
}
function estSolo(j) {
  return j.role === 'ougabanana' || j.role === 'boumata';
}

/* ════════════════════════════════════════════════════════════
   LANCE — choix de cible façon "chasseur" à sa mort
   ════════════════════════════════════════════════════════════ */

/* Doit être appelé après toute résolution de morts (nuit ou vote).
   Si un ou plusieurs Lance viennent de mourir, ouvre un écran de choix
   pour chacun (successivement), puis appelle callback(deathLog) une fois terminé. */
function traiterLanceEnAttente(deathLog, callback) {
  if (lanceEnAttente.length === 0) {
    callback(deathLog);
    return;
  }
  const nomLance = lanceEnAttente.shift();
  lanceCallbackApresChoix = () => traiterLanceEnAttente(deathLog, callback);

  showScreen('screen-night');
  document.getElementById('night-jour-label').textContent = 'Dernière volonté';
  document.getElementById('night-role-title').textContent = `${nomLance} (Bouga à Lance) vient de mourir`;
  document.getElementById('night-role-desc').textContent = "Il désigne un dernier joueur à emporter avec lui.";
  const info = document.getElementById('night-info');
  info.style.display = 'none';
  info.innerHTML = '';

  const targetArea = document.getElementById('night-target-area');
  const skipBtn = document.getElementById('btn-night-skip');
  const pool = vivants();

  if (pool.length === 0) {
    targetArea.innerHTML = '';
    skipBtn.style.display = 'block';
    skipBtn.textContent = 'Continuer ›';
    skipBtn.onclick = () => {
      skipBtn.onclick = nightSkip; // reset au comportement par défaut
      if (lanceCallbackApresChoix) { const cb = lanceCallbackApresChoix; lanceCallbackApresChoix = null; cb(); }
    };
    return;
  }

  skipBtn.style.display = 'block';
  skipBtn.textContent = 'Ne viser personne ›';
  skipBtn.onclick = () => {
    skipBtn.onclick = nightSkip;
    if (lanceCallbackApresChoix) { const cb = lanceCallbackApresChoix; lanceCallbackApresChoix = null; cb(); }
  };

  renderNightTargets(targetArea, pool, (nomCible) => {
    skipBtn.onclick = nightSkip; // reset
    killPlayer(nomCible, deathLog, `Tué par la lance de ${nomLance}`);
    deathLog[deathLog.length - 1] = deathLog[deathLog.length - 1] + ` (tué par la lance de ${nomLance})`;
    if (lanceCallbackApresChoix) { const cb = lanceCallbackApresChoix; lanceCallbackApresChoix = null; cb(); }
  });
}

function showMorningRecap(revives) {
  showScreen('screen-morning');
  const title = document.getElementById('morning-title');
  const content = document.getElementById('morning-content');

  if (mortsCetteNuit.length === 0 && revives.length === 0) {
    title.textContent = "Le village se réveille... une nuit calme.";
    content.innerHTML = `<p class="parole-hint" style="text-align:center">Personne n'est mort cette nuit.</p>`;
  } else {
    title.textContent = "Le village se réveille...";
    let html = '';
    revives.forEach(nom => {
      html += `<div class="morning-row"><span class="morning-nom">${escapeHtml(nom)}</span><span class="morning-tag">Revenu à la vie</span></div>`;
    });
    mortsCetteNuit.forEach(entry => {
      if (entry.startsWith('(')) {
        html += `<div class="morning-row"><span class="morning-nom">Information</span><span class="morning-tag">${escapeHtml(entry)}</span></div>`;
        return;
      }
      const nom = entry.split(' (')[0];
      const suffix = entry.includes('(') ? entry.substring(entry.indexOf('(')) : '';
      html += `<div class="morning-row dead"><span class="morning-nom"> ${escapeHtml(nom)}</span><span class="morning-tag">${escapeHtml(suffix)}</span></div>`;
    });
    content.innerHTML = html;
  }

  // vérifie une condition de victoire avant de continuer
  if (checkVictory()) return;
}

function goToParole() {
  if (checkVictory()) return;
  // Nuit 1 : pas encore de Chef Bouga, on organise l'election avant le tour de parole
  if (nightNumber === 1 && maire === null) {
    beginElectionMaire();
    return;
  }
  // Chef Bouga mort cette nuit : le titre disparait
  if (maire && !joueurByNom(maire).vivant) {
    maire = null;
  }
  beginParole();
}

/* ════════════════════════════════════════════════════════════
   TOUR DE PAROLE
   ════════════════════════════════════════════════════════════ */

let paroleOrdre = [];
let paroleIndex = 0;

function beginParole() {
  paroleOrdre = shuffle(vivants().map(j => j.nom));
  paroleIndex = 0;
  showScreen('screen-parole');
  renderParole();
}

function renderParole() {
  const chips = document.getElementById('parole-chips');
  chips.innerHTML = paroleOrdre.map((nom, i) => {
    return chipJoueur(nom, i === paroleIndex);
  }).join('');
  document.getElementById('parole-name').textContent = paroleOrdre[paroleIndex] || '-';
}

function nextParole() {
  paroleIndex++;
  if (paroleIndex >= paroleOrdre.length) {
    beginVote();
    return;
  }
  renderParole();
}

/* ════════════════════════════════════════════════════════════
   VOTE & ÉLIMINATION
   ════════════════════════════════════════════════════════════ */

function beginVote() {
  showScreen('screen-vote');
  document.getElementById('vote-result').style.display = 'none';
  document.getElementById('vote-result').innerHTML = '';
  document.querySelector('#screen-vote .vote-title').textContent = 'Qui eliminez-vous ?';
  document.querySelector('#screen-vote .vote-sub').textContent = "Votez a main levee, puis appuyez sur le joueur le plus vote. En cas d'egalite, le Chef Bouga tranche.";
  renderVotePlayers();
}

function renderVotePlayers() {
  const container = document.getElementById('vote-players');
  // En phase de vote normal, tout le monde peut etre vote (y compris OugaBounta)
  // Le Chef Bouga a un badge visuel
  container.innerHTML = vivants().map(function(j) {
    const isChef = maire && maire === j.nom;
    const label = escapeHtml(j.nom) + (isChef ? ' <span class="vote-chef-badge">Chef Bouga</span>' : '');
    return '<button class="vote-btn' + (isChef ? ' vote-btn-chef' : '') + '"'
      + ' onclick="voterContre(' + "'" + escapeAttr(j.nom) + "'" + ')">' + label + '</button>';
  }).join('');
}

function voterContre(nom) {
  const j = joueurByNom(nom);
  if (!j) return;

  // Si OugaBounta : annonce qu'il est protege, pas d'elimination
  if (j.role === 'ougabounta') {
    // OugaBounta révélé — il ne meurt pas, le village perd sa journée
    ougabountaRevele = true;
    const resultEl = document.getElementById('vote-result');
    resultEl.style.display = 'flex';
    resultEl.innerHTML = '<div class="result-block warning"><strong>' + escapeHtml(nom) + '</strong> est OugaBounta ! Il ne peut pas etre expulse de la grotte. Le village perd sa journee de vote.</div>';
    document.getElementById('vote-players').innerHTML = '';
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Continuer';
    btn.style.marginTop = '1rem';
    btn.onclick = function() {
      if (checkVictory()) return;
      beginNight();
    };
    resultEl.appendChild(btn);
    return;
  }

  // Si le Chef Bouga vote pour quelqu'un : son vote est decisif en cas d'egalite.
  // Ici le MJ a deja recueilli les votes a main levee. On lui demande si c'est une egalite.
  if (maire && vivants().length > 2) {
    // Proposer au MJ : egalite ou pas ?
    const resultEl = document.getElementById('vote-result');
    resultEl.style.display = 'flex';
    resultEl.innerHTML = '<div class="result-block bravo">Le village vote contre <strong>' + escapeHtml(nom) + '</strong>.<br><span class="result-sub">Y a-t-il egalite dans les votes ?</span></div>';
    document.getElementById('vote-players').innerHTML = '';

    const btnEgalite = document.createElement('button');
    btnEgalite.className = 'btn btn-primary';
    btnEgalite.textContent = 'Oui, egalite — le Chef Bouga tranche';
    btnEgalite.style.marginTop = '1rem';
    btnEgalite.onclick = function() { voteChefBouga(nom); };

    const btnNon = document.createElement('button');
    btnNon.className = 'btn btn-quit';
    btnNon.textContent = 'Non, ce joueur est elimine';
    btnNon.style.marginTop = '0.5rem';
    btnNon.onclick = function() { confirmerElimination(nom); };

    resultEl.appendChild(btnEgalite);
    resultEl.appendChild(btnNon);
  } else {
    confirmerElimination(nom);
  }
}

// Le Chef Bouga vote en cas d'egalite : il choisit parmi les joueurs ex-aequo
function voteChefBouga(nomPropose) {
  showScreen('screen-vote');
  document.getElementById('vote-result').style.display = 'none';
  document.getElementById('vote-result').innerHTML = '';
  document.querySelector('#screen-vote .vote-title').textContent = 'Vote du Chef Bouga';
  document.querySelector('#screen-vote .vote-sub').textContent = 'Egalite ! Le Chef Bouga designe le joueur a eliminer. Son vote est decisif.';
  const container = document.getElementById('vote-players');
  // Le Chef Bouga choisit parmi tous les vivants sauf lui-meme (et OugaBounta si revele)
  container.innerHTML = vivants().map(function(j) {
    if (j.nom === maire) return '';
    if (j.role === 'ougabounta' && ougabountaRevele) return '';
    return '<button class="vote-btn" onclick="confirmerElimination(' + "'" + escapeAttr(j.nom) + "'" + ')">' + escapeHtml(j.nom) + '</button>';
  }).join('');
}

function confirmerElimination(nom) {
  const j = joueurByNom(nom);
  if (!j) return;

  const estChefBouga = maire && maire === nom;

  let deathLog = [];
  killPlayer(nom, deathLog, 'Elimine par le vote du village (Jour ' + nightNumber + ')');

  traiterLanceEnAttente(deathLog, function(finalDeathLog) {
    if (estChefBouga && vivants().length > 0) {
      // Chef Bouga elimine par vote : il transmet son titre avant le resultat
      afficherResultatVote(nom, j, finalDeathLog); // affiche d'abord le resultat
      // puis propose la transmission
      const resultEl = document.getElementById('vote-result');
      const divTransmet = document.createElement('div');
      divTransmet.className = 'result-block warning';
      divTransmet.innerHTML = 'Le Chef Bouga a ete elimine. Il doit transmettre son titre avant la prochaine nuit.';
      resultEl.appendChild(divTransmet);
      const btn = document.createElement('button');
      btn.className = 'btn btn-primary';
      btn.textContent = 'Transmettre le titre';
      btn.style.marginTop = '1rem';
      btn.onclick = function() { ouvrirTransmission(finalDeathLog); };
      resultEl.appendChild(btn);
    } else {
      if (estChefBouga) maire = null;
      afficherResultatVote(nom, j, finalDeathLog);
    }
  });
}

// Alias pour compatibilite (utilise dans afficherResultatVote pour le bouton continuer)
function eliminerJoueur(nom) { voterContre(nom); }

function ouvrirTransmission() {
  maire = null;
  showScreen('screen-vote');
  document.getElementById('vote-result').style.display = 'none';
  document.getElementById('vote-result').innerHTML = '';
  document.querySelector('#screen-vote .vote-title').textContent = 'Transmission du titre';
  document.querySelector('#screen-vote .vote-sub').textContent = 'Le Chef Bouga designe son successeur parmi les survivants.';
  const container = document.getElementById('vote-players');
  container.innerHTML = vivants().map(function(j) {
    const interdit = j.role === 'ougabounta' && ougabountaRevele;
    return '<button class="vote-btn' + (interdit ? ' maire-interdit' : '') + '"'
      + (interdit ? ' disabled title="OugaBounta ne peut pas etre Chef Bouga"' : '')
      + ' onclick="recevoirTitre(' + "'" + escapeAttr(j.nom) + "'" + ')">'
      + escapeHtml(j.nom) + '</button>';
  }).join('');
}

function recevoirTitre(nom) {
  const j = joueurByNom(nom);
  if (j && j.role === 'ougabounta' && ougabountaRevele) return;
  if (j && j.role === 'ougabounta') {
    // OugaBounta reçoit le titre et est révélé
    ougabountaRevele = true;
  }
  maire = nom;
  const btns = document.querySelectorAll('#vote-players .vote-btn');
  btns.forEach(function(btn) {
    btn.disabled = true;
    if (btn.textContent.trim() === nom) btn.classList.add('maire-elu');
  });
  setTimeout(function() { beginNight(); }, 900);
}

function afficherResultatVote(nom, j, deathLog) {
  showScreen('screen-vote');
  const resultArea = document.getElementById('vote-result');
  resultArea.style.display = 'flex';
  let html = `<div class="result-block bravo">Le village a éliminé <strong>${escapeHtml(nom)}</strong>.<span class="result-sub">C'était : ${escapeHtml(ROLES[j.role].nom)} (${j.role === 'ougabooma' && deathLog[0] && deathLog[0].includes('survécu') ? 'a survécu' : (estInfiltre(j) ? 'Infiltré' : (estSolo(j) ? 'Solitaire' : 'Clan Bouga'))})</span></div>`;

  deathLog.forEach(entry => {
    if (entry.startsWith(nom)) return; // déjà annoncé ci-dessus
    if (entry.startsWith('(')) {
      html += `<div class="result-block warning">${escapeHtml(entry)}</div>`;
      return;
    }
    const n = entry.split(' (')[0];
    const suffix = entry.includes('(') ? entry.substring(entry.indexOf('(')) : '';
    html += `<div class="result-block fail"> <strong>${escapeHtml(n)}</strong> ${escapeHtml(suffix)}</div>`;
  });

  resultArea.innerHTML = html;
  document.getElementById('vote-players').innerHTML = '';

  const btn = document.createElement('button');
  btn.className = 'btn btn-primary';
  btn.textContent = 'Continuer ›';
  btn.style.marginTop = '1rem';
  btn.onclick = () => {
    if (checkVictory()) return;
    beginNight();
  };
  resultArea.appendChild(btn);
}

/* ════════════════════════════════════════════════════════════
   CONDITIONS DE VICTOIRE
   ════════════════════════════════════════════════════════════ */

function checkVictory() {
  const v = vivants();
  const nbInfiltres = v.filter(estInfiltre).length;
  const solos = v.filter(estSolo);
  const nbBooga = v.filter(j => !estInfiltre(j) && !estSolo(j)).length;

  // Un rôle solo (OugaBanana, Boumata) gagne s'il est le dernier survivant
  if (solos.length === 1 && v.length === 1) {
    const gagnant = solos[0];
    const titre = gagnant.role === 'boumata' ? "Le Bouga Infiltré de la grotte Boumata triomphe !" : "OugaBanana triomphe !";
    afficherVictoire('solo', titre, `${gagnant.nom} est le dernier survivant.`, [gagnant.nom]);
    return true;
  }

  // si plus aucun infiltré et qu'il reste au moins un Bouga (les solos doivent aussi être éliminés)
  if (nbInfiltres === 0 && solos.length === 0 && nbBooga > 0) {
    afficherVictoire('booga', "Le Clan Bouga gagne !", "Tous les infiltrés ont été éliminés.", v.filter(j => !estInfiltre(j)).map(j => j.nom));
    return true;
  }
  if (nbInfiltres > 0 && nbInfiltres >= nbBooga + solos.length) {
    afficherVictoire('infiltre', "Les Infiltrés gagnent !", "Ils sont aussi nombreux (ou plus) que le reste du village.", v.filter(estInfiltre).map(j => j.nom));
    return true;
  }
  if (v.length === 0) {
    afficherVictoire('egalite', "Égalité totale", "Plus aucun survivant dans la grotte.", []);
    return true;
  }

  return false;
}

function afficherVictoire(camp, titre, sous, gagnants) {
  showScreen('screen-win');
  const content = document.getElementById('win-content');
  content.className = 'win-content win-screen-' + camp;
  content.innerHTML = `
    <p class="win-titre">${escapeHtml(titre)}</p>
    <p class="win-sous">${escapeHtml(sous)}</p>
    <div class="win-players">${gagnants.map(n => `<span class="win-player">${escapeHtml(n)}</span>`).join('')}</div>
  `;
}

function showRecap() {
  showScreen('screen-final');
  const content = document.getElementById('final-content');
  let html = `<div class="final-header"><span class="final-col-header">Joueur</span><span class="final-col-header" style="text-align:right">Rôle</span></div>`;
  joueurs.forEach(j => {
    const camp = estInfiltre(j) ? 'infiltre' : (estSolo(j) ? 'solo' : 'booga');
    const statut = j.vivant ? 'En vie' : (j.causeMort || 'Éliminé');
    html += `
      <div class="final-row final-${camp} ${j.vivant ? '' : 'dead'}">
        <span class="final-nom">${escapeHtml(j.nom)}</span>
        <span class="final-role">${escapeHtml(ROLES[j.role].nom)}</span>
        <span class="final-status">${j.vivant ? 'En vie' : ' ' + escapeHtml(statut)}${j.devenuInfiltre ? ' · a rejoint les infiltrés' : ''}</span>
      </div>`;
  });
  content.innerHTML = html;
}

/* ════════════════════════════════════════════════════════════
   RESET / QUITTER
   ════════════════════════════════════════════════════════════ */

function quitGame() {
  joueurs = [];
  config = {};
  ordreDistribution = [];
  indexDistribution = 0;
  nightQueue = [];
  nightIndex = 0;
  nightActionsThisNight = {};
  nightNumber = 0;
  mortsCetteNuit = [];
  bougamoureuxPaire = null;
  bougamoutarPaire = null;
  boumataCompteur = 0;
  lanceEnAttente = [];
  lanceCallbackApresChoix = null;
  maire = null;
  ougabountaRevele = false;
  paroleOrdre = [];
  paroleIndex = 0;

  renderPlayerList();
  ['switch-mystique','switch-lance','switch-turfu','switch-babybooga','switch-booma','switch-bounta','switch-banana','switch-petit','switch-bougamoureux','switch-moutar','switch-boumata']
    .forEach(id => { document.getElementById(id).checked = false; });
  document.getElementById('switch-booga').value = 0;
  document.getElementById('switch-booga-display').textContent = '0';
  document.getElementById('switch-infiltre').value = 0;
  document.getElementById('switch-infiltre-display').textContent = '0';

  checkStartButton();
  showScreen('screen-setup');
}
