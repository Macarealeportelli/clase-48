const grilla = document.querySelector('.grilla')
const nuevoJuego = document.getElementById('nuevo-juego')
const reiniciarJuego = document.getElementById('reiniciar-juego')
const buscarMatches = document.getElementById('buscar-matches')


const bienvenida = alert('Bienvenid@')
let seleccionaDificultad = prompt('Seleccione una dificultad: facil, medio, dificil')


const frutas = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']
let grillaDeFrutas = []

//Generación de Grilla dependiendo la dificultad

const obtenerNumeroAlAzar = (items) => {
    return Math.floor((Math.random() * items.length))
}

const generarGrilla = (filas, columnas, items) => {

    const anchoDeGrilla = 50 * columnas
    grilla.style.width = `${anchoDeGrilla}px`

    grilla.innerHTML = ''

    for (let i = 0; i < filas; i++) {
        grillaDeFrutas[i] = []

        for (let j = 0; j < columnas; j++) {
            grillaDeFrutas[i][j] = items[obtenerNumeroAlAzar(items)]
            grilla.innerHTML += `<div data-x=${i} data-y=${j}>${grillaDeFrutas[i][j]}</div>`
        }

    }
    // return grillaDeFrutas


}

// console.log(generarGrilla(6, 6, frutas))

const mostrarGrilla = () => {

    if (seleccionaDificultad === 'facil') {
        generarGrilla(10, 10, frutas)
    }
    else if (seleccionaDificultad === 'medio') {
        generarGrilla(8, 8, frutas)
    }
    else if (seleccionaDificultad === 'dificil'){
        generarGrilla(6, 6, frutas)
    }
    else {
        alert('No seleccionaste una opción correcta :(')
    }

}

mostrarGrilla()

//Nuevo Juego

nuevoJuego.onclick = () => {

    seleccionaDificultad = prompt('Seleccione una dificultad: facil, medio, dificil')

    mostrarGrilla()

}

reiniciarJuego.onclick = () => {
    mostrarGrilla()
}

//Buscar Matches

buscarMatches.onclick=()=>{

    for (let i = 0; i < grillaDeFrutas.length; i++) {
        for (let j = 0; j < grillaDeFrutas[i].length; j++) {
          
            if (grillaDeFrutas[i][j] === grillaDeFrutas[i][j+1] && grillaDeFrutas[i][j]===grillaDeFrutas[i][j+2]){
                console.log(grillaDeFrutas[i][j], grillaDeFrutas[i][j+1], grillaDeFrutas[i][j+2])
            }
            
        }
        
    }

    for (let i = 0; i < grillaDeFrutas.length; i++) {
        for (let j = 0; j < grillaDeFrutas[i].length; j++) {
          
            if (grillaDeFrutas[i][j] === grillaDeFrutas[i+1][j] && grillaDeFrutas[i+2][j]===grillaDeFrutas[i][j]){
                console.log(grillaDeFrutas[i][j], grillaDeFrutas[i+1][j], grillaDeFrutas[i+2][j])
            }
            
        }
        
    }

}