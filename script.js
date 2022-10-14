let btnLogin = document.getElementById('btn');
let email = document.getElementById('email');
let senha = document.getElementById('password');

function login(){
    if(email.value === 'tryber@teste.com' && senha.value === '123456'){
        alert('Olá, Tryber!');
    }
        else {
            alert('Email ou senha inválidos.');
        }
}

btnLogin.addEventListener('click', login);