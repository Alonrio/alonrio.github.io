const CG = document.getElementById("CG");
const Maquette = document.getElementById("Maquette");

const V1 = document.getElementById("V1");
const V2 = document.getElementById("V2");
const V3 = document.getElementById("V3");

const NoMention = document.getElementById("NoMention");

const Lot1 = document.getElementById("Lot1");
const Lot2 = document.getElementById("Lot2");

const E1 = document.getElementById("E1");
const E2 = document.getElementById("E2");
const E3 = document.getElementById("E3");

const ResponsivePhone = document.getElementById("ResponsivePhone");
const ResponsiveTablat = document.getElementById("ResponsiveTablat");

const total = document.getElementById("total");


// LOT LOGIC

function verifierLot1(){
    if(CG.checked && Maquette.checked && !Lot2.checked){
        Lot1.checked = true;
    }else{
        Lot1.checked = false;
    }
}


Lot1.addEventListener("change", function (){
    if(Lot1.checked){
        Lot2.checked = false;

        CG.checked = true;
        Maquette.checked = true;
    }else{
        CG.checked = false;
        Maquette.checked = false;
    }

    calculerTotal();
});


Lot2.addEventListener("change", function (){
    if(Lot2.checked){
        Lot1.checked = false;

        CG.checked = true;
        Maquette.checked = true;
    }else{
        Lot1.checked = false;
        CG.checked = false;
        Maquette.checked = false;
    }

    calculerTotal();
});


CG.addEventListener("change", function (){
    verifierLot1();
    calculerTotal();
});


Maquette.addEventListener("change", function (){
    verifierLot1();
    calculerTotal();
});


// DEVELOPMENT

V1.addEventListener("change", function (){
    if(V1.checked){
        V2.checked = false;
        V3.checked = false;
    }

    calculerTotal();
});


V2.addEventListener("change", function (){
    if(V2.checked){
        V1.checked = false;
        V3.checked = false;
    }

    calculerTotal();
});


V3.addEventListener("change", function (){
    if(V3.checked){
        V1.checked = false;
        V2.checked = false;
    }

    calculerTotal();
});


// AUTRES OPTIONS

NoMention.addEventListener("change", calculerTotal);

ResponsivePhone.addEventListener("change", calculerTotal);

ResponsiveTablat.addEventListener("change", calculerTotal);


// ABONNEMENTS

E1.addEventListener("change", function (){
    if(E1.checked){
        E2.checked = false;
        E3.checked = false;
    }
});


E2.addEventListener("change", function (){
    if(E2.checked){
        E1.checked = false;
        E3.checked = false;
    }
});


E3.addEventListener("change", function (){
    if(E3.checked){
        E1.checked = false;
        E2.checked = false;
    }
});


// PRIX

function calculerTotal(){

    let prix = 0;

    if(Lot2.checked){
        prix += 100;
    }else if(Lot1.checked){
        prix += 125;
    }else{
        if(CG.checked){
            prix += 50;
        }

        if(Maquette.checked){
            prix += 100;
        }
    }


    if(V1.checked){
        prix += 200;
    }

    if(V2.checked){
        prix += 300;
    }


    if(NoMention.checked){
        prix += 200;
    }


    total.textContent = prix;
}


// CALCUL INITIAL

calculerTotal();


// FORMULAIRE

document.getElementById("ContactForm").addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    let options = "";


    if(CG.checked || Maquette.checked){
        options += "<---------------------------- Web Design ---------------------------->\n";
    }

    if(CG.checked){
        options += "Charte Graphique : 50€\n";
    }

    if(Maquette.checked){
        options += "Maquette : 100€\n";
    }


    if(V1.checked || V2.checked || V3.checked){
        options += "<------------------------- Développement --------------------------->\n";
    }

    if(V1.checked){
        options += "Site vitrine 1 à 3 pages : 200€\n";
    }

    if(V2.checked){
        options += "Site vitrine 3 à 6 pages : 300€\n";
    }

    if(V3.checked){
        options += "Création plus personnalisée : prix à définir\n";
    }


    if(ResponsivePhone.checked || ResponsiveTablat.checked){
        options += "<-------------------------- Responsive ---------------------------->\n";
    }

    if(ResponsivePhone.checked){
        options += "Responsive Téléphone : 50€/page\n";
    }

    if(ResponsiveTablat.checked){
        options += "Responsive Tablette : 50€/page\n";
    }


    if(NoMention.checked){
        options += "<-------------------- Supprimer / Sans mention --------------------->\n";
        options += "Retrait de la mention Alonrio : 200€\n";
    }


    if(Lot1.checked || Lot2.checked){
        options += "<------------------------------- Lot ------------------------------->\n";
    }

    if(Lot1.checked){
        options += "Lot 1 - Charte Graphique + Maquette : 125€\n";
    }

    if(Lot2.checked){
        options += "Lot 2 - Web Design + Création Web : 100€ + forfait Web\n";
    }


    if(E1.checked || E2.checked || E3.checked){
        options += "<--------------------------- Abonnement --------------------------->\n";
    }

    if(E1.checked){
        options += "Abonnement Entretiens réguliers mineures : 2€ 1er mois puis 5€/mois\n";
    }

    if(E2.checked){
        options += "Abonnement Entretiens réguliers majeures : 5€ 1er mois puis 10€/mois\n";
    }

    if(E3.checked){
        options += "Sans abonnement : entretiens à 10€/h\n";
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