
const veriteListe = [
  "Raconte la pire action de pick me que tu as fait",
  "Combien de fois es-tu tombé amoureux ?",
  "Donne la personne la plus chiante ici",
  "Donne ta plus grande honte",
  "BodyCount",
  "Ça te dérangerait de sortir avec quelqu'un ici ?",
  "Y a-t-il quelque chose que tu n'oses pas dire à quelqu'un ici ?",
  "Quelle est la chose la plus bizarre que tu aies googlé ?",
  "T'as déjà eu des sentiments pour le/la copain/copine de ton ami(e) ?",
  "Quelle est la chose la plus immature que tu fasses encore ?",
  "Quel est le pire cadeau que tu aies reçu et fait semblant d'aimer ?",
  "Quel est ton plus grand regret ?",
  "Quelle est la chose la plus folle que tu aies faite pour impressionner quelqu'un ?",
  "Quel est ton défaut que tu n'assumes pas ?",
  "T'as déjà fait semblant de ne pas voir quelqu'un pour l'éviter ?",
  "Quel est ton fantasme le plus inavouable ?",
  "Quel est le secret que tu n'as jamais dit à personne ?",
  "T'as déjà inventé une excuse pour annuler des plans organisés par une personne du groupe ?",
  "Quelle est la chose dont tu es le plus fier(e) mais que tu n'oses pas dire ?",
  "Quelle est la chose dont tu es le moins fier(e) et que tu n'oses pas dire ?",
  "Quel est le truc le plus bizarre qui te fait rire ?",
  "Quelle est ta pire habitude ?",
  "Quel est le truc que tu fais et que tu nierais complètement si on t'accusait ?",
  "Pourquoi tu pourrais te remettre avec ton ex ?",
  "Quel est le plus gros défaut de la personne à ta gauche ?",
  "Que fais-tu si tu te réveilles dans le corps du sexe opposé ?",
  "Raconte-nous ton premier amour",
  "C'était quand ta dernière cuite ?",
  "Pendant combien de temps max tu ne t'es pas douché ?",
  "Qui est la personne la plus chiante ici ?",
  "Qui tu trouves le moins intelligent ?",
  "Quelle est la chose la plus embarrassante que tu aies pu faire ?",
  "Quel est le pire surnom qu'on t'ait donné ?",
  "Quel sentiment ressens-tu pour ton ex ?",
  "Que voudrais-tu le plus changer chez toi ?",
  "Que voudrais-tu le plus changer physiquement chez toi ?",
  "Quelles sont les qualités les plus attirantes chez la personne à ta gauche ?",
  "Quelles sont les qualités les plus attirantes chez la personne à ta droite ?",
  "Qu'est-ce qui t'énerve le plus chez la personne à ta droite ?",
  "Qu'est-ce qui t'énerve le plus chez la personne à ta gauche ?",
  "Tu serais prêt à quoi pour 1 Million ?",
  "Qu'est-ce que tu aimerais demander à la personne à ta droite mais que tu n'as jamais osé ?",
  "Qu'est-ce que tu aimerais demander à la personne à ta gauche mais que tu n'as jamais osé ?",
  "Donne ton pire RedFlag",
  "Donne ton pire GreenFlag",
  "Donne ton RedFlag le plus chelou",
  "Donne ton GreenFlag le plus chelou",
  "D'après toi qui est la personne la plus forte physiquement ici ?",
  "D'après toi qui est la personne la plus faible physiquement ici ?",
  "La personne à ta droite perd ses reins, es-tu prêt à en sacrifier un pour lui ?",
  "La personne à ta gauche perd ses reins, es-tu prêt à en sacrifier un pour lui ?",
  "Quel est l'endroit le plus étrange dans lequel tu as dormi ?",
  "Selon toi qui t'aime le plus ici ?",
  "Quel est le pire truc que tu aies fait lors d'une soirée ?",
  "Décris ton style de mec/meuf",
  "Que préfères-tu chez le sexe de ton orientation sexuelle ?",
  "Raconte une anecdote drôle que peu de gens connaissent",
  "Quelle est la dernière personne que tu as stalkée sur les réseaux ?",
  "Quel est ton plus gros mensonge ?",
  "À qui penses-tu le plus souvent dans cette pièce ?",
  "Qui ici survivrait le moins longtemps à une apocalypse ?",
  "Qui ici survivrait le plus longtemps à une apocalypse ?",
  "Quelle est la chose la plus illégale que tu aies faite ?",
  "Quel est ton plus gros complexe ?",
  "As-tu déjà pleuré pour quelqu'un qui ne le sait pas ?",
  "Quelle est ta pire expérience amoureuse ?",
  "Quel est ton pire râteau ?",
  "As-tu déjà ghosté quelqu'un ?",
  "Pourquoi as-tu déjà ghosté une personne ?",
  "Quel est ton plus gros red flag en couple ?",
  "Quel est ton plus gros green flag en couple ?",
  "Qui ici ferait le pire parent ?",
  "Qui ici ferait le meilleur parent ?",
  "Quel est ton talent inutile ?",
  "Quelle est la chose la plus stupide que tu aies faite par amour ?",
  "Quel est le pire conseil que tu aies donné ?",
  "Quel est le pire conseil que tu aies suivi ?",
  "As-tu déjà fait semblant d'être malade ? Si oui pourquoi ?",
  "Quel est le pire métier que tu pourrais faire ?",
  "Quel est le pire métier que ferait la personne à ta droite ?",
  "Quel est le pire métier que ferait la personne à ta gauche ?",
  "Qui ici est le plus susceptible de finir en prison ?",
  "Qui ici est le plus susceptible de devenir célèbre ?",
  "Qui ici est le plus susceptible de devenir riche ?",
  "Qui ici est le plus susceptible d'oublier son propre mariage ?",
  "C'est quand la dernière fois que tu as regardé un porno ?",
  "Quel est le pire trait de caractère chez toi ?",
  "Quel est le meilleur trait de caractère chez toi ?",
  "As-tu déjà eu un crush sur quelqu'un ici ?",
  "Qui ici te ressemble le plus ?",
  "Qui ici te ressemble le moins ?",
  "Quelle est la pire décision que tu aies prise ?",
  "Quelle est la meilleure décision que tu aies prise ?",
  "Quelle est la chose la plus courageuse que tu aies faite ?",
  "Quelle est la chose la plus lâche que tu aies faite ?",
  "Quel est le pire cadeau que tu as offert ?",
  "Quel est le mensonge le plus longtemps maintenu ?",
  "Qui ici te connaît le mieux ?",
  "Qui ici te connaît le moins ?",
  "Quelle est la pire mode que tu as suivie ?",
  "Quelle est la chose la plus ridicule que tu fais quand personne ne regarde ?",
  "Quelle est la chose que tu regrettes d'avoir dite ?",
  "Quelle est la chose que tu regrettes de ne pas avoir dite ?",
  "Si tu pouvais effacer un souvenir, lequel choisirais-tu ?",
  "Si tu pouvais revivre une journée, laquelle choisirais-tu ?",
  "En qui ici as-tu le plus confiance ?",
  "Si tu pouvais passer une journée avec une célébrité, qui choisirais-tu ?",
  "Qui ici a le plus de chance de faire le buzz sur internet ?",
  "Qui ici a le plus de chance d'être une célébrité plus tard ?",
  "Qui ici a le plus de chance de faire le buzz en faisant un truc débile ?",
  "Si la personne à ta gauche te fait une décla, tu réagis comment ?",
  "Si la personne à ta droite te fait une décla, tu réagis comment ?",
  "Quelle est la plus belle partie du corps de la personne à ta droite ?",
  "Quelle est la plus belle partie du corps de la personne à ta gauche ?",
  "Quelle est la chose la plus folle que tu aies faite pour impressionner un crush ?",
  "Serais-tu prêt(e) à avoir une relation avec une personne du groupe ?"
];

