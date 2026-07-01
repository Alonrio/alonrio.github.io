
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

// ── Listes Spicy ────────────────────────────────────────────────

const veriteSpicyListe = [
  "Qui ici tu trouves le plus attirant(e) ?",
  "T'as déjà eu une pensée coquine sur quelqu'un du groupe ?",
  "Quelle est ta position préférée ?",
  "Quel est ton endroit le plus insolite où tu as… tu sais quoi ?",
  "T'as déjà dragué quelqu'un en couple ?",
  "Décris le meilleur baiser que tu aies jamais eu",
  "Qu'est-ce qui t'excite le plus chez quelqu'un ?",
  "Quel est le truc le plus osé que tu aies jamais envoyé par message ?",
  "T'as déjà fait semblant d'avoir un orgasme ?",
  "T'as déjà été surpris(e) dans une situation compromettante ?",
  "Quel est ton plus grand kink que tu assumes ?",
  "Avec qui ici tu passerais une nuit si tu devais absolument choisir ?",
  "Décris ton type physique idéal",
  "Quel est le compliment le plus osé qu'on t'ait fait ?",
  "T'as déjà envoyé un message au mauvais destinataire et regretté ta vie ?",
  "Raconte ton expérience la plus embarrassante en rapport avec le sexe",
  "T'as déjà eu un crush sur un(e) prof ?",
  "Combien de fois par semaine en moyenne… tu vois ce qu'on veut dire",
  "Quel est le truc le plus coquin que tu aies jamais fait en public ?",
  "Classer les personnes ici par attirance — si tu DEVAIS le faire"
];

const actionSpicyListe = [
  "Fais un massage de 30 secondes à la personne de ton choix",
  "Chuchote quelque chose de coquin à l'oreille de la personne à ta gauche",
  "Fais le regard le plus séducteur possible à la personne en face de toi",
  "Dis le prénom de quelqu'un ici de la manière la plus sensuelle possible",
  "Décris en détail ce que tu ferais si tu avais une soirée seul(e) avec la personne à ta droite",
  "Fais un câlin de 15 secondes à la personne de ton choix",
  "Dis trois choses que tu trouves physiquement attirant chez quelqu'un dans cette pièce",
  "Montre ton historique de recherche des 5 dernières minutes",
  "Imite quelqu'un en train de séduire — le groupe juge si c'est convaincant",
  "Envoie un GIF coquin (sans texto) à quelqu'un du groupe",
  "Fais un clin d'œil irrésistible à chaque personne du groupe une par une",
  "Chante un refrain de chanson romantique en regardant quelqu'un dans les yeux"
];

// ── Listes Ultra Spicy (pour couples) ──────────────────────────

const veriteUltraSpicyListe = [
  "Quelle est la chose la plus osée que tu aies faite en couple ?",
  "Décris la soirée la plus torride que tu aies vécue avec ton/ta partenaire",
  "Quel est ton fantasme que tu n'as jamais osé demander à ton/ta partenaire ?",
  "Qu'est-ce qui te rend fou/folle chez ton/ta partenaire en privé ?",
  "Quelle est la position que tu veux absolument tester mais que tu n'as pas encore osé proposer ?",
  "Qu'est-ce qui t'a le plus surpris(e) chez ton/ta partenaire au lit ?",
  "Quel est le lieu le plus fou où tu aimerais faire l'amour avec ton/ta partenaire ?",
  "Quelle est la chose la plus courageuse que tu aies proposée à ton/ta partenaire ?",
  "Raconte la fois où vous avez failli vous faire surprendre",
  "Qu'est-ce que tu n'as jamais dit à ton/ta partenaire mais que tu penses pendant l'intimité ?"
];

