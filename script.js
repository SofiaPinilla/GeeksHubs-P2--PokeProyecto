const inicioJ = document.getElementById('inicioJavi');
const contactoJ = document.getElementById('contactoJavi');
const pokedexJ = document.getElementById('pokedexJavi');
const inicio = document.getElementById('inicio');
const contacto = document.getElementById('contacto');
const pokedex = document.getElementById('pokedex');


inicioJ.addEventListener('click', verInicio);
contactoJ.addEventListener('click', verContacto);
pokedexJ.addEventListener('click', verPokedex);


//funciones del menunavegación

function quitarDiv() {
    inicio.className = 'invisible';
    contacto.className = 'invisible';
    pokedex.className = 'invisible';
    combate.className = 'invisible';
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



//drag and drop

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
const imagen = document.createElement('img');
const imagen2 = document.createElement('img');
const poke = document.querySelector('.poke');
const volver = document.querySelector('.volver');
const combate = document.getElementById('combate');
// imagen.setAttribute('src', 'imagenes/pokeabierta.png');
// imagen2.setAttribute('src', 'imagenes/charizard.png');

// Listeners del drag and drop
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill.addEventListener('click', verDatos);
volver.addEventListener('click', verPokedex);
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
    // empty.addEventListener('drop', dragDrop2);
}

// Funciones drag and drop
function verDatos() {
    quitarDiv()
    squirtle.className += 'visible';
}

function dragStart() {
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'empty';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    quitarDiv()
    combate.className += 'visible';
}