
var clientName = document.getElementById('clientName');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var message = document.getElementById('message');
error.style.color = 'black';
success.style.color = 'black';

function enviarFormulario() {
        console.log("Enviando formulario....");
        var messageError = [];
        var messageSuccess = [];
        var ok = true;
        
        if(clientName.value == null || clientName.value === ''){
            messageError.push('Ingrese su nombre');
            ok = false;
        }
        if(email.value == null || email.value === ''){
            messageError.push('Ingrese su correo personal o ingrese un correo valido');
            ok = false;
        }
        if(subject.value == null || subject.value === ''){
            messageError.push('Ingrese el asunto');
            ok = false;
        }
        if(message.value == null || message.value === ''){
            messageError.push('Ingrese un mensaje');
            ok = false;
        }
        if(ok == false){
            error.innerHTML = messageError.join(', ');
        }if( ok == true){
            messageSuccess.push('Su mensaje se ha enviado correctamente');
            success.innerHTML = messageSuccess.join('.');
        }
};