const actionUltraSpicyListe = [
  "Embrasse ton/ta partenaire pendant 10 secondes",
  "Dis à ton/ta partenaire la chose la plus sexy que tu penses de lui/elle",
  "Fais un strip-tease improvisé de 20 secondes pour ton/ta partenaire",
  "Écris quelque chose de coquin dans la paume de la main de ton/ta partenaire",
  "Donne un vrai massage de 1 minute à ton/ta partenaire",
  "Murmure à l'oreille de ton/ta partenaire ce que tu voudrais faire plus tard ce soir",
  "Fais à ton/ta partenaire le regard le plus séducteur que tu puisses",
  "Échange un objet intime (bracelet, bague) avec ton/ta partenaire pour le reste de la soirée"
];

// ════════════════════════════════════════════════════════════════
//  État du jeu
// ════════════════════════════════════════════════════════════════

let joueurs = [];
let indexJoueur = 0;

// ── Réglages des pourcentages ──────────────────────────────────
// pctSoft est calculé automatiquement = 100 - bois - spicy - ultra
let pctBois      = 0;
let pctSpicy     = 0;
let pctUltraSpicy = 0;

function getSoftPct(){ return 100 - pctBois - pctSpicy - pctUltraSpicy; }

// ════════════════════════════════════════════════════════════════
//  Listeners input joueur
// ════════════════════════════════════════════════════════════════

document.getElementById('player-input').addEventListener('keydown', function(e){
  if (e.key === 'Enter'){ addPlayer(); }
});

// ════════════════════════════════════════════════════════════════
//  AFFICHAGE DES POURCENTAGES
// ════════════════════════════════════════════════════════════════

function renderSetupPcts(){
  const soft = getSoftPct();

  // Soft
  document.getElementById('pct-soft').textContent = soft + '%';

  // Bois
  document.getElementById('pct-bois').textContent = pctBois + '%';
  document.getElementById('desc-bois').textContent =
    pctBois === 0 ? 'Désactivé' : 'Chance de tomber sur "Bois !" — ' + pctBois + '%';

  // Spicy
  document.getElementById('pct-spicy').textContent = pctSpicy + '%';
  document.getElementById('desc-spicy').textContent =
    pctSpicy === 0 ? 'Désactivé' : 'Questions pimentées — ' + pctSpicy + '%';

  // Ultra Spicy
  document.getElementById('pct-ultraspicy').textContent = pctUltraSpicy + '%';
  document.getElementById('desc-ultraspicy').textContent =
    pctUltraSpicy === 0 ? 'Désactivé — réservé aux couples' : 'Questions intimes pour couples — ' + pctUltraSpicy + '%';

  // Warning si soft < 0
  const warning = document.getElementById('pct-warning');
  if (soft < 0){
    warning.style.display = 'block';
    warning.textContent = '⚠ Total dépasse 100% — réduis un mode (' + (100 - soft) + '% au total)';
  } else {
    warning.style.display = 'none';
  }
}

// ════════════════════════════════════════════════════════════════
//  GESTION DES POURCENTAGES (boutons + / -)
// ════════════════════════════════════════════════════════════════

function clamp(val, min, max){ return Math.max(min, Math.min(max, val)); }

function changePct(type, delta){
  if (type === 'soft'){
    // Soft se pilote en bougeant tous les autres dans le sens opposé
    // On prend sur le dernier mode actif ou on refuse si impossible
    const newSoft = clamp(getSoftPct() + delta, 0, 100);
    const diff = newSoft - getSoftPct(); // delta réel
    // On répartit le diff en réduisant/augmentant les autres modes
    // Règle simple : on touche d'abord ultra, puis spicy, puis bois
    let reste = -diff;
    if (reste > 0){
      // On veut augmenter les autres (réduire soft) → bloquer si plus de place
      const available = 100 - pctBois - pctSpicy - pctUltraSpicy;
      if (available <= 0) return;
    }
    // Ici on redistribue sur ultra puis spicy puis bois
    let r = reste;
    if (r > 0){
      const add = Math.min(r, 80 - pctUltraSpicy); pctUltraSpicy = clamp(pctUltraSpicy + add, 0, 80); r -= add;
    } else if (r < 0){
      const sub = Math.min(-r, pctUltraSpicy); pctUltraSpicy -= sub; r += sub;
      if (r < 0){ const sub2 = Math.min(-r, pctSpicy); pctSpicy -= sub2; r += sub2; }
      if (r < 0){ pctBois = Math.max(0, pctBois + r); }
    }
  } else if (type === 'bois'){
    const newVal = clamp(pctBois + delta, 0, 90);
    if (getSoftPct() - (newVal - pctBois) < 0) return; // pas de place
    pctBois = newVal;
  } else if (type === 'spicy'){
    const newVal = clamp(pctSpicy + delta, 0, 80);
    if (getSoftPct() - (newVal - pctSpicy) < 0) return;
    pctSpicy = newVal;
  } else if (type === 'ultraspicy'){
    const newVal = clamp(pctUltraSpicy + delta, 0, 80);
    if (getSoftPct() - (newVal - pctUltraSpicy) < 0) return;
    pctUltraSpicy = newVal;
  }
  renderSetupPcts();
}

