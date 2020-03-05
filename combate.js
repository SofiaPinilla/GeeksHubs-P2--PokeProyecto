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
        potencia: 50,
    },
    {
        nombre: 'lanzallamas',
        potencia: 60,
    }

]

// document.querySelector('.entrenador').innerHTML = `    `
document.querySelector('.enemigo').innerHTML = `   <p></p>
    <div class="vida">Vida enemigo(Charizard)
        <p id="vidaEnemigo"></p>
      
        </div>
        <img src="imagenes/charizard.gif" alt="">
    <p id="lanzallamas">Lanzallamas</p>
`

const placaje = document.getElementById('placaje');
const vidaEnemigo = document.getElementById('vidaEnemigo');
const vidaEntrenador = document.getElementById('vidaEntrenador');
let squirtle3 = document.getElementById('squirtle3');
// let squirtle2 = document.createElement('img');
// squirtle2.setAttribute('src', 'imagenes/squirtledelado.gif');
vidaEnemigo.innerText = enemigo.caracteristicas.hp
vidaEntrenador.innerText = entrenador.caracteristicas.hp
placaje.addEventListener('click', entrenadorAtaca);
// placaje.addEventListener('click', cambiarImagenJS);




function atacar(ataque, pokemonAtaca, pokemonRecibe, isEnemy) {
    pokemonRecibe.caracteristicas.hp = pokemonRecibe.caracteristicas.hp - (ataque.potencia - pokemonRecibe.caracteristicas.defensa)

    alert(pokemonAtaca.nombre + ' ha utilizado ' + ataque.nombre)
    if (!isEnemy) {
        vidaEnemigo.innerHTML = pokemonRecibe.caracteristicas.hp
        enemigoAtaca()
    } else {
        vidaEntrenador.innerHTML = pokemonRecibe.caracteristicas.hp
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
            squirtle3.src = 'imagenes/squirtledelado.gif';
        }
    }

    atacar(ataque, squirtle, entrenador, enemigo, false)

}


// function cambiarImagenJS() {
//     squirtle3.src = 'imagenes/squirtledelado.gif';
// }
// function changeImage() {
//     let squirtle = document.getElementById('squirtle');
//     if (squirtle.scroll.match("delado")) {
//         squirtle.src = "imagenes/squirtleestatico.gif";
//     } else {
//         squirtle.src = "imagenes/squirtledelado.gif";
//     }
// }

// <h1>JavaScript puede cambiar imágenes</h1>
// <img id="myImage" onclick="changeImage()" src="bombillaoff.gif" width="100" height="180">
// <p>Click en la bombilla para encenderla/apagarla.</p>
// <script>
// function changeImage() {
//     var image = document.getElementById('myImage');
//     if (image.src.match("on")) {
//         image.src = "bombillaoff.gif";
//     } else {
//         image.src = "bombillaon.gif";
//     }
// }
// </script>