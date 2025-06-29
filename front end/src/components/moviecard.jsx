import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext";

function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext() //able to grab values from another file by using this command, as long as its wrapping it
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e){
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
            ♥
            </button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p> 
        </div>
    </div>
}

export default MovieCard;

//Line 18 looks at the release date, (im guessing split("-") reads the hyphens and counts the date as an array)