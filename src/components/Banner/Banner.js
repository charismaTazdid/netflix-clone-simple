import React, { useState, useEffect } from 'react';
import axios from '../../axious';
import requests from '../../dataUrl';
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.tranding);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();

    }, []);
    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center'
            }}>
            <div className="banner-container">

                <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-btn">
                    <button className="btn">Play Movie</button>
                    <button className="btn">My List</button>
                </div>
                <h1 className='banner-description'>
                    {
                        truncate(movie?.overview, 160)
                    }
                </h1>
            </div>
            <div className="banner-fadeBtm">
                
            </div>
        </header>
    );
};

export default Banner;