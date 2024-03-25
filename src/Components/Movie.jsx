import React from 'react';

const Movie = (props) => {
    return (
        <div className='movie'>
            <div className="movie-title">{props.movie.title}
                <div className="movie-year">{props.movie.year}</div>
            </div>
            <div className='deleteBtn'><button onClick={()=>props.removeMovie(props.movie.id)}>삭제</button></div>
        </div>
    );
};

export default Movie;