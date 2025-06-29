import MovieCard from "../components/moviecard"
import { useState, useEffect} from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"


function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);//Used to store any potential errors
    const [loading, setLoading] = useState(true);//Used to store the "loading state"

    // const movies = getPopularMovies() (This will loop the search results)

    useEffect(() => {
        const loadPopularMovies = async () =>{
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault(); //stops the page from refreshing
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally{
            setLoading(false)
        }

       // setSearchQuery("");
    };

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} //how to update the state from an input element
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}


        {loading ? (
            <div className="loading">Loading...</div>
        ) : ( 
        <div className="movies-grid">
            {movies.map((movie) => (
            //movie.title.toLowerCase().startsWith(searchQuery) && (This would be used without an api)
            (<MovieCard movie={movie} key={movie.id}/>)
            ))}
        </div>
        )}
    </div>
    );
}

export default Home