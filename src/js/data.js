window.getMovies = (movie) => {
    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=4b0395e8`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        renderInfo(data);
    })
   // .catch(error=>error);   
    }