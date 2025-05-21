import './App.css'
import MovieCard from './components/MovieCard';

function App() {

  const movieNumber = 2;
  return (
    <>
      <div className='flex justify-center justify-items-center content-center'>

        {movieNumber === 1 ? (<MovieCard movie={{ title: "Endgame", release_date: "2024" }} />) : (
        <MovieCard movie={{ title: "Infinty War", release_date: "2024" }} />)}
        
      </div>
    </>
  );
}

export default App;
