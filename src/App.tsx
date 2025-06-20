import { useEffect, useState } from 'react'
import { useDebounce } from 'react-use';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import Spinner from './components/Spinner';
import { getTrendingMovies, updateSearchCount } from './appwrite';

const API_BASE_URL: string = 'https://api.themoviedb.org/3'

const API_KEY: string = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
}

interface Movie {
  "title": string,
  "id": any

}

const App = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [movieList, setmovieList] = useState([]);
  const [trendingMovies, settrendingMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [debouncedSearchTerm, setdebouncedSearchTerm] = useState('');

  const fetchMovies = async (query = '') => {

    setisLoading(true)
    seterrorMessage('')

    try{
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
       :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

      const response = await fetch(endpoint, API_OPTIONS)

      if(!response.ok){
        throw new Error(`Failed to fetch movies`)
      }

      const data = await response.json()

      if(data.Response == 'False'){
        seterrorMessage(data.error || `Failed to fetch movies`)
        setmovieList([])
        return
      }

      setmovieList(data.results || [])
      
      if(query && data.results.length > 0){
        updateSearchCount(searchTerm, data.results[0])
      }
    } catch(error) {
      seterrorMessage(`Error fetching movies: ${error}`)
    } finally {
      setisLoading(false)
    }
  }

  const loadTrendingMovies = async () => {
    try {
      const movies: any = await getTrendingMovies()
      settrendingMovies(movies)
    } catch (error) {
      console.log(error)
    }
  }

  useDebounce(() => setdebouncedSearchTerm(searchTerm), 500, [searchTerm])

  useEffect(() => {
    fetchMovies(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  useEffect(() => {
    loadTrendingMovies()
  }, []);

  return ( 
    <main > 
      
      <div className='pattern'>
        
        <div className='wrapper'>
          <header>
            <img src="./hero.png" alt="Hero Banner"/>

            <h1> Find <span className='text-gradient'> Movies</span> without Hassle</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setsearchTerm}/>
          </header>

          {trendingMovies.length > 0  && searchTerm == ''? 
            <section className='trending'>
              <h2>Trending movies</h2>

              <ul>
                {trendingMovies.map((movie: any, index: number) => (
                  <li key={movie.$id}>
                      <p>{index + 1}</p>
                      <img src={movie.poster_url} alt="poster" />
                  </li>
                ))}
              </ul>
            </section>
          : ""}

          <section className='all-movies'>
            <h2> All Movies </h2>
            
            {isLoading? (
              <Spinner />
            ) : errorMessage ? ( 
              <p className='text-red-500'> {errorMessage} </p>
            ) : (
              <ul>
                {movieList.map((movie : Movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                  ))
                }
              </ul>
            ) }
          </section>

        </div>

      </div>

    </main>
   );
}
 
export default App;