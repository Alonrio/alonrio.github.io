const CG = document.getElementById("CG");
const Maquette = document.getElementById("Maquette");

const V1 = document.getElementById("V1");
const V2 = document.getElementById("V2");
const V3 = document.getElementById("V3");

const NoMention = document.getElementById("NoMention");

const Lot1 = document.getElementById("Lot1");
const Lot2 = document.getElementById("Lot2");

const E1 = document.getElementById("E1")
const E2 = document.getElementById("E2")
const E3 = document.getElementById("E3")

const total = document.getElementById("total");


// ================================
// LOT 1
// ================================

// Si Charte + Maquette sont cochées,
// le Lot 1 se coche automatiquement.

function verifierLot1(){
    if(CG.checked && Maquette.checked && !Lot2.checked){
        Lot1.checked = true;
    }else{
        Lot1.checked = false;
    }
}
// Si on coche le Lot 1,
// on coche automatiquement les deux options.
Lot1.addEventListener("change", function (){
    if (Lot1.checked) {
        CG.checked = true;
        Maquette.checked = true;
    }else{
        CG.checked = false;
        Maquette.checked = false;
    }
    calculerTotal();
});

Lot2.addEventListener("change", function (){
    if (Lot2.checked) {
        Lot1.checked = true;
        CG.checked = true;
        Maquette.checked = true;
    } else {

        Lot1.checked = false;
        CG.checked = false;
        Maquette.checked = false;
    }
    calculerTotal();

});
// Quand on change Charte graphique
CG.addEventListener("change", function (){
    verifierLot1();
    calculerTotal();
});
// Quand on change Maquette
Maquette.addEventListener("change", function (){
    verifierLot1();
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