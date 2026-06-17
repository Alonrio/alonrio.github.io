
const SituationListe = [
  "Vomi en public",
  "Été ivre",
  "Volé quelque chose",
  "Arnaqué quelqu'un",
  "Essayé d'arnaquer quelqu'un",
  "Frappé quelqu'un",
  "Menti sur mon âge",
  "Bu de l'alcool",
  "Travaillé pendant les vacances",
  "Séché les cours",
  "Triché à un examen",
  "Copié les devoirs d'un ami",
  "Fait semblant d'être malade",
  "Dormi en cours",
  "Été collé",
  "Été renvoyé d'un cours",
  "Pleuré devant un film",
  "Pleuré devant une série",
  "Pleuré en public",
  "Cassé le cœur de quelqu'un",
  "Eu le cœur brisé",
  "Mentit à mes parents",
  "Mentit à un ami proche",
  "Créé un faux compte",
  "Stalké quelqu'un sur les réseaux",
  "Bloqué quelqu'un",
  "Été bloqué par quelqu'un",
  "Envoyé un message au mauvais destinataire",
  "Regretté un message envoyé",
  "Supprimé un message pour éviter un problème",
  "Passé une nuit blanche",
  "Joué aux jeux vidéo toute la nuit",
  "Raté un train",
  "Raté un avion",
  "Perdu mon téléphone",
  "Cassé mon téléphone",
  "Fait tomber mon téléphone dans l'eau",
  "Perdu mes clés",
  "Oublié mon portefeuille",
  "Eu une amende",
  "Eu un accident de voiture",
  "Fait semblant de comprendre une conversation",
  "Raconté une histoire exagérée",
  "Mentit sur mes compétences",
  "Déclaré ma flamme à quelqu'un",
  "Reçu une déclaration d'amour",
  "Été amoureux en secret",
  "Pris un râteau",
  "Mis un râteau",
  "Été friendzone",
  "Friendzone quelqu'un",
  "Oublié le prénom de quelqu'un",
  "Appelé un prof maman ou papa",
  "Parlé tout seul",
  "Rigolé tout seul dans la rue",
  "Dansé seul chez moi",
  "Chanté sous la douche",
  "Mangé quelque chose tombé par terre",
  "Mangé trop épicé et regretté",
  "Dormi dans une voiture",
  "Dormi à l'aéroport",
  "Dormi dehors",
  "Voyagé seul",
  "Fait du stop",
  "Visité plus de 5 pays",
  "Visité plus de 10 pays",
  "Perdu mes bagages",
  "Fait du camping",
  "Allumé un feu de camp",
  "Eu une fracture",
  "Porté un plâtre",
  "Eu des points de suture",
  "Passé aux urgences",
  "Été hospitalisé",
  "Donné mon sang",
  "Aidé un inconnu",
  "Fait un don à une association",
  "Participé à une manifestation",
  "Signé une pétition",
  "Fait du bénévolat",
  "Eu un animal de compagnie",
  "Perdu un animal de compagnie",
  "Adopté un animal",
  "Eu peur du noir",
  "Eu peur des araignées",
  "Eu le vertige",
  "Parlé devant plus de 50 personnes",
  "Fait un karaoké",
  "Chanté faux en public",
  "Gagné un concours",
  "Terminé dernier d'une compétition",
  "Triché dans un jeu de société",
  "Jeté une manette de colère",
  "Cassé quelque chose en étant énervé",
  "Crié sur quelqu'un",
  "Demandé pardon après une dispute",
  "Coupé les ponts avec quelqu'un",
  "Repris contact avec quelqu'un des années après",
  "Retrouvé un objet que je croyais perdu",
  "Eu un tatouage",
  "Eu un piercing",
  "Regretté une coupe de cheveux",
  "Teint mes cheveux",
  "Rasé ma tête",
  "Fait une blague qui a mal tourné",
  "Eu honte juste après avoir parlé",
  "Envoyé un vocal de plus de 5 minutes",
  "Fait semblant de dormir",
  "Écouté derrière une porte",
  "Espionné une conversation",
  "Fouillé dans le téléphone de quelqu'un",
  "Pris une capture d'écran d'une conversation",
  "Été viré d'un groupe",
  "Créé un groupe sans certaines personnes",
  "Eu un fou rire incontrôlable",
  "Ri à un moment inapproprié",
  "Fait semblant de reconnaître quelqu'un",
  "Mentit pour éviter une soirée",
  "Annulé au dernier moment",
  "Organisé une fête",
  "Cassé quelque chose chez quelqu'un",
  "Eu un surnom ridicule",
  "Inventé un surnom ridicule",
  "Abandonné un projet",
  "Commencé une série sans la finir",
  "Lu un livre en une journée",
  "Passé plus de 10 heures devant un écran",
  "Fait semblant de rire à une blague nulle",
  "Eu un énorme coup de chance",
  "Eu une énorme malchance",
  "Perdu un pari",
  "Gagné un pari improbable",
  "Eu le permis",
  "Réussi le permis du premier coup",
  "Raté le permis",
  "Conduit sans savoir me garer",
  "Fait de la plongée",
  "Fait de l'équitation",
  "Fait du ski",
  "Fait du snowboard",
  "Fait du saut à l'élastique",
  "Fait du parachute",
  "Monté dans une montgolfière",
  "Vu la mer",
  "Vu la neige",
  "Nagé avec des poissons",
  "Touché une méduse",
  "Eu un coup de soleil sévère",
  "Oublié un anniversaire important",
  "Offert un cadeau de dernière minute",
  "Recyclé un ancien cadeau",
  "Perdu un objet prêté",
  "Prêté de l'argent sans être remboursé",
  "Emprunté de l'argent",
  "Dépensé tout mon argent trop vite",
  "Acheté quelque chose d'inutile",
  "Commandé quelque chose à 3h du matin",
  "Fait une sieste au travail",
  "Dormi dans les transports",
  "Raté mon arrêt",
  "Manqué un rendez-vous important",
  "Oublié un devoir",
  "Eu une mauvaise note méritée",
  "Eu une bonne note imméritée",
  "Fait semblant d'avoir lu un livre",
  "Regardé un film juste pour comprendre une référence",
  "Fait un marathon de séries",
  "Passé une journée entière en pyjama",
  "Parlé à mon animal comme à un humain",
  "Crié sur un objet qui ne fonctionnait pas",
  "Insulté mon GPS",
  "Googlé mon propre nom",
  "Cherché quelqu'un sur internet",
  "Fait une recherche que je n'assumerais pas",
  "Oublié pourquoi j'étais entré dans une pièce",
  "Répondu 'toi aussi' à un serveur",
  "Tendu la main alors que l'autre voulait faire la bise",
  "Fait la bise dans le mauvais sens",
  "Renversé une boisson sur quelqu'un",
  "Fait tomber mon plateau au self",
  "Envoyé un emoji par erreur",
  "Like une vieille photo par accident",
  "Supprimé une publication par honte",
  "Eu plus de 100 onglets ouverts",
  "Fait semblant d'être occupé",
  "Eu un a priori totalement faux sur quelqu'un",
  "Regretté une décision prise sur un coup de tête",
  "Fait confiance à la mauvaise personne",
  "Eu raison contre tout le monde",
  "Rencontré une célébrité",
  "Pris une photo avec une célébrité",
  "Passé une journée sans internet",
  "Passé 24h sans téléphone"
];

