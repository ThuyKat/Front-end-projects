let movies = []
const watchList =[]

document.addEventListener("click",async function(e){
    if(e.target.id === "search-btn"){
        renderMovies()
    }
    else if(e.target.dataset.add){
        let movieId = e.target.dataset.add
        let movieToAdd = await getMovieDetail(movieId)
        if(!watchList.find(movie =>movie.imdbID===movieToAdd.imdbID)){
            watchList.push(movieToAdd)
            alert("movie is added")
            localStorage.clear()
            localStorage.setItem("watchList",JSON.stringify(watchList))
        }else{
            alert("already in your watchlist")
        }   
    }
})

async function renderMovies(){
    let searchInput = document.getElementById("search-input").value 
    movies= await getMovies(searchInput)
    if(movies){
        let moviesHtml = ''
        for(let movie of movies){
            let movieDetails = await getMovieDetail(movie.imdbID.trim(''));
            moviesHtml += `
             <div class="movie">
                    <img src=${movie.Poster}>
                    <div class="movie-description">
                        <h2>${movie.Title} <span class="star">★</span> ${movieDetails.imdbRating} </h2>
                        <div class="movie-info">
                            <p>${movieDetails.Runtime}</p>
                            <p>${movieDetails.Genre}</p>
                            <div class="add-to-watchlist">
                                <img src="images/icon-1.png" class="plus-icon" data-add=${movie.imdbID}>
                                <p>Watchlist</p>
                            </div>
                        </div>
                        <p class="movie-nar">
                        ${movieDetails.Plot}
                        </p>
                    </div>
            </div> 
            `
        }
        document.getElementById("search-loading").style.display="none"
        document.getElementById("movies").innerHTML = moviesHtml
    }else{
        document.getElementById("search-loading").innerHTML =`
        <h2>Unable to find what you’re looking for. Please try another search.</h2>
        `
    }
  
}
async function getMovies(title){
    try{
        let response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=d57f042c`)
        let responseJson = await response.json()
        return responseJson.Search
        
    }catch(e){
        console.error("Error getting data",e)
    }
}
async function getMovieDetail(movieId){
    try{
        let response = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=d57f042c`)
        let responseJson = await response.json()
        return responseJson
    }catch(e){
        console.error("Error getting data",e)

    }
}

