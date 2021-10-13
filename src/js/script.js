// Listen for a submit
//document.querySelector(".contactForm").addEventListener("submit", submitForm);


    

//const botaoForm = document.getElementById("botaoForm");
//botaoForm.addEventListener("click", pegarDados);


function pegarDados(){
    //Get input Values
    let nome = document.getElementById("nome");
    let name = nome.value;
    let fone = document.getElementById("whatsapp");
    let whatsapp = fone.value;
    let correio = document.getElementById("email");
    let correioEmail = correio.value;
    let subject = document.getElementById("assunto");
    let assunto = subject.value;
    let message = document.getElementById("mensagem");
    let mensagem = message.value;

    console.log(name, whatsapp, correioEmail, assunto, mensagem);


    sendEmail(name, whatsapp, correioEmail, assunto, mensagem);
}



//Send email Info
function sendEmail(name, whatsapp, email, assunto, mensagem) {
    email.send({
        Host : "smtp.google.com",
        Username : "dgleysilva@gmail.com",
        Password : "Edg141512",
        To : "dgleysilva@gmail.com",
        From: "dgleysilva@gmail.com",
        Subject: `${name} - ${assunto}`,
        Body: `Nome: ${name} <br> Email: ${email} <br> WhatsApp: ${whatsapp} <br> Assunto: ${assunto} <br> Mensagem ${mensagem}`
    }).then((message) => alert("E-mail enviado com sucesso!"));
}