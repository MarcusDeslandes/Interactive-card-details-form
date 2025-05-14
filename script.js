//manipulação do DOM ao preencher os dados

const formulario = document.querySelector('#formulario');
const formularioEnviado = document.querySelector('#form-enviado')
const formularioBotao = document.querySelector('#form-botao');

const nomeDoTitular = document.querySelector('#card-name');
const nomeInput = document.querySelector('#nome');

const numeroDoTitular = document.querySelector('#card-number');
const numeroInput = document.querySelector('#numero');

const dataCartao = document.querySelector('#card-date');
const dataMesInput = document.querySelector('#data-mes');
const dataAnoInput = document.querySelector('#data-ano');

const cvcCartao = document.querySelector('#card-cvc');
const cvcInput = document.querySelector('#cvc');

function submit (event) {
    formulario.style.display = 'none';
    formularioEnviado.style.display = 'block';

    nomeDoTitular.innerHTML = nomeInput.value;
    numeroDoTitular.innerHTML = numeroInput.value.match(/\d{1,4}/g).join(' ');

    dataCartao.innerHTML = `${dataMesInput.value}/${dataAnoInput.value}`

    cvcCartao.innerHTML = cvcInput.value;
}

formularioBotao.addEventListener('submit', submit);

function voltarAPaginaAnterior() {
    formulario.preventDefault();
    window.history.back(); // Volta para a página anterior do histórico
}