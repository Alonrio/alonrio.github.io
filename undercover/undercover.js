const paires = [
  ["chaussure", "chausson"],
  ["T-shirt", "veste"],
  ["chat", "tigre"],
  ["chien", "loup"],
  ["souris", "rat"],
  ["lion", "panthère"],
  ["vache", "taureau"],
  ["cheval", "poney"],
  ["zèbre", "cheval"],
  ["lapin", "lièvre"],
  ["canard", "oie"],
  ["poule", "dinde"],
  ["aigle", "faucon"],
  ["requin", "dauphin"],
  ["baleine", "orque"],
  ["pomme", "poire"],
  ["fraise", "framboise"],
  ["citron", "orange"],
  ["mandarine", "clémentine"],
  ["cerise", "prune"],
  ["abricot", "pêche"],
  ["ananas", "mangue"],
  ["kiwi", "melon"],
  ["pastèque", "melon"],
  ["banane", "plantain"],
  ["tomate", "poivron"],
  ["carotte", "navet"],
  ["courgette", "concombre"],
  ["brocoli", "chou-fleur"],
  ["haricot", "pois"],
  ["riz", "pâtes"],
  ["pizza", "calzone"],
  ["hamburger", "cheeseburger"],
  ["tacos", "burrito"],
  ["crêpe", "galette"],
  ["gaufre", "pancake"],
  ["croissant", "pain au chocolat"],
  ["baguette", "pain"],
  ["café", "thé"],
  ["jus", "soda"],
  ["eau", "limonade"],
  ["bière", "cidre"],
  ["voiture", "camion"],
  ["moto", "scooter"],
  ["vélo", "trottinette"],
  ["bus", "car"],
  ["train", "tramway"],
  ["métro", "RER"],
  ["avion", "hélicoptère"],
  ["bateau", "ferry"],
  ["fusée", "navette"],
  ["tracteur", "moissonneuse"],
  ["maison", "immeuble"],
  ["appartement", "studio"],
  ["villa", "manoir"],
  ["château", "palais"],
  ["cabane", "yourte"],
  ["église", "cathédrale"],
  ["mosquée", "synagogue"],
  ["école", "université"],
  ["bibliothèque", "librairie"],
  ["hôpital", "clinique"],
  ["bureau", "open-space"],
  ["ordinateur", "portable"],
  ["clavier", "souris"],
  ["écran", "télévision"],
  ["tablette", "smartphone"],
  ["casque", "écouteurs"],
  ["micro", "haut-parleur"],
  ["imprimante", "scanner"],
  ["routeur", "modem"],
  ["clé USB", "disque dur"],
  ["console", "manette"],
  ["football", "rugby"],
  ["basket", "handball"],
  ["tennis", "badminton"],
  ["volley", "beach-volley"],
  ["natation", "plongée"],
  ["ski", "snowboard"],
  ["jogging", "marathon"],
  ["escrime", "sabre"],
  ["boxe", "kickboxing"],
  ["golf", "mini-golf"],
  ["stylo", "crayon"],
  ["feutre", "marqueur"],
  ["gomme", "correcteur"],
  ["cahier", "bloc-notes"],
  ["livre", "roman"],
  ["journal", "magazine"],
  ["carte", "plan"],
  ["lettre", "courrier"],
  ["enveloppe", "colis"],
  ["tampon", "signature"],
  ["soleil", "étoile"],
  ["lune", "satellite"],
  ["planète", "astéroïde"],
  ["terre", "mars"],
  ["océan", "mer"],
  ["rivière", "fleuve"],
  ["lac", "étang"],
  ["montagne", "colline"],
  ["forêt", "jungle"],
  ["désert", "savane"],
  ["roi", "empereur"],
  ["reine", "princesse"],
  ["prince", "duc"],
  ["soldat", "guerrier"],
  ["policier", "gendarme"],
  ["pompier", "secouriste"],
  ["docteur", "chirurgien"],
  ["professeur", "instituteur"],
  ["acteur", "comédien"],
  ["chanteur", "musicien"],
  ["guitare", "ukulélé"],
  ["piano", "clavier"],
  ["violon", "alto"],
  ["batterie", "percussion"],
  ["flûte", "clarinette"],
  ["trompette", "saxophone"],
  ["album", "single"],
  ["film", "série"],
  ["cinéma", "théâtre"],
  ["dessin", "peinture"],
  ["photo", "portrait"],
  ["table", "bureau"],
  ["chaise", "tabouret"],
  ["canapé", "fauteuil"],
  ["lit", "matelas"],
  ["armoire", "placard"],
  ["commode", "buffet"],
  ["lampe", "lustre"],
  ["miroir", "vitre"],
  ["porte", "portail"],
  ["fenêtre", "baie vitrée"],
  ["chemise", "polo"],
  ["pull", "sweat"],
  ["jean", "pantalon"],
  ["short", "bermuda"],
  ["robe", "jupe"],
  ["costume", "smoking"],
  ["chaussette", "collant"],
  ["casquette", "bonnet"],
  ["écharpe", "foulard"],
  ["gant", "mitaine"],
  ["rouge", "rose"],
  ["bleu", "cyan"],
  ["vert", "turquoise"],
  ["jaune", "orange"],
  ["violet", "pourpre"],
  ["blanc", "ivoire"],
  ["noir", "gris"],
  ["argent", "or"],
  ["cuivre", "bronze"],
  ["diamant", "rubis"],
  ["couteau", "dague"],
  ["épée", "sabre"],
  ["arc", "arbalète"],
  ["bouclier", "armure"],
  ["marteau", "maillet"],
  ["tournevis", "clé"],
  ["pelle", "bêche"],
  ["balai", "serpillière"],
  ["savon", "shampoing"],
  ["brosse", "peigne"],
  ["nez", "oreille"],
  ["œil", "paupière"],
  ["bouche", "lèvre"],
  ["main", "poignet"],
  ["bras", "épaule"],
  ["jambe", "cuisse"],
  ["pied", "cheville"],
  ["cœur", "cerveau"],
  ["sang", "plasma"],
  ["os", "squelette"],
  ["orage", "tempête"],
  ["pluie", "averse"],
  ["neige", "grêle"],
  ["vent", "bourrasque"],
  ["nuage", "brume"],
  ["éclair", "tonnerre"],
  ["printemps", "été"],
  ["automne", "hiver"],
  ["jour", "nuit"],
  ["aube", "crépuscule"],
  ["argent", "monnaie"],
  ["banque", "coffre"],
  ["ticket", "billet"],
  ["facture", "reçu"],
  ["marché", "supermarché"],
  ["boutique", "magasin"],
  ["client", "consommateur"],
  ["vendeur", "caissier"],
  ["patron", "directeur"],
  ["employé", "stagiaire"],
  ["avocat", "juge"],
  ["procureur", "avocat"],
  ["dentiste", "orthodontiste"],
  ["infirmier", "aide-soignant"],
  ["pharmacien", "chimiste"],
  ["vétérinaire", "zoologue"],
  ["architecte", "ingénieur"],
  ["menuisier", "charpentier"],
  ["plombier", "électricien"],
  ["peintre", "décorateur"],
  ["boulanger", "pâtissier"],
  ["cuisinier", "chef"],
  ["serveur", "barman"],
  ["pilote", "commandant"],
  ["marin", "capitaine"],
  ["astronaute", "cosmonaute"],
  ["journaliste", "reporter"],
  ["écrivain", "auteur"],
  ["poète", "romancier"],
  ["dessinateur", "illustrateur"],
  ["téléphone", "smartphone"],
  ["montre", "bracelet"],
  ["caméra", "appareil photo"],
  ["drone", "hélicoptère"],
  ["enceinte", "haut-parleur"],
  ["chargeur", "adaptateur"],
  ["batterie", "pile"],
  ["câble", "fil"],
  ["wifi", "bluetooth"],
  ["internet", "réseau"],
  ["serveur", "ordinateur"],
  ["robot", "androïde"],
  ["algorithme", "programme"],
  ["logiciel", "application"],
  ["jeu vidéo", "arcade"],
  ["manette", "joystick"],
  ["clown", "mime"],
  ["magicien", "illusionniste"],
  ["pirate", "corsaire"],
  ["ninja", "samouraï"],
  ["cowboy", "shérif"],
  ["roi", "sultan"],
  ["empereur", "tsar"],
  ["prêtre", "moine"],
  ["sorcier", "mage"],
  ["dragon", "wyverne"],
  ["licorne", "cheval"],
  ["sirène", "néréide"],
  ["vampire", "loup-garou"],
  ["fantôme", "spectre"],
  ["zombie", "momie"],
  ["démon", "diable"],
  ["ange", "archange"],
  ["géant", "ogre"],
  ["elfe", "fée"],
  ["nain", "gobelin"],
  ["trésor", "butin"],
  ["carte", "boussole"],
  ["île", "archipel"],
  ["volcan", "geyser"],
  ["cascade", "chute"],
  ["grotte", "caverne"],
  ["falaise", "ravin"],
  ["plage", "lagon"],
  ["port", "quai"],
  ["phare", "tour"],
  ["camping", "caravane"],
  ["hôtel", "auberge"],
  ["restaurant", "brasserie"],
  ["café", "bistrot"],
  ["musée", "galerie"],
  ["stade", "arène"],
  ["parc", "jardin"],
  ["zoo", "aquarium"],
  ["pont", "viaduc"],
  ["tunnel", "passage"],
  ["autoroute", "rocade"],
  ["feu rouge", "stop"],
  ["carrefour", "rond-point"],
  ["valise", "sac"],
  ["parapluie", "ombrelle"],
  ["lunettes", "jumelles"],
  ["bague", "anneau"],
  ["collier", "pendentif"],
  ["bracelet", "gourmette"],
  ["parfum", "déodorant"],
  ["crème", "lotion"],
  ["serviette", "essuie-main"],
  ["oreiller", "coussin"],
  ["couette", "couverture"],
  ["rideau", "store"],
  ["frigo", "congélateur"],
  ["four", "micro-ondes"],
  ["casserole", "marmite"],
  ["poêle", "wok"],
  ["assiette", "plat"],
  ["verre", "gobelet"],
  ["tasse", "mug"],
  ["fourchette", "cuillère"],
  ["salade", "crudités"],
  ["soupe", "potage"],
  ["sandwich", "panini"],
  ["omelette", "œuf"],
  ["fromage", "camembert"],
  ["yaourt", "fromage blanc"],
  ["beurre", "margarine"],
  ["miel", "sirop"],
  ["sucre", "cassonade"],
  ["sel", "poivre"],
  ["épice", "herbe"],
  ["basilic", "menthe"],
  ["persil", "coriandre"],
  ["noisette", "amande"],
  ["cacahuète", "pistache"],
  ["raisin", "groseille"],
  ["myrtille", "mûre"],
  ["figue", "datte"],
  ["noix de coco", "ananas"],
  ["grenade", "fruit de la passion"],
  ["koala", "panda"],
  ["kangourou", "wallaby"],
  ["gorille", "chimpanzé"],
  ["orang-outan", "gibbon"],
  ["hippopotame", "rhinocéros"],
  ["girafe", "okapi"],
  ["éléphant", "mammouth"],
  ["bison", "bufflon"],
  ["cerf", "daim"],
  ["sanglier", "phacochère"],
  ["écureuil", "tamia"],
  ["hérisson", "porc-épic"],
  ["taupe", "campagnol"],
  ["hamster", "gerbille"],
  ["perroquet", "perruche"],
  ["corbeau", "corneille"],
  ["hibou", "chouette"],
  ["pingouin", "manchot"],
  ["pélican", "cormoran"],
  ["cygne", "canard"],
  ["crabe", "homard"],
  ["crevette", "langoustine"],
  ["pieuvre", "calmar"],
  ["méduse", "anémone"],
  ["saumon", "truite"],
  ["thon", "espadon"],
  ["morue", "colin"],
  ["grenouille", "crapaud"],
  ["lézard", "iguane"],
  ["crocodile", "alligator"],
  ["serpent", "python"],
  ["tortue", "carapace"],
  ["diamant", "saphir"],
  ["émeraude", "jade"],
  ["cristal", "verre"],
  ["acier", "fer"],
  ["aluminium", "titane"],
  ["béton", "ciment"],
  ["brique", "parpaing"],
  ["papier", "carton"],
  ["tissu", "velours"],
  ["cuir", "daim"],
  ["laine", "cachemire"],
  ["coton", "lin"],
  ["fusain", "charbon"],
  ["encre", "peinture"],
  ["palette", "toile"],
  ["sculpture", "statue"],
  ["orchestre", "chorale"],
  ["concert", "festival"],
  ["danse", "ballet"],
  ["opéra", "comédie musicale"],
  ["roman", "nouvelle"],
  ["bande dessinée", "manga"],
  ["chapitre", "paragraphe"],
  ["mot", "phrase"],
  ["question", "énigme"],
  ["réponse", "solution"],
  ["secret", "mystère"],
  ["indice", "piste"],
  ["victoire", "triomphe"],
  ["défaite", "échec"],
  ["chance", "fortune"],
  ["risque", "danger"],
  ["bonheur", "joie"],
  ["tristesse", "mélancolie"],
  ["colère", "rage"],
  ["peur", "angoisse"],
  ["amour", "passion"],
  ["amitié", "camaraderie"],
  ["famille", "parenté"],
  ["bébé", "nourrisson"],
  ["enfant", "adolescent"],
  ["adulte", "senior"],
  ["grand-père", "grand-mère"],
  ["frère", "cousin"],
  ["sœur", "cousine"]
];