const SpicyListe = [
  "Eu une relation amoureuse",
  "Embrassé quelqu'un",
  "Embrassé un inconnu",
  "Embrassé quelqu'un le premier soir",
  "Eu un coup d'un soir",
  "Eu une relation avec un ami",
  "Eu une relation à distance",
  "Eu un crush secret",
  "Eu un crush sur un ami",
  "Eu un crush sur une amie",
  "Eu un crush sur un collègue",
  "Eu un crush sur un professeur",
  "Eu un crush sur une célébrité",
  "Été amoureux sans que la personne le sache",
  "Déclaré mes sentiments",
  "Reçu une déclaration d'amour",
  "Pris un râteau",
  "Mis un râteau",
  "Été friendzone",
  "Friendzone quelqu'un",
  "Eu un crush sur quelqu'un dans cette pièce",
  "Maté quelqu'un dans cette pièce",
  "Trouvé quelqu'un dans cette pièce attirant",
  "Trouvé plusieurs personnes dans cette pièce attirantes",
  "Pensé à sortir avec quelqu'un dans cette pièce",
  "Pensé que quelqu'un ici me plaisait",
  "Pensé que quelqu'un ici me draguait",
  "Envoyé le premier message",
  "Fait le premier pas",
  "Attendu que l'autre fasse le premier pas",
  "Eu peur d'avouer mes sentiments",
  "Dit 'je t'aime'",
  "Entendu 'je t'aime'",
  "Dit 'je t'aime' en premier",
  "Eu le cœur brisé",
  "Cassé le cœur de quelqu'un",
  "Pleuré après une rupture",
  "Mis fin à une relation",
  "Été quitté",
  "Quitté quelqu'un par message",
  "Été quitté par message",
  "Bloqué un ex",
  "Été bloqué par un ex",
  "Recontacté un ex",
  "Pensé à retourner avec un ex",
  "Envoyé un message à un ex",
  "Envoyé un message à un ex en étant ivre",
  "Supprimé un message avant qu'il soit lu",
  "Regretté un message envoyé à un crush",
  "Passé une nuit entière à parler avec quelqu'un",
  "Passé plus de 5h à discuter avec quelqu'un",
  "Eu un rendez-vous galant",
  "Eu un premier rendez-vous catastrophique",
  "Eu un premier rendez-vous incroyable",
  "Annulé un rendez-vous au dernier moment",
  "Posé un lapin",
  "Été posé un lapin",
  "Ghosté quelqu'un",
  "Été ghosté",
  "Flirté par message",
  "Flirté avec plusieurs personnes en même temps",
  "Flirté juste pour m'amuser",
  "Flirté avec quelqu'un sans m'en rendre compte",
  "Été dragué sans m'en rendre compte",
  "Utilisé une application de rencontre",
  "Eu un match sur une application",
  "Rencontré quelqu'un via une application",
  "Eu un rendez-vous grâce à une application",
  "Supprimé puis réinstallé une appli de rencontre",
  "Stalké un crush sur les réseaux",
  "Like une vieille photo par accident",
  "Passé plus d'une heure à regarder un profil",
  "Demandé des conseils amoureux à un ami",
  "Servi d'entremetteur",
  "Aidé quelqu'un à séduire une personne",
  "Été jaloux",
  "Été jaloux d'une relation",
  "Eu peur de perdre quelqu'un",
  "Eu peur d'être rejeté",
  "Mentit sur mes sentiments",
  "Fait semblant de ne pas aimer quelqu'un",
  "Fait semblant d'aimer quelqu'un",
  "Eu un admirateur secret",
  "Été l'admirateur secret de quelqu'un",
  "Écrit une lettre d'amour",
  "Reçu une lettre d'amour",
  "Offert des fleurs",
  "Reçu des fleurs",
  "Préparé une surprise romantique",
  "Reçu une surprise romantique",
  "Eu une relation de moins d'un mois",
  "Eu une relation de plus d'un an",
  "Eu une relation de plus de 3 ans",
  "Eu une relation de plus de 5 ans",
  "Sorti avec quelqu'un plus âgé que moi",
  "Sorti avec quelqu'un plus jeune que moi",
  "Eu une attirance immédiate pour quelqu'un",
  "Eu un coup de foudre",
  "Pensé à me marier avec quelqu'un",
  "Parlé de mariage avec quelqu'un",
  "Présenté quelqu'un à ma famille",
  "Rencontré la famille de quelqu'un",
  "Eu peur de rencontrer la belle-famille",
  "Voyagé avec un partenaire",
  "Parti en week-end romantique",
  "Eu une relation secrète",
  "Caché une relation à mes proches",
  "Eu une histoire compliquée",
  "Eu une relation toxique",
  "Pardonné quelque chose par amour",
  "Fait quelque chose de fou par amour",
  "Traversé une ville pour voir quelqu'un",
  "Traversé un pays pour voir quelqu'un",
  "Attendu toute la nuit un message",
  "Rafraîchi une conversation en attendant une réponse",
  "Regardé si quelqu'un était en ligne",
  "Vérifié plusieurs fois une conversation",
  "Relu une conversation entière",
  "Gardé une capture d'écran d'une conversation",
  "Demandé à un ami d'analyser un message",
  "Envoyé un message puis paniqué",
  "Supprimé un message de honte",
  "Rougi à cause d'un compliment",
  "Fait un compliment dans l'espoir de plaire",
  "Reçu un compliment qui m'a marqué",
  "Pensé à quelqu'un toute une journée",
  "Rêvé d'un crush",
  "Rêvé d'une personne dans cette pièce",
  "Eu un crush impossible",
  "Eu un crush sur une personne déjà en couple",
  "Eu un crush sur un ami proche",
  "Eu un crush pendant plusieurs années",
  "Gardé un secret amoureux pendant plus d'un an",
  "Fait semblant de ne pas être jaloux",
  "Eu un rendez-vous à l'aveugle",
  "Accepté un rendez-vous sans être intéressé",
  "Refusé un rendez-vous",
  "Regretté d'avoir refusé quelqu'un",
  "Regretté d'être sorti avec quelqu'un",
  "Donné mon numéro à quelqu'un",
  "Demandé le numéro de quelqu'un",
  "Reçu le numéro de quelqu'un sans demander",
  "Parlé avec quelqu'un jusqu'au lever du soleil",
  "Eu une relation qui a commencé par une amitié",
  "Vu une amitié devenir une relation",
  "Eu un ami amoureux de moi",
  "Été amoureux d'un ami",
  "Eu une relation avec une grande différence d'âge",
  "Eu une relation avec quelqu'un d'un autre pays",
  "Eu une relation malgré la distance",
  "Pensé que quelqu'un était amoureux de moi",
  "Découvert que quelqu'un était amoureux de moi",
  "Appris trop tard qu'une personne m'aimait",
  "Essayé d'oublier quelqu'un",
  "Comparé un partenaire à un ex",
  "Parlé d'un ex trop souvent",
  "Eu une histoire qui s'est mal terminée",
  "Eu une histoire qui s'est bien terminée",
  "Revu un ex par hasard",
  "Évité un ex dans la rue",
  "Eu une attirance réciproque",
  "Eu une attirance non réciproque",
  "Pensé que quelqu'un était mon âme sœur",
  "Eu un crush sur quelqu'un rencontré en vacances",
  "Eu un crush sur quelqu'un rencontré en ligne",
  "Eu une relation née d'un voyage",
  "Eu une relation née d'un jeu vidéo",
  "Eu une relation née des réseaux sociaux",
  "Eu un crush sur une célébrité fictive",
  "Été déçu après avoir rencontré un crush",
  "Idéalisé quelqu'un",
  "Découvert que mon crush n'était pas du tout comme je pensais",
  "Eu un rendez-vous très gênant",
  "Eu une relation que mes amis désapprouvaient",
  "Écouté une chanson en pensant à quelqu'un",
  "Fait une playlist pour quelqu'un",
  "Reçu une playlist de quelqu'un",
  "Pensé à envoyer un message pendant plusieurs heures",
  "Réécrit un message plus de 5 fois",
  "Eu peur d'ouvrir un message",
  "Souri en regardant un message",
  "Passé une soirée entière à parler à une seule personne",
  "Pensé à quelqu'un présent dans cette pièce"
];

