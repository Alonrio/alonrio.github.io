
const Selection1 = document.getElementById("Selection1");
const Selection2 = document.getElementById("Selection2");
const Selection3 = document.getElementById("Selection3");
const Selection4 = document.getElementById("Selection4");
const Selection5 = document.getElementById("Selection5");
const Selection6 = document.getElementById("Selection6");

const Formulaire = document.getElementById("ContactForm");
const Message = document.getElementById("message");


function scroll(nombre){
    if(nombre == 1){Message.value = "<------------------------ Développement Bot ----------------------->\n\n Forfait ALPHA Prix : 24.99€\n\n<---------------------------- Message ------------------------------>\n\n";}
    if(nombre == 2){Message.value = "<------------------------ Développement Bot ----------------------->\n\n Forfait BETA Prix : 49.99€\n\n<---------------------------- Message ------------------------------>\n\n";}
    if(nombre == 3){Message.value = "<------------------------ Développement Bot ----------------------->\n\n Forfait OMEGA Prix : 99.99€\n\n<---------------------------- Message ------------------------------>\n\n";}

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

    const destinataire = "pierre.alain.wester@alonrio.fr";

    const corps =
        "Nom : " + name + "\n" +
        "Email : " + email + "\n\n" +
        "Options sélectionnées :\n" +
        options +
        "\nTotal : " + total.textContent + "€\n\n" +
        "Message :\n" +
        Message;

    const lien =
        "mailto:" + destinataire +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(corps);

    window.location.href = lien;
});