// ════════════════════════════════════════════════════
//  ÉTAT GLOBAL
// ════════════════════════════════════════════════════

let joueurs       = [];
let indexJoueur   = 0;
let motUndercover = '';
let motCitoyen    = '';
let roles         = [];
let joueursActifs = [];
let isAnimating   = false;
let resultatFinal = null;
let indexParole   = 0;
let mwEnAttenteGuess = null; // nom du MW qui doit deviner après son élim

// Compteurs UC / MW
let nbUC = 1;
let nbMW = 0;

// ════════════════════════════════════════════════════
//  SETUP — COMPTEURS + SWITCH
// ════════════════════════════════════════════════════

function changeCount(type, delta) {
  const totalJoueurs = joueurs.length;
  if (type === 'uc') {
    nbUC = Math.max(1, nbUC + delta);
  } else {
    nbMW = Math.max(0, nbMW + delta);
  }
  document.getElementById('count-uc').textContent = nbUC;
  document.getElementById('count-mw').textContent = nbMW;
  validateComposition();
}

function validateComposition() {
  const total      = joueurs.length;
  const imposteurs = nbUC + nbMW;
  const citoyens   = total - imposteurs;
  const bubble     = document.getElementById('start-bubble');
  const btn        = document.getElementById('btn-start');

  function setBubble(msg, type) {
    // type: 'error' | 'advice' | 'ok' | 'hidden'
    bubble.textContent = msg;
    bubble.className   = 'start-bubble' + (type !== 'hidden' ? ' bubble-' + type : '');
    bubble.style.display = type === 'hidden' ? 'none' : 'block';
  }

  if (total < 3) {
    if (total === 0) {
      setBubble('Ajoute au moins 3 joueurs pour commencer.', 'error');
    } else {
      setBubble(`Il faut au moins 3 joueurs — encore ${3 - total} à ajouter.`, 'error');
    }
    btn.disabled = true;
    return;
  }

  // ── ERREURS BLOQUANTES ───────────────────────────────
  if (nbUC === 0) {
    setBubble('Il faut au moins 1 UnderCover.', 'error');
    btn.disabled = true;
    return;
  }
  if (citoyens < 2) {
    setBubble('Il faut au moins 2 Citoyens pour jouer.', 'error');
    btn.disabled = true;
    return;
  }

  // ── CONSEILS ─────────────────────────────────────────
  btn.disabled = false;

  const ratioIdeal = Math.floor(total / 3);
  const ucIdeal    = Math.max(1, Math.floor(total / 4));

  if (imposteurs > ratioIdeal + 1) {
    setBubble(`Beaucoup d'imposteurs pour ${total} joueurs — la partie risque d'être courte.`, 'advice');
    return;
  }
  if (nbUC > ucIdeal + 1) {
    setBubble(`${nbUC} UnderCovers pour ${total} joueurs, c'est beaucoup — recommandé : ${ucIdeal}.`, 'advice');
    return;
  }
  if (nbMW > 0 && total < 5) {
    setBubble('Mister White avec moins de 5 joueurs peut déséquilibrer la partie.', 'advice');
    return;
  }
  if (nbMW > 1 && total < 7) {
    setBubble(`${nbMW} Mister White pour ${total} joueurs, c'est risqué.`, 'advice');
    return;
  }

  setBubble('La composition est équilibrée, bonne partie !', 'ok');
}