let joueurs = [];
let indexJoueur = 0;


// ════════════════════════════════════════════════════════════════
//  ÉCOUTEUR D'ÉVÉNEMENT — détecte la touche Entrée dans l'input
//  En Java, Scanner lisait la console. Ici on écoute le clavier.
// ════════════════════════════════════════════════════════════════

document.getElementById('player-input').addEventListener('keydown', function(e){
  if (e.key === 'Enter'){
    addPlayer();
  }
});


// ════════════════════════════════════════════════════════════════
//  FONCTION : addPlayer()
//  Ajoute un joueur à la liste quand on clique "Ajouter"
// ════════════════════════════════════════════════════════════════

function addPlayer() {
  const input = document.getElementById('player-input');

  // .trim() supprime les espaces en début/fin
  const nom = input.value.trim();

  //si le nom/vide est déja la on annule
  if (!nom || joueurs.includes(nom)){
    input.value = ''; 
    return; 
  }

  // On ajoute le nom au tableau joueur
  joueurs.push(nom);
  // On vide le champ
  input.value = '';
  // On met à jour l'affichage
  renderPlayerList();
}

function removePlayer(nom){
  // .filter() crée un NOUVEAU tableau sans l'élément à supprimer
  // j => j !== nom  signifie "garder seulement les joueurs dont le nom ≠ nom"
  joueurs = joueurs.filter(function(j){
    return j !== nom;
  });

  renderPlayerList();
}

