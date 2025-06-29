import MovieCard from "../components/moviecard"
import { useState } from "react";
import "../css/Home.css"


function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    
    const movies = [
        {id: 1, title: "nice", release_date: "2021"},
        {id: 2, title: "nice wow", release_date: "2022"},
        {id: 3, title: "nice wow cool", release_date: "2023"},

    ];

    const handleSearch = () => {
        e.preventDefault() //stops the page from refreshing
        alert(searchQuery)
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

        <div className="movies-grid">
            {movies.map((movie) => (
            //movie.title.toLowerCase().startsWith(searchQuery) && (This would be used without an api)
            (<MovieCard movie={movie} key={movie.id}/>)
            ))}
        </div>
    </div>
    );
}

export default Home