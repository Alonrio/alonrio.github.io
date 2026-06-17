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

let joueurs       = [];
let indexJoueur   = 0;
let motUndercover = '';
let motCitoyen    = '';
let roles         = [];
let joueursActifs = [];
let isAnimating   = false;
let resultatFinal = null; // { type: 'citoyens'|'undercover'|'misterwhite'|'egalite', gagnants: [] }

// Phase 1 : index du joueur en train de dire son mot
let indexParole   = 0;

document.getElementById('player-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addPlayer();
});

// ════════════ SETUP ════════════

function addPlayer() {
  const input = document.getElementById('player-input');
  const nom = input.value.trim();
  if (!nom || joueurs.includes(nom)) { input.value = ''; return; }
  joueurs.push(nom);
  input.value = '';
  renderPlayerList();
}

function removePlayer(nom) {
  joueurs = joueurs.filter(j => j !== nom);
  renderPlayerList();
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
  document.getElementById('btn-start').disabled = joueurs.length < 3;
}

// ════════════ DÉMARRAGE ════════════

function startGame() {
  if (joueurs.length < 3) return;
  indexJoueur = 0;
  isAnimating = false;

  const paire   = paires[random(paires.length)];
  motUndercover = paire[0];
  motCitoyen    = paire[1];

  const modeMW = document.getElementById('switch-bois').checked;
  roles = new Array(joueurs.length).fill('citoyen');

  const idxUC = random(joueurs.length);
  roles[idxUC] = 'undercover';

  if (modeMW && joueurs.length >= 4) {
    let idxMW;
    do { idxMW = random(joueurs.length); } while (idxMW === idxUC);
    roles[idxMW] = 'misterwhite';
  }

  joueursActifs = joueurs.map((nom, i) => ({ nom, role: roles[i] }));

  showScreen('screen-card');
  loadTurn();
}

function random(max) { return Math.floor(Math.random() * max); }

function showScreen(id) {
  ['screen-setup','screen-card','screen-parole','screen-vote','screen-win','screen-final']
    .forEach(s => document.getElementById(s).style.display = 'none');
  document.getElementById(id).style.display = 'flex';
}

// ════════════ ÉCRAN 2 : DISTRIBUTION DES CARTES ════════════