const actionListe = [
  "Ouvre tes DM insta et laisse quelqu'un faire ce qu'il veut pendant 30 secondes",
  "Ouvre ton insta et laisse faire quelqu'un ce qu'il veut pendant 30 secondes",
  "Ouvre ton snap et laisse faire à quelqu'un ce qu'il veut pendant 30 secondes",
  "Ouvre ton snap et laisse quelqu'un regarder tes conversations pendant 30 secondes",
  "Ouvre ta messagerie et laisse quelqu'un regarder tes conversations pendant 30 secondes",
  "Imite un animal",
  "Fais 10 pompes",
  "Parle avec un accent étranger pendant le prochain tour",
  "Poste une photo moche/dossier de toi en story",
  "Laisse la personne à ta gauche poster ce qu'elle souhaite en story",
  "Laisse la personne à ta droite poster ce qu'elle souhaite en story",
  "Poste un carrousel insta de dossiers de toi (il doit rester au moins 1h)",
  "Chante a cappella une chanson",
  "Laisse le groupe choisir ta note insta qui doit rester 24h",
  "Laisse quelqu'un fouiller ton téléphone pendant 1 minute",
  "Fais une photo de profil ridicule pour insta et garde-la 24h",
  "Imite quelqu'un du groupe sans dire son nom",
  "Envoie un voice message gênant à un proche",
  "Lis tes 5 derniers messages envoyés à voix haute",
  "Laisse quelqu'un te coiffer comme il veut",
  "Parle uniquement en chuchotant pendant le prochain tour",
  "Change ton fond d'écran avec une photo choisie par le groupe",
  "Laisse quelqu'un te maquiller les yeux fermés",
  "Dis un secret que personne ne sait à voix haute",
  "Lis ton message le plus gênant de l'année",
  "Fais 10 squats en comptant à voix haute dans une autre langue",
  "Réponds uniquement par des bruitages pendant le prochain tour",
  "Fais-nous écouter la musique la plus embarrassante que tu écoutes",
  "Donne la couleur préférée de la personne à ta droite",
  "Donne la couleur préférée de la personne à ta gauche",
  "Envoie à quelqu'un de ta famille un émoji choisi par le groupe",
  "Fais un classement du plus au moins susceptible de finir en prison ici",
  "Décris chaque personne présente avec un seul mot",
  "Fais un classement du plus au moins susceptible de devenir célèbre",
  "Fais un classement du plus au moins susceptible d'oublier son propre anniversaire",
  "Fais un classement du plus au moins susceptible de gagner au loto",
  "Fais un classement du plus au moins susceptible de partir vivre à l'étranger",
  "Fais un classement du plus au moins susceptible de devenir millionnaire",
  "Imite Michou",
  "Imite TiboInshape",
  "Imite Nicolas Sarkozy",
  "Imite François Hollande",
  "Imite Emmanuel Macron",
  "Imite Cyril Hanouna",
  "Invente une règle absurde pour le jeu (celui qui ne la respecte pas a un gage)",
  "Essaie de toucher ton nez avec ta langue",
  "Fais un classement du plus au moins drôle ici",
  "Fais un classement du plus au moins intelligent ici",
  "Fais un classement du plus au moins sportif ici",
  "Fais un classement du plus au moins susceptible de survivre sur une île déserte",
  "Fais un classement du plus au moins chanceux ici",
  "Fais un classement du plus au moins romantique ici",
  "Raconte une anecdote embarrassante",
  "Laisse le groupe choisir ta photo de profil pendant 24h",
  "Envoie un emoji au hasard à la dernière personne avec qui tu as parlé",
  "Fais un classement du plus au moins susceptible de disparaître pendant une soirée",
  "Fais un classement du plus au moins susceptible d'oublier son portefeuille",
  "Fais un classement du plus au moins susceptible de devenir riche",
  "Fais un classement du plus au moins susceptible de dormir en cours ou au travail",
  "Fais un classement du plus au moins susceptible de se perdre dans sa propre ville",
  "Imite la personne de ton choix jusqu'à ton prochain tour",
  "Parle avec un accent (inventé ou non) jusqu'au prochain tour",
  "Imite quelqu'un qui vient de gagner à la loterie puis se rend compte qu'il a foiré ses partiels",
  "Invente un nouveau mot et sa définition",
  "Imite un personnage de dessin animé",
  "Parle avec la voix la plus grave possible pendant 2 tours",
  "Parle avec la voix la plus aiguë possible pendant 2 tours",
  "Imite un youtubeur célèbre",
  "Dis 3 anecdotes dont une fausse — si tout le monde la trouve, tu as un gage",
  "Fais un classement du plus au moins susceptible de survivre à une invasion zombie",
  "Fais un classement du plus au moins susceptible d'adopter 12 chats",
  "Fais un classement du plus au moins susceptible de devenir célèbre sur internet",
  "Fais un classement du plus au moins susceptible de se faire virer pour une raison absurde",
  "Fais un classement du plus au moins susceptible de gagner une émission télévisée",
  "Fais un classement du plus au moins susceptible d'oublier son propre mariage",
  "Fais un classement du plus au moins susceptible de partir vivre sur une île",
  "Fais un classement du plus au moins susceptible de créer une secte",
  "Fais un classement du plus au moins susceptible de finir influenceur",
  "Fais un classement du plus au moins susceptible de se faire arrêter pour une bêtise",
  "Fais un classement du plus au moins susceptible de devenir président",
  "Fais un classement du plus au moins susceptible de manger la même chose tous les jours",
  "Fais un classement du plus au moins susceptible de réussir Koh-Lanta",
  "Fais un classement du plus au moins susceptible d'envoyer un message au mauvais groupe",
  "Fais un classement du plus au moins susceptible d'oublier où il a garé sa voiture",
  "Fais un classement du plus au moins susceptible de devenir détective",
  "Fais un classement du plus au moins susceptible de parler à un animal comme à un humain",
  "Fais un classement du plus au moins susceptible de faire le tour du monde",
  "Fais un classement du plus au moins susceptible de devenir une légende locale",
  "Fais un classement du plus au moins susceptible de survivre seul pendant un mois",
  "Fais semblant d'être un candidat de téléréalité",
  "Fais un classement du plus au moins susceptible d'envoyer un message gênant à 3h du matin",
  "Fais un classement du plus au moins susceptible de devenir une star de téléréalité",
  "Fais un classement du plus au moins susceptible de pleurer devant un film",
  "Fais un classement du plus au moins susceptible de survivre à une apocalypse zombie",
  "Fais un classement du plus au moins susceptible de manger un aliment périmé sans vérifier",
  "Fais un classement du plus au moins susceptible de se faire bannir d'un magasin",
  "Fais un classement du plus au moins susceptible de tomber amoureux en premier",
  "Donne un surnom à chaque personne du groupe",
  "Attribue un super-pouvoir à chaque personne",
  "Attribue un métier improbable à chaque personne",
  "Attribue un animal à chaque personne",
  "Attribue une voiture à chaque personne",
  "Attribue un plat à chaque personne",
  "Attribue une boisson à chaque personne",
  "Attribue une série à chaque personne",
  "Attribue un personnage de dessin animé à chaque personne",
  "Attribue une catastrophe naturelle à chaque personne",
  "Fais le bruit que la personne à ta gauche choisit",
  "Fais le bruit que la personne à ta droite choisit",
  "Laisse la personne à ta droite faire ton prochain verre",
  "Laisse la personne à ta gauche faire ton prochain verre",
  "Envoie un message à ton ex",
  "Maquille-toi de manière ridicule"
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

  //   0-44  (45%) -> Vérité
  //   45-89 (45%) -> Action
  //   90-99 (10%) -> Bois  (seulement si le switch est activé)
  const modeBois = document.getElementById('switch-bois').checked;
  const tirage = random(100);

  let typeCase;
  if(modeBois && tirage >= 90){
    typeCase = 'bois';
  }else{
    if (modeBois){
      if(tirage < 45){
          typeCase = 'verite';
      }else{
          typeCase = 'action';
      }
    }else{
      if(random(2) === 0){
          typeCase = 'verite';
      }else{
          typeCase = 'action';
      }
    }
  }

  // On choisit la bonne liste / texte selon le tirage
  let question;
  if (typeCase === 'bois') {
    question = 'Tu dois boire un verre !';
  } else {
    const liste = typeCase === 'verite' ? veriteListe : actionListe;
    question = liste[random(liste.length)];
  }

  // ── Mise à jour de l'interface ───────────────────────────────
  // Affiche le nom du joueur
  document.getElementById('current-player').textContent = joueur;
  // Affiche la question / consigne
  document.getElementById('question-text').textContent = question;
  // Met à jour le badge avec la bonne couleur CSS
  const badge = document.getElementById('type-badge');
  if (typeCase === 'verite') {
    badge.textContent = 'Vérité';
    badge.className = 'type-badge verite';
  } else if (typeCase === 'action') {
    badge.textContent = 'Action';
    badge.className = 'type-badge action';
  } else {
    badge.textContent = 'Bois';
    badge.className = 'type-badge bois';
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
