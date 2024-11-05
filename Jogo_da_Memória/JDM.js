const grid = document.querySelector('.grid');

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

function criarCarta(figura) {

    const carta = createElement('div', 'carta');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('cartas/${figura}.png')`;

    carta.appendChild(front);
    carta.appendChild(back);

    return carta;
}

function carregarJogo() {

    figuras.forEach((figura) => {

        const carta = criarCarta(figura);
        grid.appendChild(carta);

    });
}

carregarJogo();
