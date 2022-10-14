let btnLogin = document.getElementById('btn');
let email = document.getElementById('email');
let senha = document.getElementById('password');
let concorda = document.getElementById('agreement');
let btnForm = document.getElementById('submit-btn');

function login(){
    if(email.value === 'tryber@teste.com' && senha.value === '123456'){
        alert('Olá, Tryber!');
    }
        else {
            alert('Email ou senha inválidos.');
        }
}

btnLogin.addEventListener('click', login);

function testeCheck(){
    if(concorda.checked == true){
        btnForm.disabled = false;
    }
    else{
        btnForm.disabled = true;
    }
}

concorda.addEventListener('click', testeCheck);