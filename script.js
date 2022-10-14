const btnLogin = document.getElementById('btn');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const concorda = document.getElementById('agreement');
const btnForm = document.getElementById('submit-btn');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', login);

function testeCheck() {
  if (concorda.checked) {
    btnForm.disabled = false;
  } else {
    btnForm.disabled = true;
  }
}

concorda.addEventListener('click', testeCheck);
