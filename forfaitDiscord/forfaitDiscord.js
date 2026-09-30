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

    // LOTS
    if(Lot1.checked){
        prix += 27;
    } else if(Lot2.checked){
        prix += 50;
    }else if(Lot3.checked){
        prix += 102;
    }

    // Dev Bot
    if (B1.checked) {
        prix += 25;
    }
    if (B2.checked) {
        prix += 50;
    }
    if (B3.checked) {
        prix += 100;
    }
    // RETRAIT DE LA MENTION
    if (NoMention.checked) {
        prix += 50;
    }
    if (NoMention2.checked) {
        prix += 10;
    }
    if (Server.checked) {
        prix += 5;
    }
    // AFFICHAGE
    total.textContent = prix;
}

// Event Listener
NoMention.addEventListener("change", calculerTotal);
NoMention2.addEventListener("change", calculerTotal);
A1.addEventListener("change", calculerTotal);
A2.addEventListener("change", calculerTotal);
A3.addEventListener("change", calculerTotal);
S1.addEventListener("change", calculerTotal);
S2.addEventListener("change", calculerTotal);
H1.addEventListener("change", calculerTotal);
H2.addEventListener("change", calculerTotal);
H3.addEventListener("change", calculerTotal);

// CALCUL INITIAL

calculerTotal();

document.getElementById("ContactForm").addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    let options = "";

if(B1.checked || B2.checked || B3.checked || B4.checked){
    options += "<------------------------------- Bot -------------------------------->"
}

if (B1.checked){
    options += "Bot : 25€\n";
}

if (B2.checked){
    options += "Bot : 50€\n";
}

if (B3.checked){
    options += "Bot : 100€\n";
}

if (B4.checked){
    options += "Bot : Forfait Personnaliser\n";
}

if(Server.checked){
    options += "<------------------------------ Server ----------------------------->"
}

if (Server.checked){
    options += "Server : 5€\n";
}

if(H1.checked || H2.checked || H3.checked){
    options += "<--------------------------- Hébergement -------------------------->"
}

if (H1.checked){
    options += "Hebergement : 2€/mois\n";
}
if (H2.checked){
    options += "Hebergement : 3€/mois\n";
}
if (H3.checked){
    options += "Hebergement : 5€/mois\n";
}

if(NoMention.checked || NoMention2.checked){
    options += "<-------------------- Supprimer / Sans mention --------------------->"
}

if (NoMention.checked){
    options += "Retrait de la mention Alonrio Bot : 50€\n";
}
if (NoMention2.checked){
    options += "Retrait de la mention Alonrio Server : 10€\n";
}

if(Lot1.checked || Lot2.checked || Lot3.checked ){
    options += "<------------------------------- Lot ------------------------------->"
}

if (Lot1.checked){
    options += "Lot 1 - Bot + Server : 27€\n";
}
if (Lot2.checked){
    options += "Lot 2 - Bot + Server : 52€\n";
}
if (Lot3.checked){
    options += "Lot 2 - Bot + Server : 102€\n";
}

if(A1.checked || A2.checked || A3.checked || S1.checked || S2.checked){
    options += "<--------------------------- Abonnement --------------------------->"
}

if (A1.checked){
    options += "Abonnement Entretiens Bot réguliers mineures 5€/mois\n";
}
if (A2.checked){
    options += "Abonnement Entretiens Bot réguliers majeures 5€ premier mois puis 7€/mois\n";
}
if (A3.checked){
    options += "Sans abonnement les entretiens Bot couterons 5€/h\n";
}
if (S1.checked){
    options += "Abonnement Entretiens Server réguliers : 2€/mois\n";
}
if (S2.checked){
   options += "Sans abonnement les entretiens server couterons 2€/h de travaux\n";
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