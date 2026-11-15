
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
  "brisé le cœur de quelqu'un",
  "Eu le cœur brisé",
  "Menti à mes parents",
  "Menti à un ami proche",
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
  "Cassé mon téléphone",
  "Fait tomber le téléphone de quelqu'un et le cassé",
  "Eu une amende",
  "Eu un accident de voiture",
  "Fait semblant de comprendre une conversation",
  "Raconté une histoire en exagérant un max avec quelqu'un de ce groupe",
  "Menti sur mes compétences",
  "Déclaré ma flamme à quelqu'un",
  "Reçu une déclaration d'amour",
  "Été amoureux en secret sur quelqu'un du groupe",
  "Été amoureux en secret",
  "Pris un râteau",
  "Mis un râteau",
  "Été friendzone",
  "Friendzone quelqu'un",
  "Appelé un prof maman ou papa",
  "Parlé tout seul et avoir été surpris (du coup on t'a pris pour un fou)",
  "Rigolé tout seul dans la rue",
  "Mangé trop épicé et regretté",
  "Voyagé seul",
  "Fait du stop",
  "Visité plus de 5 pays",
  "Perdu mes bagages",
  "Fait du camping",
  "Allumé un feu de camp",
  "Eu une fracture",
  "Porté un plâtre",
  "Eu des points de suture",
  "Passé aux urgences",
  "Été hospitalisé",
  "Aidé un inconnu",
  "Fait un don à une association",
  "Participé à une manifestation",
  "Signé une pétition",
  "Fait du bénévolat",
  "Eu un animal de compagnie",
  "Perdu un animal de compagnie",
  "Adopté un animal",
  "Parlé devant plus de 50 personnes",
  "Fait un karaoké",
  "Chanté faux en public",
  "Gagné un concours",
  "Terminé dernier d'une compétition",
  "Jeté une manette de colère",
  "Cassé quelque chose en étant énervé",
  "Crié sur quelqu'un et se rendre compte d'avoir eu tord",
  "Coupé les ponts avec quelqu'un",
  "Repris contact avec quelqu'un des années après",
  "Retrouvé un objet que je croyais perdu",
  "Eu un tatouage",
  "Eu un piercing",
  "Regretté une coupe de cheveux",
  "Teint mes cheveux",
  "Rasé ma tête",
  "Fait une blague qui a mal tourné (raconte)",
  "Envoyé un vocal de plus de 5 minutes (tu es d'un ennuie)",
  "Fait semblant de dormir",
  "Espionné une conversation qui concernait une personne de ce groupe",
  "Fouillé dans le téléphone de quelqu'un",
  "Pris une capture d'écran d'une conversation pour l'envoyer à un pote",
  "Été viré d'un groupe",
  "Créé un contre-groupe",
  "Ri à un moment inapproprié (raconte)",
  "Fait semblant de reconnaître quelqu'un pour éviter une situation génante",
  "Mentit pour éviter une soirée",
  "Annulé au dernier moment",
  "Poser un lapin",
  "Organisé une fête",
  "Cassé quelque chose chez quelqu'un",
  "Eu un surnom ridicule",
  "Inventé un surnom ridicule",
  "Commencé une série sans la finir",
  "Lu un livre en une journée",
  "Passé plus de 20 heures devant un écran en 1 jour",
  "Fait semblant de rire à une blague nulle pour éviter un moment génant",
  "Eu un énorme coup de chance (raconte)",
  "Eu une énorme malchance (raconte)",
  "Perdu un pari (raconte)",
  "Gagné un pari improbable",
  "Eu le permis",
  "Raté le permis",
  "Monté dans une montgolfière",
  "Eu un coup de soleil sévère",
  "Offert un cadeau 'poubelle'",
  "Recyclé un ancien cadeau",
  "Perdu un objet prêté",
  "Emprunté de l'argent",
  "Dépensé tout mon argent trop vite",
  "Acheté quelque chose d'inutile",
  "Commandé quelque chose à 3h du matin",
  "Manqué un rendez-vous important",
  "Oublié un devoir et donné une excuse nulle (raconte)",
  "Eu une bonne note imméritée",
  "Regardé un film juste pour comprendre une référence",
  "Fait un marathon de séries/film",
  "Crié sur un objet qui ne fonctionnait pas",
  "Googlé mon propre nom",
  "Stalker un ami sur internet",
  "Fait une recherche que je n'assumerais pas (assume du coup)",
  "Oublié pourquoi j'étais entré dans une pièce",
  "Répondu 'toi aussi' à un serveur qui te souhaitait 'bon appétit'",
  "Tendu la main alors que l'autre voulait faire la bise",
  "Renversé une boisson/bouffe sur quelqu'un",
  "Like une photo par accident",
  "Supprimé une publication par honte (raconte)",
  "Eu un a priori totalement faux sur quelqu'un (raconte)",
  "Regretté une décision prise sur un coup de tête (raconte)",
  "Fait confiance à la mauvaise personne",
  "Rencontré une célébrité",
  "Pris une photo avec une célébrité",
  "Passé 24h au téléphone",
  "été mis dans une situation problématique en prenant la défence d'un ou d'une pote",
  "été mis dans une situation problématique sans rien demander",
  "Fais quelque chose d'illegal",
  "Fais quelque chose d'illegal sans faire exprès",
  "Stalker mon ex",
  "Stalker ma crush",
  "Regarder dans le téléphone de ma copine/copain",
  "Regarder l'historique de mon/ma copain/copine",
  "Passé 48h au téléphone",
  "Bloqué quelqu'un",
  "Bloqué une/un ex",
  "Pris de médicament pour le fun ou le gout",
  "Joué à OugaBooga le jeu original (ou presque) de ce site internet à retrouver à l'accueil (PUB)",
  "Eu de coup de soleil sur tout le corps",
  "Eu de brulure au 2e degres à cause du soleil",
  "été blessé volontairement pour ne pas faire quelque chose",
  "Utiliser un VPN",
  "Attendu une journée dans mon lit à rien faire",
  "Arreter de me laver pendant plus de 3jours",
  "Arreter de me laver pendant plus d'une semaine",
  "Arreter de me laver pendant plus d'un mois",
  "été en crush plus d'un mois sur la même personne sans qu'il ne se passe rien",
  "été en crush plus d'un an sur la même personne sans qu'il ne se passe rien",
  "été en crush plus de deux ans sur la même personne sans qu'il ne se passe rien",
  "été en crush plus de Trois ans sur la même personne sans qu'il ne se passe rien",
  "été en crush plus de 4ans sur la même personne sans qu'il ne se passe rien",
  "été en crush plus de 5ans sur la même personne sans qu'il ne se passe rien",
  "Démissioné",
  "Abandonné un projet car il était trop conséquent",
  "Joué à Terraria",
  "Joué à Minecraft",
  "Joué à Valorant",
  "Joué à Mario Kart",
  "Joué à Super Mario Bros",
  "Joué à Counter Strike",
  "Joué à un Triple A (grand jeu de studio populaire)",
  "Joué à un jeu de studio indépendant",
  "Joué à un jeu d'horreur",
  "Regardé un film d'horreur",
  "Regardé un film de Romance",
  "Regardé une serie d'horreur",
  "Regardé une serie de romance",
  "Regardé Stranger Things",
  "Regardé Breaking Bad",
  "Regardé Lost",
  "Regardé Downtown Abbey",
  "Regardé The Big Bang Theory (ou les autres series en lien avec)",
  "Regardé un film ou une serie sur Netflix",
  "Regardé 13 reasons why (appelez le 3114 si ça ne va pas)",
  "Regardé un anime japonais",
  "Lu un manga",
  "Lu le livre d'un film avant de regardé le film",
  "Regardé un film pour après lire le livre de ce film",
  "Regardé un film/serie en VO",
  "Regardé un film/serie en VF",
  "Regardé un stream en direct",
  "Regardé été sur DailyMotion",
  "Posté une vidéo sur les réseaux (TikTok Youtube Instagram etc...)",
  "Utilisé l'IA",
  "Utilisé l'IA pour parler de mes problèmes (appelez le 3114 si ça ne va pas)",
  "été au cinéma",
  "Essayé de ByPass la sécurité d'une IA",
  "Insulté une IA car elle a mal répondu",
  "Dit ''s'il te plait'' ou ''Merci'' etc... à une IA",
  "Utiliser une image ShuterStock pour un exposé (Une image pas libre de droit avec écrit la source dessus)",
  "Fait de la programation",
  "Fait de l'animation",
  "Participer à une oeuvre charicative",
  "Fait un don à une oeuvre charicative",
  "été bénévole"
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
  "Eu un crush sur un collègue",
  "Eu un crush sur un professeur",
  "Eu un crush sur une célébrité",
  "Déclaré mes sentiments",
  "Reçu une déclaration d'amour",
  "Pris un râteau",
  "Mis un râteau",
  "Été friendzone",
  "Friendzone quelqu'un",
  "Eu un crush sur quelqu'un dans cette pièce",
  "Maté quelqu'un dans cette pièce",
  "Trouvé quelqu'un dans cette pièce attirant",
  "Pensé à sortir avec quelqu'un dans cette pièce",
  "Pensé que quelqu'un ici me plaisait",
  "Pensé que quelqu'un ici me draguait",
  "Fait le premier pas",
  "Attendu que l'autre fasse le premier pas",
  "Dit 'je t'aime'",
  "Entendu 'je t'aime'",
  "Dit 'je t'aime' en premier",
  "Eu le cœur brisé",
  "Brisé le cœur de quelqu'un",
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
  "Regretté un message envoyé à un crush (raconte)",
  "Passé une nuit entière à parler avec quelqu'un",
  "Passé plus de 5h à discuter avec quelqu'un",
  "Eu un date",
  "Eu un date catastrophique",
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
  "Stalké un crush sur les réseaux",
  "Like une vieille photo par accident",
  "Passé plus d'une heure à regarder un profil",
  "Demandé des conseils amoureux à un ami",
  "Servi d'entremetteur",
  "Aidé quelqu'un à séduire une personne",
  "Été jaloux",
  "Été jaloux d'une relation",
  "Mentit sur mes sentiments pour quelqu'un",
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
  "Stalker la lumière verte pour voir si quelqu'un était en ligne",
  "Relu une conversation entière",
  "Gardé une capture d'écran d'une conversation",
  "Demandé à un ami d'analyser un message",
  "Envoyé un message puis paniqué",
  "Supprimé un message de honte",
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
  "Eu un rendez-vous très gênant",
  "Eu une relation que mes amis désapprouvaient",
  "Écouté une chanson en pensant à quelqu'un",
  "Fait une playlist pour quelqu'un",
  "Reçu une playlist de quelqu'un",
  "Pris plus d'1h à écrire un message",
  "Réécrit un message plus de 5 fois",
  "Eu peur d'ouvrir un message",
  "Souri en regardant un message mignon",
  "Passé une soirée entière à parler à une seule personne",
  "Pensé à quelqu'un présent dans cette pièce",
  "Eu un rapport BDSM",
  "Esperer un rapport avec quelqu'un dans la pièce",
  "Reçu un sexto",
  "Envoyer des sextos",
  "Reçu de nude",
  "Envoyer des nudes",
  "Voulu embrasser quelqu'un dans la pièce",
  "Voulu une relation avec quelqu'un dans la pièce",
  "Fait du Hard Sex",
  "été épuisé après un rapport sexuel",
  "été impliqué dans des préliminaires",
  "été impliqué dans un cunny",
  "été impliqué dans une Felation",
  "Partager un sextos avec ses potes",
  "Partager des nudes avec ses potes",
  "Partager un sextos d'une autre personne à ses potes (pas bien de faire ça)",
  "Partager des nudes d'une autre personne à ses potes (pas bien de faire ça)",
  "été un gros connard et faire du revenge porn",
  "Coucher avec une Milf",
  "Coucher avec quelqu'un de plus agé",
  "Coucher avec quelqu'un de plus jeune",
  "Coucher avec quelqu'un pour de l'argent",
  "Coucher avec quelqu'un pour un pari",
  "Coucher avec un ami",
  "été en couple avec quelqu'un juste pour le sexe",
  "Eu d'orgasme pendant des préliminaires",
  "Eu d'orgasme",
  "Eu d'orgasme en se masturbant",
  "Fait de rêve érotique",,
  "Fait de rêve érotique avec quelqu'un de cette pièce",
  "Eu de rapport sexuel avec une personne du même sexe",
  "Eu de rapport sexuel",
  "été attaché à un lit par mon/ma partenaire",
  "Attaché mon/ma Partenaire",
  "Acheté une tenue sexy",
  "Fait un strip Tease",
  "Eu de brulure de Tapis (blessure lors d'une relation sexuel)",
  "Eu d'arrière penser avec une personne du groupe",
  "Voler le crush d'un/une ami",
  "Fait l'amour pour passer l'éponge sur une dispute",
  "Parlé de sexe avec ma famille",
  "Parlé de mes ébats sexuel avec ma famille",
  "Bu de l'alcool avant de faire l'amour",
  "Fantasmé sur une personne du groupe",
  "Fantasmé sur la famille d'une personne du groupe",
  "Demandé la taille du sexe de quelqu'un",
  "Demandé la team d'un gars (Sang ou Chair)",
  "Utilisé du lubrifiant",
  "Utilisé des Préservatif (protegez vous c'est important)",
  "Utilisé un moyen de contraception (protegez vous c'est important)",
  "Utilisé/ fait utilisé la pillule du lendemain",
  "Avoir eu recours à un IVG",
  "Eu de rapport sexuel debout",
  "Fait l'amour dans un lieux public",
  "Fait l'amour à la plage",
  "été polygame",
  "été soumis",
  "été dominant",
  "Maté mon / ma coloc",
  "Maté une personne de la pièce",
  "Maté une/un ami",
  "Eu un plan cul",
  "Eu un plan cul régulié",
  "Fantasmé sur une personne ici pendant un rapport sexuel",
  "Fantasmé sur quelqu'un d'autre que mon partenaire lors d'un rapport sexuel",
  "été sur un site porno",
  "été dégouté par le sexe",
  "Confondu de trou",
  "Eu un abonnement sur une plateforme personnel (OnlyFan, Mym etc...)",
  "Fantasmé sur un personnage fictif",
  "Offert un cadeau coquin",
  "été surpris lors d'un plaisir solitaire",
  "Utiliser un VPN pour aller sur un site Porno",
];

let pourcentageSpicy = 0; // 0 à 100, par pas de 10

function changeSpicy(delta) {
  pourcentageSpicy = Math.min(100, Math.max(0, pourcentageSpicy + delta));
  document.getElementById('spicy-display').textContent = pourcentageSpicy + '%';
}

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

  // tirage : 0 à 99
  // ex: pourcentageSpicy=30 → tirages 0-29 (30%) → spicy, reste → situation
  // si pourcentageSpicy=0 → jamais spicy
  const tirage = random(100);

  let typeCase;
  if (pourcentageSpicy > 0 && tirage < pourcentageSpicy) {
    typeCase = 'spicy';
  } else {
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
