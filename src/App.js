import {useEffect, useState} from "react";
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import "./App.css";



const API_URL = "http://www.omdbapi.com?apikey=dc148ccf ";

const App = () =>{

    const [searchTerm, setSearchTerm] = useState("");
    const[ movies, setMovies] = useState([]);

    
     useEffect(() => {
        searchMovies("Spiderman");
      }, []);

    const searchMovies = async (Title) => {
        const response = await fetch (`${API_URL}&s=${Title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    return (
        <div className="app">
            <h1>MovieLand</h1>
                <div className="search">
                    <input
                    value = {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder = "Search For Movies"
                    />
                    <img
                        src={SearchIcon}
                        alt="search"
                        onClick={() => searchMovies(searchTerm)}   
                    />
                </div>

                {movies?.length > 0 ? (
                        <div className="container">
                        {movies.map((movie) => ( 
                        <MovieCard movie={movie}/> 
                        ))}
                    </div> 
                    ) : (
                         <div className="empty">
                            <h2>No movies found</h2>    
                        </div>
                    )}          
        </div>

            );
        };


    export default App;