function renderPlayerList(){
  const container = document.getElementById('player-list');

  // Si aucun joueur, on affiche un message et on désactive le bouton
  if (joueurs.length === 0){
    container.innerHTML = '<span class="empty-hint">Aucun joueur pour l\'instant…</span>';
    document.getElementById('btn-start').disabled = true;
    return;
  }

  // .map() transforme chaque nom en morceau de HTML
  // C'est comme une boucle for qui construit une liste de strings
  const htmlPastilles = joueurs.map(function(nom){
    return `<div class="player-tag">
      ${nom}
      <button onclick="removePlayer('${nom}')" title="Retirer">✕</button>
    </div>`;
  });

  // .join('') colle tous les morceaux ensemble en une seule string
  container.innerHTML = htmlPastilles.join('');

  // Le bouton "Lancer" est actif seulement si on a au moins 2 joueurs
  document.getElementById('btn-start').disabled = joueurs.length < 2;
}

// ════════════════════════════════════════════════════════════════
//  FONCTION : startGame()
//  Lance la partie : cache l'écran setup, affiche l'écran jeu
// ════════════════════════════════════════════════════════════════

function startGame(){
  if (joueurs.length < 2) return;
  indexJoueur = 0;
  // On cache l'écran setup en changeant son style CSS
  document.getElementById('screen-setup').style.display = 'none';
  // On affiche l'écran jeu
  document.getElementById('screen-game').style.display = 'flex';
  // On affiche le premier tour directement
  nextTurn();
}