document.getElementById('player-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addPlayer();
});

validateComposition();

// ════════════════════════════════════════════════════
//  GESTION JOUEURS
// ════════════════════════════════════════════════════

function addPlayer() {
  const input = document.getElementById('player-input');
  const nom = input.value.trim();
  if (!nom || joueurs.includes(nom)) { input.value = ''; return; }
  joueurs.push(nom);
  input.value = '';
  renderPlayerList();
  validateComposition();
}

function removePlayer(nom) {
  joueurs = joueurs.filter(j => j !== nom);
  renderPlayerList();
  validateComposition();
}

function renderPlayerList() {
  const container = document.getElementById('player-list');
  if (joueurs.length === 0) {
    container.innerHTML = '<span class="empty-hint">Aucun joueur pour l\'instant…</span>';
    document.getElementById('btn-start').disabled = true;
    return;
  }
  container.innerHTML = joueurs.map(nom => `
    <div class="player-tag">
      ${nom}
      <button onclick="removePlayer('${nom}')" title="Retirer">✕</button>
    </div>`).join('');
  validateComposition();
}

// ════════════════════════════════════════════════════
//  DÉMARRAGE
// ════════════════════════════════════════════════════

function startGame() {
  const total = joueurs.length;
  const imposteurs = nbUC + nbMW;
  if (total < 3 || imposteurs <= 0 || imposteurs >= total) return;

  indexJoueur   = 0;
  isAnimating   = false;
  mwEnAttenteGuess = null;

  const paire   = paires[random(paires.length)];
  motUndercover = paire[0];
  motCitoyen    = paire[1];

  // Mélanger l'ordre des joueurs pour varier qui reçoit quel rôle
  const joueursShuffles = [...joueurs];
  for (let i = joueursShuffles.length - 1; i > 0; i--) {
    const j = random(i + 1);
    [joueursShuffles[i], joueursShuffles[j]] = [joueursShuffles[j], joueursShuffles[i]];
  }

  roles = new Array(total).fill('citoyen');
  for (let i = 0; i < nbUC; i++)          roles[i]       = 'undercover';
  for (let i = nbUC; i < imposteurs; i++) roles[i]       = 'misterwhite';
  // Mélanger les rôles eux-mêmes
  for (let i = roles.length - 1; i > 0; i--) {
    const j = random(i + 1);
    [roles[i], roles[j]] = [roles[j], roles[i]];
  }

  joueursActifs = joueursShuffles.map((nom, i) => ({ nom, role: roles[i] }));
  // On garde l'ordre mélangé pour la distribution des cartes
  joueurs = joueursShuffles;

  showScreen('screen-card');
  loadTurn();
}

