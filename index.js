const grilla = document.querySelector('.grilla')
const nuevoJuego = document.getElementById('nuevo-juego')
const reiniciarJuego = document.getElementById('reiniciar-juego')


const bienvenida = alert('Bienvenid@')
const seleccionaDificultad = prompt('Seleccione una dificultad: facil, medio, dificil')


const frutas = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']

const obtenerNumeroAlAzar = (items) => {
    return Math.floor((Math.random() * items.length))
}

const generarGrilla = (filas, columnas, items) => {

    const anchoDeGrilla = 50 * columnas
    grilla.style.width = `${anchoDeGrilla}px`

    grilla.innerHTML = ''

    let grillaDeFrutas = []

    for (let i = 0; i < filas; i++) {
        grillaDeFrutas[i] = []
        
        for (let j = 0; j < columnas; j++) {
            grillaDeFrutas[i][j] = items[obtenerNumeroAlAzar(items)]
            grilla.innerHTML += `<div>${grillaDeFrutas[i][j]}</div>`
        }

    }
    // return grillaDeFrutas


}

// console.log(generarGrilla(6, 6, frutas))

const mostrarGrilla=()=>{

    if (seleccionaDificultad === 'facil'){
        generarGrilla(10,10,frutas)
    }
    else if (seleccionaDificultad === 'medio'){
        generarGrilla(8,8,frutas)
    }
    else {
        generarGrilla(6,6,frutas)
    }

}

mostrarGrilla()

nuevoJuego.onclick = () =>{

     
    const seleccionaDificultad = prompt('Seleccione una dificultad: facil, medio, dificil')


    const frutas = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']
    
    const obtenerNumeroAlAzar = (items) => {
        return Math.floor((Math.random() * items.length))
    }
    
    const generarGrilla = (filas, columnas, items) => {
    
        const anchoDeGrilla = 50 * columnas
        grilla.style.width = `${anchoDeGrilla}px`
    
        grilla.innerHTML = ''
    
        let grillaDeFrutas = []
    
        for (let i = 0; i < filas; i++) {
            grillaDeFrutas[i] = []
            
            for (let j = 0; j < columnas; j++) {
                grillaDeFrutas[i][j] = items[obtenerNumeroAlAzar(items)]
                grilla.innerHTML += `<div>${grillaDeFrutas[i][j]}</div>`
            }
    
        }
        // return grillaDeFrutas
    
    
    }
    
    // console.log(generarGrilla(6, 6, frutas))
    
    const mostrarGrilla=()=>{
    
        if (seleccionaDificultad === 'facil'){
            generarGrilla(10,10,frutas)
        }
        else if (seleccionaDificultad === 'medio'){
            generarGrilla(8,8,frutas)
        }
        else {
            generarGrilla(6,6,frutas)
        }
    
    }
    
    mostrarGrilla()

}
