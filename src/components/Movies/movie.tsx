import React, { ReactElement } from "react"
import { MovieType } from "../util"

const BASE_PIC_PATH = "https://image.tmdb.org/t/p/w500/"

const Movie = ({
  movieInfo,
}: {
  movieInfo: MovieType
}): // {movie}: {movie: MovieType}
ReactElement => {
  const { title, overview, picture } = movieInfo
  return (
    <div style={{ display: "flex", paddingBottom: "15px" }}>
      <img src={`${BASE_PIC_PATH}${picture}`} width="200" />
      <div style={{ display: "flex-col", paddingLeft: "15px" }}>
        <p style={{ textAlign: "left" }}>{title}</p>
        <p style={{ textAlign: "left" }}>{overview}</p>
      </div>
    </div>
  )
}

export default Movie