// ════════════════════════════════════════════════════════════════
//  GESTION DES JOUEURS
// ════════════════════════════════════════════════════════════════

function addPlayer(){
  const input = document.getElementById('player-input');
  const nom = input.value.trim();
  if (!nom || joueurs.includes(nom)){ input.value = ''; return; }
  joueurs.push(nom);
  input.value = '';
  renderPlayerList();
}

function removePlayer(nom){
  joueurs = joueurs.filter(function(j){ return j !== nom; });
  renderPlayerList();
}

function renderPlayerList(){
  const container = document.getElementById('player-list');
  if (joueurs.length === 0){
    container.innerHTML = '<span class="empty-hint">Aucun joueur pour l\'instant…</span>';
    document.getElementById('btn-start').disabled = true;
    return;
  }
  const htmlPastilles = joueurs.map(function(nom){
    return `<div class="player-tag">
      ${nom}
      <button onclick="removePlayer('${nom}')" title="Retirer">✕</button>
    </div>`;
  });
  container.innerHTML = htmlPastilles.join('');
  document.getElementById('btn-start').disabled = joueurs.length < 2;
}

// ════════════════════════════════════════════════════════════════
//  DÉMARRAGE
// ════════════════════════════════════════════════════════════════

function startGame(){
  if (joueurs.length < 2) return;
  if (getSoftPct() < 0) return; // incohérent
  indexJoueur = 0;
  document.getElementById('screen-setup').style.display = 'none';
  document.getElementById('screen-game').style.display = 'flex';
  nextTurn();
}

// ════════════════════════════════════════════════════════════════
//  UTILITAIRES
// ════════════════════════════════════════════════════════════════

function random(max){ return Math.floor(Math.random() * max); }

// ════════════════════════════════════════════════════════════════
//  TOUR SUIVANT
// ════════════════════════════════════════════════════════════════

// Couleurs de bordure par type
const BORDER_COLORS = {
  verite:     '#25eb39',   // vert
  action:     '#25eb39',   // vert (soft = même couleur que vérité)
  bois:       '#ca9a04',   // jaune
  spicy:      '#ff6b35',   // orange
  ultraspicy: '#8a1d1d',   // rouge-foncé (couleur uploadée)
};

