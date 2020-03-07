const pokemons = [{
        nombre: 'charizard',
        caracteristicas: {
            hp: 200,
            defensa: 10,
        }
    },
    {
        nombre: 'Squirtle',
        caracteristicas: {
            hp: 200,
            defensa: 30,
        }
    }
]

let enemigo = pokemons[0];
let entrenador = pokemons[1];


ataques = [{
        nombre: 'placaje',
        potencia: 30,
    },
    {
        nombre: 'lanzallamas',
        potencia: 60,
    },
    {
        nombre: 'burbuja',
        potencia: 100,
    }

]

const placaje = document.getElementById('placaje');
const burbuja = document.getElementById('burbuja');
const vidaEnemigo = document.getElementById('vidaEnemigo');
const vidaEnemigoDiv = document.getElementById('vidaEnemigoDiv');
const vidaEntrenador = document.getElementById('vidaEntrenador');
const vidaEntrenadorDiv = document.getElementById('vidaEntrenadorDiv');
let squirtle3 = document.getElementById('squirtle3');
let sinfondo = document.getElementById('sinfondo');
let charizard = document.getElementById('charizard');
let audio = document.getElementById("audio");
const dialogo = document.querySelector('.dialogo');

vidaEnemigo.innerText = enemigo.caracteristicas.hp
vidaEntrenador.innerText = entrenador.caracteristicas.hp

placaje.addEventListener('click', entrenadorAtaca);
burbuja.addEventListener('click', entrenadorAtaca2);


function atacar(ataque, pokemonAtaca, pokemonRecibe, isEnemy) {
    pokemonRecibe.caracteristicas.hp = pokemonRecibe.caracteristicas.hp - (ataque.potencia - pokemonRecibe.caracteristicas.defensa)
    dialogo.innerText = pokemonAtaca.nombre + ' ha utilizado ' + ataque.nombre
    setTimeout(() => {
        dialogo.innerText = 'Selecciona ataque'
    }, 6000);
    if (!isEnemy) { // Ataca el entrenador, el que recibe el ataque es el pokémon enemigo
        if (pokemonRecibe.caracteristicas.hp <= 0) {
            pokemonRecibe.caracteristicas.hp = 0
            pokemonRecibe.caracteristicas.hp <= 0
            console.log('Has ganado, el pokemon ' + pokemonRecibe.nombre + ' ha sido debilitado ..!')
            return
        }
        if (pokemonRecibe.caracteristicas.hp <= 100 & pokemonRecibe.caracteristicas.hp > 40) {
            vidaEnemigoDiv.style.backgroundColor = 'yellow'
        } else if (pokemonRecibe.caracteristicas.hp <= 40) {
            vidaEnemigoDiv.style.backgroundColor = 'red'
            vidaEnemigo.style.color = 'white'
        }
        vidaEnemigo.innerHTML = pokemonRecibe.caracteristicas.hp
        vidaEnemigoDiv.style.width = pokemonRecibe.caracteristicas.hp * 3 / 2 + 'px' //calculo de tamaño barra

        setTimeout(enemigoAtaca, 2000);
        setTimeout(cambiarCharizard, 4000);
        setTimeout(cambiarCharizard2, 6000);
    } else { // Ataca el enemigo, el que recibe el ataque es el pokémon del entrenador
        if (pokemonRecibe.caracteristicas.hp <= 0) {
            pokemonRecibe.caracteristicas.hp = 0
            console.log('Has perdido, tu pokemon ' + pokemonRecibe.nombre + ' ha sido debilitado ..!')
            return
        }
        if (pokemonRecibe.caracteristicas.hp <= 100 & pokemonRecibe.caracteristicas.hp > 40) {
            vidaEntrenadorDiv.style.backgroundColor = 'yellow'
        } else if (pokemonRecibe.caracteristicas.hp <= 40) {
            vidaEntrenadorDiv.style.backgroundColor = 'red'
            vidaEntrenador.style.color = 'white'
        }
        vidaEntrenador.innerHTML = pokemonRecibe.caracteristicas.hp
        vidaEntrenadorDiv.style.width = pokemonRecibe.caracteristicas.hp * 3 / 2 + 'px' //calculo de tamaño barra
    }
}

function enemigoAtaca() {
    console.log('enemigoAtaca')
    let ataque = {}
    for (x = 0; x < ataques.length; x++) {
        if (ataques[x].nombre === 'lanzallamas') {
            ataque = ataques[x]
        }
    }

    atacar(ataque, enemigo, entrenador, true)
}



function entrenadorAtaca() {
    console.log('entrenadorAtaca')

    let ataque = {}
    for (x = 0; x < ataques.length; x++) {
        if (ataques[x].nombre === 'placaje') {
            ataque = ataques[x]

        }
    }
    cambiarImagenJS()
    setTimeout(cambiarImagenJS2, 2000);
    atacar(ataque, entrenador, enemigo, false)
}

function entrenadorAtaca2() {
    console.log('entrenadorAtaca')

    for (x = 0; x < ataques.length; x++) {
        if (ataques[x].nombre === 'burbuja') {
            ataque = ataques[x]

        }

    }
    cambiarImagenJS()
    setTimeout(cambiarImagenJS2, 2000);
    cambiarBurbuja()
    setTimeout(cambiarBurbuja2, 2000);
    atacar(ataque, entrenador, enemigo, false)
}

function vida() {

    for (x = 0; x < pokemons.length; x++) {
        if (pokemons[x].caracteristicas.hp <= 0) {
            console.log('enhorabuena');
        }
    }

}

function cambiarImagenJS() {
    squirtle3.src = 'imagenes/squirtle2.gif';
}

function cambiarBurbuja() {
    sinfondo.style.display = 'block';
}

function cambiarImagenJS2() {
    squirtle3.src = 'imagenes/squirtle.gif';
}

function cambiarBurbuja2() {
    sinfondo.style.display = 'none';
}

function cambiarCharizard() {
    charizard.src = 'imagenes/charizard4.gif';
    charizard.style.height = '170px';
    charizard.style.width = '170px';
}

function cambiarCharizard2() {
    charizard.src = 'imagenes/charizard3.gif';
    charizard.style.height = '170px';
    charizard.style.width = '170px';
}