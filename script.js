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

//drag and drop

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
const imagen = document.createElement('img');
const imagen2 = document.createElement('img');
const poke = document.querySelector('.poke');
imagen.setAttribute('src', 'imagenes/pokeballabierta.png');
imagen2.setAttribute('src', 'imagenes/charizard.png');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
    empty.addEventListener('drop', dragDrop2);
}

// Drag Functions

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
    this.className = 'empty';
    this.append(imagen);

}

function dragDrop2() {
    this.className = 'poke';
    this.append(imagen2);

}