// ════════════════════════════════════════════════════════════════
//  FONCTION : random(max)
//  Retourne un entier aléatoire entre 0 et max-1
// ════════════════════════════════════════════════════════════════

function random(max){
  // Math.random() donne un décimal entre 0.0 et 0.999...
  // * max l'étire entre 0.0 et max-0.001
  // Math.floor() arrondit vers le bas → entier entre 0 et max-1
  return Math.floor(Math.random() * max);
}

// ════════════════════════════════════════════════════════════════
//  FONCTION : nextTurn()
//  Cœur du jeu — tire Action ou Vérité, puis une question
//  C'est l'équivalent du while() dans ton Java, déclenché par le bouton
// ════════════════════════════════════════════════════════════════

function nextTurn(){
  const joueur = joueurs[indexJoueur];

  // 90% -> situation
  //   90-99 (10%) -> Spicy  (seulement si le switch est activé)
  const modeSpicy = document.getElementById('switch-bois').checked;
  const tirage = random(100);

  let typeCase;
  if(modeSpicy && tirage >= 90){
    typeCase = 'spicy';
  }else{
    typeCase = 'situation';
  }

  // On choisit la bonne liste / texte selon le tirage
  let liste;
  let question;
  if(typeCase === 'spicy'){
    liste = SpicyListe;
  }else{
    liste = SituationListe;
  }
  question = liste[random(liste.length)];

  // ── Mise à jour de l'interface ───────────────────────────────
  // Affiche le nom du joueur
  document.getElementById('current-player').textContent = joueur;
  // Affiche la question / consigne
  document.getElementById('question-text').textContent = question;
  // Met à jour le badge avec la bonne couleur CSS
  const badge = document.getElementById('type-badge');
  if (typeCase === 'situation') {
    badge.textContent = 'Situation';
    badge.className = 'type-badge situation';
  } else {
    badge.textContent = 'Spicy';
    badge.className = 'type-badge spicy';
  }

  // ── Passage au joueur suivant ────────────────────────────────
  // Le modulo % fait revenir à 0 quand on dépasse le dernier joueur
  // Équivalent Java : index++; if (index >= pSize) { index = 0; }
  indexJoueur = (indexJoueur + 1) % joueurs.length;

  // Rafraîchit la barre des joueurs (surligne le joueur actif)
  renderPlayersRow();
}


// ════════════════════════════════════════════════════════════════
//  FONCTION : renderPlayersRow()
//  liste des joueurs en bas, joueur actif surligné
// ════════════════════════════════════════════════════════════════

function renderPlayersRow() {
  const actif = (indexJoueur - 1 + joueurs.length) % joueurs.length;
  const container = document.getElementById('players-row');
  container.innerHTML = joueurs.map(function(nom, i){
    const classeActive = (i === actif) ? 'active' : '';
    return `<span class="player-chip ${classeActive}">${nom}</span>`;
  }).join('');
}


// ════════════════════════════════════════════════════════════════
//  FONCTION : quitGame()
//  Revient à l'écran de setup + réinitialise tout
// ════════════════════════════════════════════════════════════════

function quitGame() {
  // Cache l'écran jeu
  document.getElementById('screen-game').style.display = 'none';
  // Réaffiche l'écran setup
  document.getElementById('screen-setup').style.display = 'flex';
  // Vide le tableau des joueurs
  joueurs = [];
  // Rafraîchit l'affichage (montrera le message "aucun joueur")
  renderPlayerList();
}
