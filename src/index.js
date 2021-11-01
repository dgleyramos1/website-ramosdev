const nodemailer = require('nodemailer');

const SMTP_CONFIG = require('./config/smtp');


const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false
    },
});

document.getElementById("button-send").addEventListener('click', run())


function run() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let mensagem = document.getElementById("message").value

    const mailSent = transporter.sendMail({
        subject: subject,
        from: 'RamosDev <rdgley@gmail.com>',
        replyTo: email,
        to: ['rdgley@gmail.com', 'dgleysilva@gmail.com'],
        html: `
            <html>
                <body>
                    <h1>Olá me chamo ${name}</h1>
                    <h3>Gostaria de conversar sobre ${subject}</h3>
                    <br/>
                    <br/>
                    <br/>
                    <p>${mensagem}</p>
                </body>
            </html>
        `
    });
    console.log(mailSent);
}
