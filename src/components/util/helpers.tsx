const BASE_URL = "https://api.themoviedb.org/3/search/movie?query="
// TODO move API_KEY to secrets/env location
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDQwMTA0NmMxYmJkNDM3NzFlODQ0YmU4YzQxNGFjYiIsInN1YiI6IjVmOTgzODJmZTE4Yjk3MDAzNGQwMzM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UXcm8LSGmfBILHmAZwdHac3aMU2_7Avb2t_D94CZxQQ"

export const fetchMovieResults = (movieSearch: String): Promise<any> => {
  // BASE_URL + movieSearch
  const movieSearchParam = movieSearch.split(/^\s*$/).join("+")
  const MOVIE_SEARCH_URL = BASE_URL + movieSearchParam

  const fetchHeaders = {
    authorization: API_KEY,
    "content-type": "application/json",
  }

  return fetch(MOVIE_SEARCH_URL, {
    method: "GET",
    headers: fetchHeaders,
  }).then((res) => res.json())
}
