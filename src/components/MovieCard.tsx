import React from "react";

const MovieCard = ({movie: {title, vote_average, poster_path,release_date, original_language}} : any) => {
    return (  
        <div className="movie-card">
            <img src={poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}`: `/no-movie.png`} alt="Movie Poster" />

            <div className="mt-4">
                <h3>{title}</h3>
            </div>

            <div className="content">
                <div className="rating">
                    <img src="Rating.svg" alt="Star icon" />
                    <p> {vote_average? vote_average.toFixed(1): ''}</p>
                </div>

                <span>•</span>
                <p className="lang"> {original_language.toUpperCase()}</p>
                <span>•</span>
                <p className="year"> 
                    {release_date? release_date.split('-')[0]: ''}
                </p>
            </div>
        </div>


    );
}
 
export default MovieCard;