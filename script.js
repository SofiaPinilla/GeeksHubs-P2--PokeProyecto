const inicioJ = document.getElementById('inicioJavi');
const contactoJ = document.getElementById('contactoJavi');
const pokedexJ = document.getElementById('pokedexJavi');
const inicio = document.getElementById('inicio');
const contacto = document.getElementById('contacto');
const pokedex = document.getElementById('pokedex');

inicioJ.addEventListener('click', verInicio);
contactoJ.addEventListener('click', verContacto);
pokedexJ.addEventListener('click', verPokedex);

function quitarDiv() {
    inicio.className = 'invisible';
    contacto.className = 'invisible';
    pokedex.className = 'invisible'
}

function verInicio() {
    quitarDiv()
    inicio.className += 'visible';
}

function verContacto() {
    quitarDiv()
    contacto.className += 'visible';
}

function verPokedex() {
    quitarDiv()
    pokedex.className += 'visible';
}