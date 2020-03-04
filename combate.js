const squirtle2 = document.createElement('img');
squirtle2.setAttribute('src', 'imagenes/squirtleestatico.gif');
const pokemons = [{
        nombre: 'charizard',
        caracteristicas: {
            hp: 200,
            defensa: 10,
        }
    },
    {
        nombre: 'pokemon',
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

document.querySelector('.entrenador').innerHTML = `  <p></p>
    <div>VidaEntrenador(pokemon)
        <p id="vidaEntrenador"></p>
    </div>
    <img src="imagenes/squirtleestatico.gif" alt="">
    <p id="placaje">Placaje</p>`
document.querySelector('.enemigo').innerHTML = `   <p></p>
    <div>Vida enemigo(Charizard)
        <p id="vidaEnemigo"></p>
        <img src="imagenes/charizard.gif" alt="">
    </div>
    <p id="lanzallamas">Lanzallamas</p>
</div>`
const placaje = document.getElementById('placaje');
const vidaEnemigo = document.getElementById('vidaEnemigo');
const vidaEntrenador = document.getElementById('vidaEntrenador');
vidaEnemigo.innerText = enemigo.caracteristicas.hp
vidaEntrenador.innerText = entrenador.caracteristicas.hp
placaje.addEventListener('click', entrenadorAtaca);



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

        }
    }


    atacar(ataque, entrenador, enemigo, false)

}
//bueno pues muestrame