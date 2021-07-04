import './MovieContainer.css';

const MovieContainer = (movieProps) => {
    return (
        <div className="container">
            <h3 className="movieTitle">{movieProps.title} ({movieProps.order})</h3>
            <img src={movieProps.imagesrc} className="moviePoster"/>
            <span className="descText">{movieProps.description}</span>
        </div>
    )
}

export default MovieContainer