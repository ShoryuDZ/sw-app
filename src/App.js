import './App.css';
import MovieContainer from './components/movie-container/MovieContainer';
import swlogo from './media/star_wars.png';
import filmPoster1 from './media/1.jpg';
import filmPoster2 from './media/2.jpg';
import filmPoster3 from './media/3.jpg';
import filmPoster4 from './media/4.jpg';
import filmPoster5 from './media/5.jpg';
import filmPoster6 from './media/6.jpg';

function App() {

  const imageLibrary = {
    1 : filmPoster1,
    2 : filmPoster2,
    3 : filmPoster3,
    4 : filmPoster4,
    5 : filmPoster5,
    6 : filmPoster6,
  }

  return (
    <div className="sw-app">
      <img className="center-logo" src={swlogo} alt="Star Wars Logo"></img>
      <div className="containers">
        <MovieContainer title="Movie 1" order={1} description="A long winded description" imagesrc={imageLibrary[1]}/>
        <MovieContainer title="Movie 2" order={2} description="An even more long winded description" imagesrc={imageLibrary[2]}/>
        <MovieContainer title="Movie 3" order={1} description="A long winded description" imagesrc={imageLibrary[3]}/>
        <MovieContainer title="Movie 4" order={2} description="An even more long winded description" imagesrc={imageLibrary[4]}/>
      </div>
    </div>
  );
}

export default App;
