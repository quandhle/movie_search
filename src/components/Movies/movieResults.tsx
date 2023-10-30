import React, { ReactElement, useMemo } from "react"
import { MovieType } from "../util"
import Movie from "./movie"

const MovieResults = ({ movies }: { movies: MovieType[] }): ReactElement => {
  const sortedMovies = useMemo(() => {
    const sortedByPopularity = movies.sort(
      (movie1, movie2) => movie2.popularity - movie1.popularity
    )

    return sortedByPopularity
  }, [movies])

  return (
    <div style={{ display: "flex-col" }}>
      {sortedMovies.map((movie) => {
        return <Movie movieInfo={movie} key={movie.title} />
      })}
    </div>
  )
}

export default MovieResults
