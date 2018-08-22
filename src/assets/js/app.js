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
btnLord.addEventListener('click', (event) => {
    renderInfo('the lord of the rings');
});

btnStar.addEventListener('click', (event) => {
    renderInfo('star wars');
});

btnGot.addEventListener('click', (event) => {
    renderInfo('game of thrones');
});

const renderInfo = (data) =>{
    let info = document.getElementById('info');
    let search = data.Search;
    console.log(search);
    for (let i = 0; i < search.length; i++){
        info.innerHTML += `
        <p>${search[i].Title}</p>
        <img src="${search[i].Poster}" alt="">
        `;
    }
};
