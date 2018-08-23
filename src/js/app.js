//manejo del DOM
const search = document.querySelector('input');
const btnAven = document.querySelector('#btnLord');
const btnStar = document.querySelector('#btnStar');
const btnGot = document.querySelector('#btnGot');

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

const renderInfo = (data) =>{
    let info = document.getElementById('info');
    info.innerHTML = '';
    let search = data.Search;
    
    for (let i = 0; i < search.length; i++){
        info.innerHTML += `
        <h5>${search[i].Title}</h5>
        <img src="${search[i].Poster}" alt="">
        `;
    }
    
};

btnLord.addEventListener('click', (event) => {
    getMovies('The Lord of the Rings');
});

btnStar.addEventListener('click', (event) => {
    getMovies('Star Wars');
});

btnGot.addEventListener('click', (event) => {
    getMovies('Game of Thrones');
});