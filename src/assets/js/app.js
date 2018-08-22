//manejo del DOM
const search = document.querySelector('input');
const btnAven = document.querySelector('btnAven');
const btnStar = document.querySelector('btnStar');
const btnGot = document.querySelector('btnGot');

search.addEventListener("keypress", (event) => {
    let key = event.which || event.keyCode;
    if(key === 13){
    let movie = search.value;
    console.log(movie);
    search.value = "";
    getMovies(movie);
    }
}); 

//traer los botones y pasar la data solo de lo que va a buscar el boton
//al terminar con esos tres botones creo una funcion donde itere en los arreglos para traer el titulo y el posterde la pelicula
btnAven.addEventListener('click')

const renderInfo = (response) =>{
console.log("hola");
};
