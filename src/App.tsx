import React, { useState } from "react"
import "./App.css"
import SearchBar from "./components/SearchBar/searchBar"
import MovieResults from "./components/Movies/movieResults"
import { MovieType } from "./components/util"
import { fetchMovieResults } from "./components/util/helpers"

function App() {
  const [movieResults, setMovieResults] = useState<MovieType[]>([])

  const handleClick = async (search: String): Promise<void> => {
    setMovieResults([])

    const results = ((await fetchMovieResults(search)) as any).results.map(
      (result: any) => ({
        title: result.title,
        overview: result.overview,
        picture: result.poster_path,
        popularity: result.popularity,
      })
    )

    setMovieResults(results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar handleClick={handleClick} />
        {movieResults.length > 0 && <MovieResults movies={movieResults} />}
      </header>
    </div>
  )
}

export default App
