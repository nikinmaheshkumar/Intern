import MovieCard from '../components/MovieCard'

function Home()
{
    const movies = [
        {id: 1, title: "John wick", release_date: "2023"},
        {id: 2, title: "Terminator", release_date: "1990"},
        {id: 3, title: "Endgame", release_date: "2019"},
        {id: 4, title: "Sinners", release_date: "2024"},
    ]
    const handleSearch = () => {

    }

    return (
        <div className="home flex flex-col align-middle items-center mt-12">
            <form onSubmit={handleSearch} className='search-input'>
                <input type='text' placeholder='Search for movies ....' className='search-input'/>
                <button type='submit' className='search-btn'>Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
            ))}
            </div>
        </div>
    );
}


export default Home