function nextTurn(){
  const joueur = joueurs[indexJoueur];
  const tirage = random(100);

  // Zones cumulatives basées sur les variables réelles
  const soft = getSoftPct();
  const zoneSoft      = soft;
  const zoneBois      = zoneSoft  + pctBois;
  const zoneSpicy     = zoneBois  + pctSpicy;
  // zoneUltraSpicy = 100

  // Détermination du mode
  let mode;   // 'soft' | 'bois' | 'spicy' | 'ultraspicy'
  if      (tirage < zoneSoft)   mode = 'soft';
  else if (tirage < zoneBois)   mode = 'bois';
  else if (tirage < zoneSpicy)  mode = 'spicy';
  else                          mode = 'ultraspicy';

  // Détermination du sous-type (Vérité / Action) selon le mode
  let sousType = null;  // null pour bois
  let question;

  if (mode === 'bois'){
    question = 'Tu dois boire un verre !';
  } else if (mode === 'soft'){
    sousType = random(2) === 0 ? 'verite' : 'action';
    question = sousType === 'verite'
      ? veriteListe[random(veriteListe.length)]
      : actionListe[random(actionListe.length)];
  } else if (mode === 'spicy'){
    sousType = random(2) === 0 ? 'verite' : 'action';
    question = sousType === 'verite'
      ? veriteSpicyListe[random(veriteSpicyListe.length)]
      : actionSpicyListe[random(actionSpicyListe.length)];
  } else { // ultraspicy
    sousType = random(2) === 0 ? 'verite' : 'action';
    question = sousType === 'verite'
      ? veriteUltraSpicyListe[random(veriteUltraSpicyListe.length)]
      : actionUltraSpicyListe[random(actionUltraSpicyListe.length)];
  }

  // ── Badge label : "Vérité — Soft" / "Action — Spicy" / "Bois" ──
  let badgeLabel;
  if (mode === 'bois'){
    badgeLabel = 'Bois';
  } else {
    const sousLabel = sousType === 'verite' ? 'Vérité' : 'Action';
    const modeLabel = mode === 'soft' ? 'Soft' : mode === 'spicy' ? 'Spicy' : 'Ultra Spicy';
    badgeLabel = sousLabel + ' — ' + modeLabel;
  }

  // ── Classe CSS du badge (basée sur le sous-type ou bois) ──
  // Pour la couleur du badge on utilise le sous-type quand applicable
  let badgeClass;
  if (mode === 'bois'){
    badgeClass = 'bois';
  } else if (mode === 'soft'){
    badgeClass = sousType; // 'verite' ou 'action'
  } else if (mode === 'spicy'){
    badgeClass = sousType === 'verite' ? 'verite-spicy' : 'action-spicy';
  } else {
    badgeClass = sousType === 'verite' ? 'verite-ultra' : 'action-ultra';
  }

  // ── Couleur de bordure de la carte ──
  let borderColor;
  if (mode === 'bois')       borderColor = BORDER_COLORS.bois;
  else if (mode === 'soft')  borderColor = sousType === 'verite' ? BORDER_COLORS.verite : BORDER_COLORS.action;
  else if (mode === 'spicy') borderColor = BORDER_COLORS.spicy;
  else                       borderColor = BORDER_COLORS.ultraspicy;

  // ── Mise à jour UI ──────────────────────────────────────────
  document.getElementById('current-player').textContent = joueur;
  document.getElementById('question-text').textContent = question;

  const badge = document.getElementById('type-badge');
  const card  = document.querySelector('.question-card');

  badge.className  = 'type-badge ' + badgeClass;
  badge.textContent = badgeLabel;
  card.style.borderColor = borderColor;

  indexJoueur = (indexJoueur + 1) % joueurs.length;
  renderPlayersRow();
}

// ════════════════════════════════════════════════════════════════
//  JOUEURS ACTIFS (bas de l'écran jeu)
// ════════════════════════════════════════════════════════════════

function renderPlayersRow(){
  const actif = (indexJoueur - 1 + joueurs.length) % joueurs.length;
  const container = document.getElementById('players-row');
  container.innerHTML = joueurs.map(function(nom, i){
    const classeActive = (i === actif) ? 'active' : '';
    return `<span class="player-chip ${classeActive}">${nom}</span>`;
  }).join('');
}

// ════════════════════════════════════════════════════════════════
//  QUITTER — ne reset PAS les pourcentages, juste les joueurs
// ════════════════════════════════════════════════════════════════

function quitGame(){
  document.getElementById('screen-game').style.display = 'none';
  document.getElementById('screen-setup').style.display = 'flex';
  joueurs = [];
  renderPlayerList();
  // On re-synchronise l'affichage des % (inchangés) au cas où
  renderSetupPcts();
}

// Init affichage au chargement
renderSetupPcts();
