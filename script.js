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
    squirtle.className = 'invisible';
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
const squirtle = document.getElementById('squirtle');
const volver = document.querySelector('.volver');
const combate = document.getElementById('combate');

// Listeners del drag and drop
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill.addEventListener('click', verDatos);
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Funciones drag and drop
function verDatos() {
    quitarDiv()
    squirtle.className += 'visible';
    audio2.play();
    setTimeout(verPokedex, 14000);
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
    audio.play();
}

//Local Storage del formulario

const btn = document.getElementById('button-blue');
const name = document.getElementById('name')
const email = document.getElementById('email')
const comment = document.getElementById("comment")
btn.addEventListener('click', guardarFormulario);

function guardarFormulario(event) {

    const datosFormulario = {
        name: name.value,
        email: email.value,
        comment: comment.value,
    }
    localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario))
    const msnExitoso = document.getElementById('msnExitoso');

    setTimeout(() => {
        verInicio();
        msnExitoso.remove();
    }, 3000);
    event.preventDefault();
    document.getElementById('form1').reset();
    msnExitoso.innerText = datosFormulario.name + ' tu mensaje ha sido enviado correctamente';
    msnExitoso.className += 'visible';
}