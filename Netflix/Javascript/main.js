const fila = document.querySelector('.contenedor-carrusel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaizq = document.getElementById('flecha-izq');
const flechader = document.getElementById('flecha-der');

// Event der //

flechader.addEventListener('click',() =>{
    fila.scrollLeft += fila.offsetWidth;
});

flechaizq.addEventListener('click',() =>{
    fila.scrollLeft -= fila.offsetWidth;
});

// PAginacion //
const numPags = Math.ceil(peliculas.length / 5);

for(let i = 0; i < numPags; i++){
    const indicador = document.createElement('button');
    if (i === 0){
        indicador.classList.add('active');
    }


    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth
    
        document.querySelector('.indicadores .active').classList.remove('active');
        e.target.classList.add('active');
    
    
    })

       
}