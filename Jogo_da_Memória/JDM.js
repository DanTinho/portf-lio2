const grid = document.querySelector('.grid');
const temporizador = document.querySelector('.temporizador');
const movimentos = document.querySelector('.movimentos');
const resetar = document.querySelector('.resetar');
const contador = document.querySelector('.contador');

const figuras = [
    'dama-ouros',
    'dama-espadas',
    'dama-copas',
    'dama-paus',
    'valete-ouros',
    'valete-espadas',
    'valete-copas',
    'valete-paus',
    'rei-ouros',
    'rei-espadas',
    'rei-copas',
    'rei-paus',
];

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function checkarFimDeJogo() {
    const cartasDesabilitadas = document.querySelectorAll('.desabilitar-carta');

    if (cartasDesabilitadas.length === 24) {
        clearInterval(this.loop);
        alert(`Parabéns!! Você precisou de ${movimentos.innerHTML} movimentos e de ${temporizador.innerHTML} segundos para completar o jogo!`);
        resetar.removeAttribute("hidden");
    }
}

let primeiraCarta = '';
let segundaCarta = '';

function checkCartas() {

    const primeiraFigura = primeiraCarta.getAttribute('data-figura');
    const segundaFigura = segundaCarta.getAttribute('data-figura');

    if (primeiraFigura === segundaFigura) {

        primeiraCarta.firstChild.classList.add('desabilitar-carta');
        segundaCarta.firstChild.classList.add('desabilitar-carta');

        primeiraCarta = '';
        segundaCarta = '';

        setTimeout(() => {
            checkarFimDeJogo();
        }, 500)


    } else {

        setTimeout(() => {
            primeiraCarta.classList.remove('revelar-carta');
            segundaCarta.classList.remove('revelar-carta');

            primeiraCarta = '';
            segundaCarta = '';
        }, 500);

    }
}

function revelarCarta({ target }) {

    if (target.parentNode.className.includes('revelar-carta')) {
        return;
    }

    if (primeiraCarta === '') {
        target.parentNode.classList.add('revelar-carta');
        primeiraCarta = target.parentNode;
    } else if (segundaCarta === '') {
        target.parentNode.classList.add('revelar-carta');
        segundaCarta = target.parentNode;

        checkCartas();
    }

}

function criarCarta(figura) {

    const carta = createElement('div', 'carta');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('cartas/${figura}.png')`;

    carta.appendChild(front);
    carta.appendChild(back);

    carta.addEventListener('click', revelarCarta);
    carta.addEventListener('click', contarMovimentos);
    carta.setAttribute('data-figura', figura);

    return carta;
}

function carregarJogo() {

    const duplicarFiguras = [ ...figuras, ...figuras ];

    const embaralhaCartas = duplicarFiguras.sort(() => Math.random() - 0.5);

    embaralhaCartas.forEach((figura) => {

        const carta = criarCarta(figura);
        grid.appendChild(carta);

    });
}

const contarTempo = () => {

    this.loop = setInterval(() => {
        const tempoAtual = +temporizador.innerHTML;
        temporizador.innerHTML = tempoAtual + 1;
    }, 1000);
}

let value = 0;

function contarMovimentos() {
    value++;
    movimentos.innerHTML = +value;
}

function resetarJogo() {
    window.location.reload()
}

function comecarJogo() {
    contarTempo();
    carregarJogo();
    document.getElementById('botao').style.visibility = 'hidden';
    contador.removeAttribute("hidden");
}