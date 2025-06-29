import MovieCard from "../components/moviecard"

function Home(){
    const movies = [
        {id: 1, title: "nice", release_date: "2021"},
        {id: 2, title: "nice wow", release_date: "2022"},
        {id: 3, title: "nice wow cool", release_date: "2023"},

    ];

    return (
    <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}/> 
            ))}
        </div>
    </div>
    );
}

export default Home