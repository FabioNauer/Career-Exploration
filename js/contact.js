document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Standardformularaktion verhindern
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // Ersetze "deine@emailadresse.de" durch deine echte E-Mail-Adresse
    var emailAddress = 'your@emailaddress.com';

    // Verschlüsselte E-Mail-Adresse erzeugen und Link öffnen
    var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);
    window.location.href = mailtoLink;
});
