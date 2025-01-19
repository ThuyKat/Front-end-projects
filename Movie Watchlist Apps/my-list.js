
let watchList = JSON.parse(localStorage.getItem("watchList"))

document.addEventListener("click",function(e){
    if(e.target.dataset.remove){
        const movieID = e.target.dataset.remove
        removeMovie(movieID)
    }
})



renderWatchlist(watchList)

function renderWatchlist(watchList){
    let watchListHtml = ''
    for(let movie of watchList){
        watchListHtml += `
        <div class="movie">
                <img src="${movie.Poster}">
                <div class="movie-description">
                    <h2>${movie.Title} <span class="star">★</span> ${movie.imdbRating} </h2>
                    <div class="movie-info">
                        <p>${movie.Runtime}</p>
                        <p>${movie.Genre}</p>
                        <div class="add-to-watchlist">
                            <img src="images/icon-2.png" class="plus-icon" data-remove=${movie.imdbID}>
                            <p>Remove</p>
                        </div>
                    </div>
                    <p class="movie-nar">
                    ${movie.Plot}
                    </p>
                </div>
        </div>
        `
    }
    document.getElementById("watchlist-loading").style.display="none"
    document.getElementById('watch-list').innerHTML=watchListHtml
}

function removeMovie(movieID){
    watchList = watchList.filter(movie => movie.imdbID !== movieID)
    localStorage.clear()
    localStorage.setItem("watchList",watchList)
    renderWatchlist(watchList)
}
