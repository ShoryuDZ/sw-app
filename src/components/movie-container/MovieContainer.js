import './MovieContainer.css';

const MovieContainer = (movieProps) => {
    return (
        <div className="container-div">
            <h3>{movieProps.title} ({movieProps.order})</h3>
            <span className="descText">{movieProps.description}</span>
        </div>
    )
}

export default MovieContainer