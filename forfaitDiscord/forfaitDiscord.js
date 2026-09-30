const B1 = document.getElementById("B1");
const B2 = document.getElementById("B2");
const B3 = document.getElementById("B3");
const B4 = document.getElementById("B4");

const NoMention = document.getElementById("NoMention");
const NoMention2 = document.getElementById("NoMention2");

const Server = document.getElementById("Server");

const Lot1 = document.getElementById("Lot1");
const Lot2 = document.getElementById("Lot2");
const Lot3 = document.getElementById("Lot3");

const A1 = document.getElementById("A1");
const A2 = document.getElementById("A2");
const A3 = document.getElementById("A3");

const S1 = document.getElementById("S1");
const S2 = document.getElementById("S2");

const total = document.getElementById("total");


// ================================
// LOT 1
// ================================

// Si Charte + Maquette sont cochées,
// le Lot 1 se coche automatiquement.

function verifierLot1(){
    if(B1.checked && Server.checked && !Lot2.checked && !Lot3.checked){
        Lot1.checked = true;
    }else{
        Lot1.checked = false;
    }
}
function verifierLot2(){
    if(B2.checked && Server.checked && !Lot1.checked && !Lot3.checked){
        Lot2.checked = true;
    }else{
        Lot2.checked = false;
    }
}
function verifierLot3(){
    if(B3.checked && Server.checked && !Lot1.checked && !Lot2.checked){
        Lot3.checked = true;
    }else{
        Lot3.checked = false;
    }
}


// Si on coche le Lot 1,
// on coche automatiquement les deux options.
Lot1.addEventListener("change", function (){
    if (Lot1.checked) {
        Server.checked = true;
        B2.checked = true;
        Lot2.checked = false;
        Lot3.checked = false;
    }else{
        Server.checked = false;
        B1.checked = false;
    }
    calculerTotal();
});
Lot2.addEventListener("change", function (){
    if (Lot1.checked) {
        Server.checked = true;
        B2.checked = true;
        Lot1.checked = false;
        Lot3.checked = false;
    }else{
        Server.checked = false;
        B2.checked = false;
    }
    calculerTotal();
});
Lot3.addEventListener("change", function (){
    if (Lot1.checked) {
        Server.checked = true;
        B1.checked = true;
        Lot1.checked = false;
        Lot2.checked = false;
    }else{
        Server.checked = false;
        B3.checked = false;
    }
    calculerTotal();
});

// Quand on change un Bot
B1.addEventListener("change", function (){
    verifierLot1();
    calculerTotal();
});
B2.addEventListener("change", function (){
    verifierLot2();
    calculerTotal();
});
B3.addEventListener("change", function (){
    verifierLot3();
    calculerTotal();
});
// Quand on change Server
Server.addEventListener("change", function (){
    verifierLot1();
    verifierLot2();
    verifierLot3();
    calculerTotal();
});


// ================================
// CALCUL DU PRIX
// ================================

function calculerTotal(){

    let prix = 0;

    // LOTS / WEB DESIGN
    if (Lot2.checked) {
        // Lot 2 = Web Design + Création Web
        // Le Web Design coûte seulement 100€
        prix += 100;
    } else if (Lot1.checked){
        // Lot 1 = Charte + Maquette
        prix += 125;
    }else{
        if (CG.checked){
            prix += 50;
        }
        if (Maquette.checked){
            prix += 100;
        }
    }

    // DÉVELOPPEMENT WEB
    if (V1.checked) {
        prix += 200;
    }
    if (V2.checked) {
        prix += 300;
    }
    // RETRAIT DE LA MENTION
    if (NoMention.checked) {
        prix += 200;
    }
    // AFFICHAGE
    total.textContent = prix;
}

// Event Listener
V1.addEventListener("change", calculerTotal);
V2.addEventListener("change", calculerTotal);
V3.addEventListener("change", calculerTotal);
NoMention.addEventListener("change", calculerTotal);

// CALCUL INITIAL

calculerTotal();

document.getElementById("ContactForm").addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    let options = "";

if (CG.checked){
    options += "Charte Graphique : 50€\n";
}

if (Maquette.checked){
    options += "Maquette : 100€\n";
}

if (V1.checked){
    options += "Site vitrine 1 à 3 pages : 200€\n";
}

if (V2.checked){
    options += "Site vitrine 3 à 6 pages : 300€\n";
}

if (V3.checked){
    options += "Création plus personnalisée : prix à définir\n";
}

if (NoMention.checked){
    options += "Retrait de la mention Alonrio : 200€\n";
}

if (Lot1.checked){
    options += "Lot 1 - Charte Graphique + Maquette : 125€\n";
}

if (Lot2.checked){
    options += "Lot 2 - Web Design + Création Web : 100€\n";
}

if (E1.checked){
    options += "Abonnement Entretiens réguliers mineures\n";
}
if (E2.checked){
    options += "Abonnement Entretiens réguliers majeures\n";
}
if (E3.checked){
   options += "Sans abonnement les entretiens couterons 10€/h de travaux\n";
}

    const destinataire = "pierre.alain.wester@alonrio.fr";
    const corps =
    "Nom : " + name + "\n" +
    "Email : " + email + "\n\n" +
    "Options sélectionnées :\n" +
    options +
    "\nTotal : " + total.textContent + "€\n\n" +
    "Message :\n" +
    message;
    const lien =
        "mailto:" + destinataire +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(corps);

    window.location.href = lien;
});