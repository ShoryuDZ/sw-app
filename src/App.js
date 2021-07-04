import './App.css';
import MovieContainer from './components/movie-container/MovieContainer';
import CharacterList from './components/character-list/CharacterList';
import swlogo from './media/star_wars.png';
import filmPoster1 from './media/1.jpg';
import filmPoster2 from './media/2.jpg';
import filmPoster3 from './media/3.jpg';
import filmPoster4 from './media/4.jpg';
import filmPoster5 from './media/5.jpg';
import filmPoster6 from './media/6.jpg';
import {useState, useEffect} from 'react';

function App() {

	// Surely theres a better way than this ;-;
	const imageLibrary = {
		1 : filmPoster1,
		2 : filmPoster2,
		3 : filmPoster3,
		4 : filmPoster4,
		5 : filmPoster5,
		6 : filmPoster6,
	}
	
	const [films, setFilms] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isCharacterList, setIsCharacterList] = useState(false);
	const [selectedFilm, setSelectedFilm] = useState({});
	
	// Sets the selected film based on Episode ID
	const setFilm = (episode_id) => {
		setSelectedFilm(films.filter((filter) => filter.episode_id === episode_id)[0]);
		setIsCharacterList(true);
	}

	// Runs on-load, gets data from API, sorts data and sets sorted collection
	useEffect(() => {
		(async() => {
		const response = await fetch("https://swapi.dev/api/films/");
		const data = await response.json();
		const sorted = data.results.sort((x, y) => (x.episode_id > y.episode_id ? 1 : -1));
		setFilms(sorted);
		setIsLoaded(true);
		})();
	}, [])

	if (!isLoaded) {
		return <h1 className="loadingText">Loading...</h1>;
	}
	return (
		<>
		<img className="center-logo" src={swlogo} alt="Star Wars Logo"></img>
		<div className="containers">
			{ // If in character list mode, will pass CharacterList component with relevant props
			  // Otherwise, will render a movie container for each film with relevant information, and a trigger to allow the container to set the selected film
			isCharacterList ? 
			<CharacterList characters={selectedFilm.characters} filmTitle={selectedFilm.title} close={() => setIsCharacterList(false)} /> 
			:
			films.map(film => {
				return <MovieContainer title={film.title} order={film.episode_id} imagesrc={imageLibrary[film.episode_id]} description={film.opening_crawl} setFilm={() => setFilm(film.episode_id)} />
			})
			}
		</div>
		</>
	);
}

export default App;