function random(max) { return Math.floor(Math.random() * max); }

function shuffleIndices(n) {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = random(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showScreen(id) {
  ['screen-setup','screen-card','screen-parole','screen-vote',
   'screen-win','screen-final','screen-mw-guess']
    .forEach(s => {
      const el = document.getElementById(s);
      if (el) el.style.display = 'none';
    });
  const target = document.getElementById(id);
  if (target) target.style.display = 'flex';
}

// ════════════════════════════════════════════════════
//  ÉCRAN 2 : DISTRIBUTION DES CARTES
// ════════════════════════════════════════════════════

const modeAnon = () => document.getElementById('switch-anon').checked;

function loadTurn() {
  if (indexJoueur >= joueurs.length) {
    startParolePhase();
    return;
  }

  const nom  = joueurs[indexJoueur];
  const role = roles[indexJoueur];
  const anon = modeAnon();

  // Mot affiché
  let mot;
  if (role === 'misterwhite')     mot = 'Pas de mot…';
  else if (role === 'undercover') mot = motUndercover;
  else                            mot = motCitoyen;

  document.getElementById('card-verso-name').textContent = nom;
  document.getElementById('card-recto-name').textContent = nom;
  document.getElementById('card-mot').textContent        = mot;

  // Icône & badge
  const iconEl = document.getElementById('card-role-icon');
  const badge  = document.getElementById('type-badge');

  if (role === 'misterwhite') {
    iconEl.innerHTML    = iconMisterWhite();
    badge.textContent   = 'Mister White';
    badge.className     = 'type-badge misterwhite';
  } else if (role === 'undercover' && anon) {
    // Mode anonyme : l'UC voit son mot mais pas son rôle
    iconEl.innerHTML    = iconAnonUC();
    badge.textContent   = 'Citoyen ou UnderCover';
    badge.className     = 'type-badge anon';
  } else if (role === 'undercover') {
    iconEl.innerHTML    = iconUndercover();
    badge.textContent   = 'UnderCover';
    badge.className     = 'type-badge undercover';
  } else {
    // citoyen — en mode anon on affiche aussi le badge ambigu pour tout le monde
    if (anon) {
      iconEl.innerHTML  = iconAnonUC();
      badge.textContent = 'Citoyen ou UnderCover';
      badge.className   = 'type-badge anon';
    } else {
      iconEl.innerHTML  = iconCitoyen();
      badge.textContent = 'Citoyen';
      badge.className   = 'type-badge citoyen';
    }
  }

  document.getElementById('card-inner').classList.remove('flipped');
  setBtnNext(false);
  renderPlayersRow();
}

function flipCard() {
  if (isAnimating) return;
  const inner = document.getElementById('card-inner');
  if (!inner.classList.contains('flipped')) {
    inner.classList.add('flipped');
    const btn = document.getElementById('btn-next');
    btn.textContent = (indexJoueur === joueurs.length - 1) ? 'C\'est parti !' : 'Joueur suivant ›';
    setBtnNext(true);
  } else {
    inner.classList.remove('flipped');
    setBtnNext(false);
    setTimeout(() => { isAnimating = false; }, 620);
  }
}

function nextTurn() {
  if (isAnimating) return;
  const inner = document.getElementById('card-inner');
  if (!inner.classList.contains('flipped')) return;
  setBtnNext(false);
  indexJoueur++;
  isAnimating = true;
  inner.classList.remove('flipped');
  setTimeout(() => { isAnimating = false; loadTurn(); }, 620);
}

function setBtnNext(visible) {
  const btn = document.getElementById('btn-next');
  btn.style.opacity       = visible ? '1' : '0';
  btn.style.pointerEvents = visible ? 'auto' : 'none';
}

function renderPlayersRow() {
  const container = document.getElementById('players-row');
  container.innerHTML = joueurs.map((nom, i) => {
    const cl = (i === indexJoueur) ? 'active' : '';
    return `<span class="player-chip ${cl}">${nom}</span>`;
  }).join('');
}

// ════════════════════════════════════════════════════
//  ÉCRAN 3 : PHASE PAROLE
// ════════════════════════════════════════════════════

function startParolePhase() {
  indexParole = 0;
  showScreen('screen-parole');
  loadParole();
}

function loadParole() {
  if (indexParole >= joueursActifs.length) {
    showVotePhase();
    return;
  }
  const joueur = joueursActifs[indexParole];
  document.getElementById('parole-name').textContent = joueur.nom;

  const btn    = document.getElementById('btn-parole-next');
  const isLast = (indexParole === joueursActifs.length - 1);
  btn.textContent = isLast ? 'Passons au vote !' : 'Continuer ›';

  const container = document.getElementById('parole-chips');
  container.innerHTML = joueursActifs.map((j, i) => {
    const cl = (i === indexParole) ? 'active' : '';
    return `<span class="player-chip ${cl}">${j.nom}</span>`;
  }).join('');
}

function nextParole() {
  indexParole++;
  loadParole();
}

// ════════════════════════════════════════════════════
//  ÉCRAN 4 : VOTE & ÉLIMINATION
// ════════════════════════════════════════════════════

function showVotePhase() {
  const resultEl = document.getElementById('vote-result');
  resultEl.innerHTML = '';
  resultEl.style.display = 'none';
  buildVoteButtons();
  showScreen('screen-vote');
}

function buildVoteButtons() {
  const container = document.getElementById('vote-players');
  container.innerHTML = joueursActifs.map(j => `
    <button class="vote-btn" onclick="eliminer('${j.nom}')">
      ${j.nom}
    </button>`).join('');
}

function eliminer(nom) {
  const idx = joueursActifs.findIndex(j => j.nom === nom);
  if (idx === -1) return;
  const joueur = joueursActifs[idx];

  // Si c'est un Mister White → écran de guess avant de l'éliminer vraiment
  if (joueur.role === 'misterwhite') {
    mwEnAttenteGuess = nom;
    const sub = document.getElementById('mw-guess-sub');
    if (sub) sub.textContent = `${nom} a été éliminé·e. S'il·elle devine le mot des Citoyens, Mister White gagne !`;
    const input = document.getElementById('mw-input');
    if (input) input.value = '';
    showScreen('screen-mw-guess');
    setTimeout(() => { if (input) input.focus(); }, 100);
    return;
  }

  // Sinon élimination normale
  _doEliminer(joueur, nom);
}

function validateMWGuess() {
  const input = document.getElementById('mw-input');
  if (!input) return;
  const guess = input.value.trim().toLowerCase();
  const correct = motCitoyen.toLowerCase();
  const nom = mwEnAttenteGuess;

  if (guess === correct) {
    // Mister White gagne !
    const idx = joueursActifs.findIndex(j => j.nom === nom);
    if (idx !== -1) joueursActifs.splice(idx, 1);
    resultatFinal = { type: 'misterwhite', gagnants: [nom] };
    showFinal();
  } else {
    // Mauvaise réponse → élimination normale
    const idx = joueursActifs.findIndex(j => j.nom === nom);
    if (idx === -1) { showScreen('screen-vote'); return; }
    const joueur = joueursActifs[idx];
    showScreen('screen-vote');
    _doEliminer(joueur, nom);
  }
  mwEnAttenteGuess = null;
}

// Entrée clavier sur le champ MW
document.addEventListener('DOMContentLoaded', () => {
  const mwInput = document.getElementById('mw-input');
  if (mwInput) mwInput.addEventListener('keydown', e => { if (e.key === 'Enter') validateMWGuess(); });
});

function _doEliminer(joueur, nom) {
  const idx = joueursActifs.findIndex(j => j.nom === nom);
  if (idx !== -1) joueursActifs.splice(idx, 1);

  const resteUC    = joueursActifs.some(j => j.role === 'undercover');
  const resteMW    = joueursActifs.some(j => j.role === 'misterwhite');
  const nbCitoyens = joueursActifs.filter(j => j.role === 'citoyen').length;
  const nbImpost   = joueursActifs.filter(j => j.role !== 'citoyen').length;

  let elimMsg = '';
  if (joueur.role === 'undercover') {
    elimMsg = `Bravo ! <strong>${nom}</strong> était l'UnderCover.`;
    if (resteMW) elimMsg += `<br><span class="result-sub">Mais Mister White est encore en jeu… trouvez-le !</span>`;
  } else if (joueur.role === 'misterwhite') {
    elimMsg = `Bravo ! <strong>${nom}</strong> était Mister White.`;
    if (resteUC) elimMsg += `<br><span class="result-sub">Mais l'UnderCover est encore en jeu… trouvez-le !</span>`;
  } else {
    elimMsg = `Raté… <strong>${nom}</strong> était Citoyen.`;
  }

  // Conditions de fin
  let partieFinie = false;
  const seulementCitoyens  = !resteUC && !resteMW;
  const imposteursMajority  = nbImpost > 0 && nbImpost >= nbCitoyens;
  const ucEtMwSeuls        = resteUC && resteMW && nbCitoyens === 0;

  if (seulementCitoyens) {
    partieFinie   = true;
    resultatFinal = { type: 'citoyens', gagnants: joueursActifs.map(j => j.nom) };
  } else if (ucEtMwSeuls) {
    partieFinie   = true;
    resultatFinal = { type: 'egalite', gagnants: joueursActifs.map(j => j.nom) };
  } else if (resteUC && !resteMW && imposteursMajority) {
    partieFinie   = true;
    resultatFinal = { type: 'undercover', gagnants: joueursActifs.filter(j => j.role === 'undercover').map(j => j.nom) };
  } else if (resteMW && !resteUC && imposteursMajority) {
    partieFinie   = true;
    resultatFinal = { type: 'misterwhite', gagnants: joueursActifs.filter(j => j.role === 'misterwhite').map(j => j.nom) };
  } else if (resteUC && resteMW && imposteursMajority) {
    partieFinie   = true;
    resultatFinal = { type: 'egalite', gagnants: joueursActifs.filter(j => j.role !== 'citoyen').map(j => j.nom) };
  }

  const blockClass = (joueur.role === 'citoyen') ? 'fail' : 'warning';
  let msgHtml = `<div class="result-block ${blockClass}">${elimMsg}</div>`;

  // Carte de révélation
  let iconHtml, badgeClass, badgeText;
  if (joueur.role === 'undercover') {
    iconHtml = iconUndercover(); badgeClass = 'type-badge undercover'; badgeText = 'UnderCover';
  } else if (joueur.role === 'misterwhite') {
    iconHtml = iconMisterWhite(); badgeClass = 'type-badge misterwhite'; badgeText = 'Mister White';
  } else {
    iconHtml = iconCitoyen(); badgeClass = 'type-badge citoyen'; badgeText = 'Citoyen';
  }

  const btnSuiteLabel  = partieFinie ? 'Voir le résultat' : 'Tour suivant';
  const btnSuiteAction = partieFinie ? 'showFinal()' : 'continuerApresReveal()';

  const resultEl = document.getElementById('vote-result');
  resultEl.style.display = 'flex';
  resultEl.innerHTML = `
    <p class="reveal-label">Retourne la carte pour voir le rôle de <strong>${nom}</strong></p>
    <div class="card-scene reveal-scene" onclick="flipReveal(this)">
      <div class="card-inner">
        <div class="card-face card-verso">
          <div class="verso-bubble">${nom}</div>
          <div class="verso-border"></div>
          <p class="verso-hint">Appuie pour révéler</p>
        </div>
        <div class="card-face card-recto">
          <div class="recto-name">${nom}</div>
          <div class="recto-icon">${iconHtml}</div>
          <div class="${badgeClass}">${badgeText}</div>
        </div>
      </div>
    </div>
    <div class="reveal-messages">
      ${msgHtml}
      <button class="btn btn-primary" id="btn-continuer" style="display:none" onclick="${btnSuiteAction}">${btnSuiteLabel}</button>
    </div>
  `;

  document.getElementById('vote-players').innerHTML = '';
}

function flipReveal(scene) {
  const inner = scene.querySelector('.card-inner');
  if (inner.classList.contains('flipped')) return;
  inner.classList.add('flipped');
  setTimeout(() => {
    const msgs = scene.parentElement.querySelector('.reveal-messages');
    if (msgs) {
      msgs.classList.add('visible');
      const btnCont = msgs.querySelector('#btn-continuer');
      if (btnCont) btnCont.style.display = 'block';
    }
  }, 650);
}

function continuerApresReveal() {
  startParolePhase();
}

// ════════════════════════════════════════════════════
//  ÉCRAN 5 : VICTOIRE
// ════════════════════════════════════════════════════

function showFinal() {
  const r = resultatFinal;
  let logoHtml, titre, sousTitre, couleurClass;

  if (r.type === 'citoyens') {
    logoHtml     = `<img src="image/citizen.png" class="win-logo">`;
    titre        = 'Les Citoyens ont gagné !';
    sousTitre    = 'Tous les imposteurs ont été éliminés.';
    couleurClass = 'win-screen-citoyen';
  } else if (r.type === 'undercover') {
    logoHtml     = `<img src="image/undercover.png" class="win-logo">`;
    titre        = "L'UnderCover a gagné !";
    sousTitre    = "Les citoyens n'ont pas réussi à le démasquer.";
    couleurClass = 'win-screen-undercover';
  } else if (r.type === 'misterwhite') {
    logoHtml     = `<img src="image/misterwhite.png" class="win-logo">`;
    titre        = 'Mister White a gagné !';
    sousTitre    = r.gagnants.length === 1 && joueursActifs.length === 0
      ? `${r.gagnants[0]} a deviné le mot des Citoyens !`
      : "Les citoyens n'ont pas réussi à le trouver.";
    couleurClass = 'win-screen-misterwhite';
  } else {
    logoHtml     = `<img src="image/undercover.png" class="win-logo win-logo-split"><img src="image/misterwhite.png" class="win-logo win-logo-split">`;
    titre        = 'Égalité !';
    sousTitre    = "L'UnderCover et Mister White se retrouvent seuls.";
    couleurClass = 'win-screen-egalite';
  }

  const gagnantsHtml = r.gagnants.map(n =>
    `<span class="win-player">${n}</span>`
  ).join('');

  document.getElementById('win-content').innerHTML = `
    <div class="win-logos">${logoHtml}</div>
    <p class="win-titre">${titre}</p>
    <p class="win-sous">${sousTitre}</p>
    <div class="win-players">${gagnantsHtml}</div>
  `;
  document.getElementById('win-content').className = `win-content ${couleurClass}`;
  showScreen('screen-win');
}

// ════════════════════════════════════════════════════
//  ÉCRAN 6 : RÉCAP FINAL
// ════════════════════════════════════════════════════

function showRecap() {
  const tous = joueurs.map((nom, i) => ({ nom, role: roles[i] }));

  const lignes = tous.map(j => {
    if (j.role === 'citoyen') {
      return `<div class="final-row final-citoyen">
        <span class="final-nom">${j.nom}</span>
        <span class="final-role">Citoyen</span>
        <span class="final-mot">${motCitoyen}</span>
      </div>`;
    } else if (j.role === 'undercover') {
      return `<div class="final-row final-undercover">
        <span class="final-nom">${j.nom}</span>
        <span class="final-role">UnderCover</span>
        <span class="final-mot">${motUndercover}</span>
      </div>`;
    } else {
      return `<div class="final-row final-misterwhite">
        <span class="final-nom">${j.nom}</span>
        <span class="final-role">Mister White</span>
        <span class="final-mot">—</span>
      </div>`;
    }
  }).join('');

  document.getElementById('final-content').innerHTML = `
    <div class="final-header">
      <div class="final-col-header">Joueur</div>
      <div class="final-col-header">Rôle</div>
      <div class="final-col-header">Mot</div>
    </div>
    ${lignes}
  `;
  showScreen('screen-final');
}

// ════════════════════════════════════════════════════
//  QUITTER
// ════════════════════════════════════════════════════

function continuerManche() {
  indexJoueur      = 0;
  isAnimating      = false;
  mwEnAttenteGuess = null;
  resultatFinal    = null;

  const paire      = paires[random(paires.length)];
  motUndercover    = paire[0];
  motCitoyen       = paire[1];

  const total      = joueurs.length;
  const imposteurs = nbUC + nbMW;

  const joueursShuffles = [...joueurs];
  for (let i = joueursShuffles.length - 1; i > 0; i--) {
    const j = random(i + 1);
    [joueursShuffles[i], joueursShuffles[j]] = [joueursShuffles[j], joueursShuffles[i]];
  }

  roles = new Array(total).fill('citoyen');
  for (let i = 0; i < nbUC; i++)          roles[i]       = 'undercover';
  for (let i = nbUC; i < imposteurs; i++) roles[i]       = 'misterwhite';
  for (let i = roles.length - 1; i > 0; i--) {
    const j = random(i + 1);
    [roles[i], roles[j]] = [roles[j], roles[i]];
  }

  joueursActifs = joueursShuffles.map((nom, i) => ({ nom, role: roles[i] }));
  joueurs = joueursShuffles;

  showScreen('screen-card');
  loadTurn();
}

function nouvellePartie() {
  // Retour setup en gardant les joueurs
  showScreen('screen-setup');
}

function quitGame() {
  // Efface tout et retourne au setup vide
  joueurs = []; roles = []; joueursActifs = [];
  nbUC = 1; nbMW = 0;
  mwEnAttenteGuess = null;
  resultatFinal    = null;
  document.getElementById('count-uc').textContent = nbUC;
  document.getElementById('count-mw').textContent = nbMW;
  renderPlayerList();
  validateComposition();
  showScreen('screen-setup');
}

// ════════════════════════════════════════════════════
//  ICÔNES
// ════════════════════════════════════════════════════

function iconUndercover() {
  return `<img src="image/undercover.png" alt="UnderCover" style="width:100%;height:100%;object-fit:contain;">`;
}
function iconMisterWhite() {
  return `<img src="image/misterwhite.png" alt="Mister White" style="width:100%;height:100%;object-fit:contain;">`;
}
function iconCitoyen() {
  return `<img src="image/citizen.png" alt="Citoyen" style="width:100%;height:100%;object-fit:contain;">`;
}
function iconAnonUC() {
  // Citoyen / UnderCover côte à côte avec un "/"
  return `
    <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;gap:4px;">
      <img src="image/citizen.png" alt="Citoyen" style="width:45%;height:100%;object-fit:contain;">
      <span style="color:#8a4040;font-weight:700;font-size:1.2rem;">/</span>
      <img src="image/undercover.png" alt="UnderCover" style="width:45%;height:100%;object-fit:contain;">
    </div>`;
}
