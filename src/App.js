import './App.css';
import MovieContainer from './components/movie-container/MovieContainer';
import swlogo from './media/star_wars.png';

function App() {

  return (
    <div className="sw-app">
      <img className="center-logo" src={swlogo} alt="Star Wars Logo"></img>
      <MovieContainer title="Movie 1" order="1" description="A long winded description" />
    </div>
  );
}

export default App;
