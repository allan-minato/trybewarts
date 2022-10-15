const btnLogin = document.getElementById('btn');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const concorda = document.getElementById('agreement');
const btnForm = document.getElementById('submit-btn');
const count = document.getElementById('counter');
const textArea = document.getElementById('textarea');

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
    btnForm.style.backgroundColor = 'rgb(88, 31, 153)';
  } else {
    btnForm.disabled = true;
    btnForm.style.backgroundColor = 'grey';
  }
}

concorda.addEventListener('click', testeCheck);

count.innerHTML = 500;
function contador(event) {
  count.innerHTML = 500;
  count.innerHTML -= event.target.value.length;
}
textArea.addEventListener('keyup', contador);
