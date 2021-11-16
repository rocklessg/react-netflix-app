import React, {useState, useEffect} from 'react' //rfce shortcut from ES7 extension
import axios from './axios'


const base_Url = "https://image.tmdb.org/t/p/original/"

// use ref, useEffect and is a react hooks

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])

    //using hooks to conditionally render movie data
    useEffect(() => {
      // if [] is empty, run once when the row loads and don't run again
      //if [movie] not empty, loads every time movies change 
      async function fetchData() {
          const request = await axios.get(fetchUrl)
          setMovies(request.data.results)
          return request
      }
      fetchData() 
    }, [fetchUrl]) // the dependency of fetchUrl

    console.log(movies)
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {/* Several row_posters */}

                {movies.map(movie => {
                    <img    
                    className="row_poster"
                    src={`${base_Url}${movie.poster_path}`} alt={movie.name}/>
                })}
            </div>
        </div>
    )
}

export default Row
