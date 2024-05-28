document.querySelector('#email-link').addEventListener('click', function (e) {
    e.preventDefault();
    var subject = document.getElementById("subject").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    message = message + '\n\n來自：' + name + '\n連絡電話：' + phone;
    buildMailto('kakitaan2020@gmail.com', subject, 'kakitaan2020@gmail.com', message);
});

function buildMailto(recipient, subject, cc, body) {
    var mailLink = "mailto:" + recipient + "?";
    mailLink += "subject=" + subject + "&";
    mailLink += "cc=" + "&";
    mailLink += "body="
    mailLink += encodeURIComponent(body);
    window.location.href = mailLink;
}