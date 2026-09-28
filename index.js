document.getElementById("ContactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const destinataire = "pierre.alain.wester@alonrio.fr";

    const corps =
        "Nom : " + name + "\n" +
        "Email : " + email + "\n\n" +
        "" + message;

    const lien =
        "mailto:" + destinataire +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(corps);

    window.location.href = lien;
});