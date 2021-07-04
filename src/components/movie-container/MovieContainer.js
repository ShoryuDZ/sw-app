import './MovieContainer.css';

const MovieContainer = (movieProps) => {
    return (
        <div className="container">
            <h3 className="movieTitle">{movieProps.title} ({movieProps.order})</h3>
            <img src={movieProps.imagesrc} className="moviePoster" alt={movieProps.title + "'s Movie Poster"} />
            <span className="descText">{movieProps.description}</span>
            <button className="charactersButton" onClick={() => movieProps.setFilm()}>View Characters...</button>
        </div>
    )
}

export default MovieContainer