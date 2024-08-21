import react, { useEffect, useState} from "react";
import axios from "axios";

function UpcomingList () {
    const [movies, setUpcoming] = useState([]);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        // fetch upcoming movies from TMDB
        axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
        .then((Response) => {
            setUpcoming(Response.data.results); // Set upcoming movies data
        })
        .catch ((error) => {
            console.error("Error fetching data:", error);
        });
    }, [apiKey]);

    return (
        <div>
            <h1>Sorties prochaines</h1>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {movies.map((movie) => (
                    <div key={movie.id} style={{ margin: "20px" }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            style={{ borderRadius: "10px" }}
                        />
                        <h3>{movie.title}</h3>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UpcomingList;