function loadTurn() {
  if (indexJoueur >= joueurs.length) {
    // Toutes les cartes distribuées → Phase 1 : tour de parole
    startParolePhase();
    return;
  }

  const joueur = joueurs[indexJoueur];
  const role   = roles[indexJoueur];
  let mot;
  if (role === 'misterwhite')     mot = 'Pas de mot…';
  else if (role === 'undercover') mot = motUndercover;
  else                            mot = motCitoyen;

  document.getElementById('card-verso-name').textContent = joueur;
  document.getElementById('card-recto-name').textContent = joueur;
  document.getElementById('card-mot').textContent        = mot;

  const iconEl = document.getElementById('card-role-icon');
  if (role === 'undercover')       iconEl.innerHTML = iconUndercover();
  else if (role === 'misterwhite') iconEl.innerHTML = iconMisterWhite();
  else                             iconEl.innerHTML = iconCitoyen();

  const badge = document.getElementById('type-badge');
  if (role === 'undercover') {
    badge.textContent = 'UnderCover'; badge.className = 'type-badge undercover';
  } else if (role === 'misterwhite') {
    badge.textContent = 'Mister White'; badge.className = 'type-badge misterwhite';
  } else {
    badge.textContent = 'Citoyen'; badge.className = 'type-badge citoyen';
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
    // Label : dernier joueur → "C'est parti !" sinon "Joueur suivant ›"
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

// ════════════ ÉCRAN 3 : PHASE PAROLE ════════════
// Chaque joueur actif dit un mot à voix haute, on clique Continuer pour passer au suivant.

function startParolePhase() {
  indexParole = 0;
  showScreen('screen-parole');
  loadParole();
}

function loadParole() {
  if (indexParole >= joueursActifs.length) {
    // Tour de parole terminé → vote
    showVotePhase();
    return;
  }
  const joueur = joueursActifs[indexParole];
  document.getElementById('parole-name').textContent = joueur.nom;

  const btn = document.getElementById('btn-parole-next');
  const isLast = (indexParole === joueursActifs.length - 1);
  btn.textContent = isLast ? 'Passons au vote !' : 'Continuer ›';

  // Chips
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

// ════════════ ÉCRAN 4 : VOTE & ÉLIMINATION ════════════

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
  joueursActifs.splice(idx, 1);

  const resteUC      = joueursActifs.some(j => j.role === 'undercover');
  const resteMW      = joueursActifs.some(j => j.role === 'misterwhite');
  const nbCitoyens   = joueursActifs.filter(j => j.role === 'citoyen').length;

  // Message pour l'élimination elle-même
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

  // Déterminer la fin de partie selon la composition restante
  // Fin si : plus d'imposteur du tout, ou il reste exactement 1 citoyen face à un imposteur, ou UC+MW seuls
  let partieFinie = false;
  let finMsg = '';

  const seulementCitoyens = !resteUC && !resteMW;
  const ucSeulFace1Citoyen = resteUC && !resteMW && nbCitoyens === 1;
  const mwSeulFace1Citoyen = resteMW && !resteUC && nbCitoyens === 1;
  const ucEtMwSeuls        = resteUC && resteMW && nbCitoyens === 0;

  if (seulementCitoyens) {
    partieFinie = true;
    resultatFinal = { type: 'citoyens', gagnants: joueursActifs.map(j => j.nom) };
  } else if (ucEtMwSeuls) {
    partieFinie = true;
    resultatFinal = { type: 'egalite', gagnants: joueursActifs.map(j => j.nom) };
  } else if (ucSeulFace1Citoyen) {
    partieFinie = true;
    resultatFinal = { type: 'undercover', gagnants: joueursActifs.filter(j => j.role === 'undercover').map(j => j.nom) };
  } else if (mwSeulFace1Citoyen) {
    partieFinie = true;
    resultatFinal = { type: 'misterwhite', gagnants: joueursActifs.filter(j => j.role === 'misterwhite').map(j => j.nom) };
  }

  const blockClass = (joueur.role === 'citoyen') ? 'fail' : 'warning';
  let msgHtml = `<div class="result-block ${blockClass}">${elimMsg}</div>${finMsg}`;

  // Carte de révélation (sans le mot)
  let iconHtml, badgeClass, badgeText;
  if (joueur.role === 'undercover') {
    iconHtml = iconUndercover(); badgeClass = 'type-badge undercover'; badgeText = 'UnderCover';
  } else if (joueur.role === 'misterwhite') {
    iconHtml = iconMisterWhite(); badgeClass = 'type-badge misterwhite'; badgeText = 'Mister White';
  } else {
    iconHtml = iconCitoyen(); badgeClass = 'type-badge citoyen'; badgeText = 'Citoyen';
  }

  const btnSuiteLabel = partieFinie ? 'Voir le récap' : 'Tour suivant';
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

  // Cacher les boutons de vote pendant la révélation
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
  // Retour phase 1 : tour de parole
  startParolePhase();
}

// ════════════ ÉCRAN 5 : VICTOIRE ════════════

function showFinal() {
  const r = resultatFinal;
  let logoHtml, titre, sousTitre, couleurClass;

  if (r.type === 'citoyens') {
    logoHtml    = `<img src="image/citizen.png" class="win-logo">`;
    titre       = 'Les Citoyens ont gagné !';
    sousTitre   = 'Tous les imposteurs ont été éliminés.';
    couleurClass = 'win-screen-citoyen';
  } else if (r.type === 'undercover') {
    logoHtml    = `<img src="image/undercover.png" class="win-logo">`;
    titre       = "L'UnderCover a gagné !";
    sousTitre   = "Les citoyens n'ont pas réussi à le démasquer.";
    couleurClass = 'win-screen-undercover';
  } else if (r.type === 'misterwhite') {
    logoHtml    = `<img src="image/misterwhite.png" class="win-logo">`;
    titre       = 'Mister White a gagné !';
    sousTitre   = "Les citoyens n'ont pas réussi à le trouver.";
    couleurClass = 'win-screen-misterwhite';
  } else {
    logoHtml    = `<img src="image/undercover.png" class="win-logo win-logo-split"><img src="image/misterwhite.png" class="win-logo win-logo-split">`;
    titre       = 'Égalité !';
    sousTitre   = "L'UnderCover et Mister White se retrouvent seuls.";
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

// ════════════ ÉCRAN 6 : RÉCAP FINAL ════════════

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

// ════════════ QUITTER ════════════

function quitGame() {
  joueurs = []; roles = []; joueursActifs = [];
  renderPlayerList();
  showScreen('screen-setup');
}

// ════════════ ICÔNES ════════════

function iconUndercover() {
  return `<img src="image/undercover.png" alt="UnderCover" style="width:100%;height:100%;object-fit:contain;">`;
}
function iconMisterWhite() {
  return `<img src="image/misterwhite.png" alt="Mister White" style="width:100%;height:100%;object-fit:contain;">`;
}
function iconCitoyen() {
  return `<img src="image/citizen.png" alt="Citoyen" style="width:100%;height:100%;object-fit:contain;">`;
}
