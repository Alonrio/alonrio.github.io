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



function scroll(nombre){
    if(nombre == 1){Message.value = "<------------------------ Développement WEB ----------------------->\n\n Forfait ALPHA Prix : 24.99€\n\n<---------------------------- Message ------------------------------>\n\n";}
    if(nombre == 2){Message.value = "<------------------------ Développement WEB----------------------->\n\n Forfait BETA Prix : 49.99€\n\n<---------------------------- Message ------------------------------>\n\n";}
    if(nombre == 3){Message.value = "<------------------------ Développement WEB ----------------------->\n\n Forfait OMEGA Prix : 99.99€\n\n<---------------------------- Message ------------------------------>\n\n";}

    if(nombre == 4){Message.value = "<--------------------------- Hébergement -------------------------->\n\n Forfait Small Prix : 2.99€/mois\n\n<---------------------------- Message ------------------------------>\n\n";}
    if(nombre == 5){Message.value = "<--------------------------- Hébergement -------------------------->\n\n Forfait Medium Prix : 3.99€/mois\n\n<---------------------------- Message ------------------------------>\n\n";}
    if(nombre == 6){Message.value = "<--------------------------- Hébergement -------------------------->\n\n Forfait Big Prix : 4.99€/mois\n\n<---------------------------- Message ------------------------------>\n\n";}
    
    Formulaire.scrollIntoView({behavior: "smooth"});
};



Selection1.addEventListener("click", () => scroll(1));
Selection2.addEventListener("click", () => scroll(2));
Selection3.addEventListener("click", () => scroll(3));
Selection4.addEventListener("click", () => scroll(4));
Selection5.addEventListener("click", () => scroll(5));
Selection6.addEventListener("click", () => scroll(6));

// FORMULAIRE

document.getElementById("ContactForm").addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    let options = "";

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