import React, { useEffect, useState } from 'react';
import axios from '../../axious';
import './Category.css';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Category = ({ title, fecthUrl, isLarge }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
 useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fecthUrl);
            setMovies(request.data.results);
            return request;
        };

        fetchData()

    }, [fecthUrl]);
   
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    };
    const handlelClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };
    return (
        <div className="row">
            <h2>{title} </h2>
            <div className="row-posters">
                {
                    movies.map(movie => (
                        <img
                            key={movie.id}
                            onClick={() => handlelClick(movie)}
                            className={`row-poster ${isLarge && "row-poster-large"} `}
                            src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                    ))
                }
            </div>
            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
            }
        </div>
    );
};

export default Category;