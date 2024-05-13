function openMail() {
    var email = 'deine' + String.fromCharCode(64) + 'emailadresse.de';
    window.location.href = 'mailto:' + email;
}