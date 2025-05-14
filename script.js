const formulario = document.querySelector('#formulario');
const formularioBotao = document.querySelector('#form-botao');

function submit (event) {
    event.preventDefault();
    formulario.classname = 'apears';
    formulario.innerHTML = 'Obrigado!'
}

formularioBotao.addEventListener('submit', submit);
