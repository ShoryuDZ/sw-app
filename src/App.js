import './App.css';
import MovieContainer from './components/movie-container/MovieContainer';
import swlogo from './media/star_wars.png';
import filmPoster1 from './media/1.jpg';
import filmPoster2 from './media/2.jpg';
import filmPoster3 from './media/3.jpg';
import filmPoster4 from './media/4.jpg';
import filmPoster5 from './media/5.jpg';
import filmPoster6 from './media/6.jpg';
import {useState, useEffect} from 'react';

function App() {

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
  
  useEffect(() => {
    (async() => {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      const sorted = data.results.sort((x, y) => (x.episode_id > y.episode_id ? 1 : -1));
      setFilms(sorted);
    })();

    setIsLoaded(true);
  }, [])

  return (
    <div className="sw-app">
      <img className="center-logo" src={swlogo} alt="Star Wars Logo"></img>
      <div className="containers">
        {isLoaded &&
          films.map(film => {
            return <MovieContainer title={film.title} order={film.episode_id} imagesrc={imageLibrary[film.episode_id]} description={film.opening_crawl} />
          })
        }
      </div>
    </div>
  );
}

export default App;
