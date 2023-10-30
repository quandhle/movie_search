import React, { ReactElement, useState } from "react"

const SearchBar = ({
  handleClick,
}: {
  handleClick: (search: string) => void
}): ReactElement => {
  const [movieSearch, setMovieSearch] = useState<string>("")

  return (
    <div>
      <header style={{ paddingBottom: "0.25rem" }}>Movie Search</header>
      <input
        type="text"
        id="movie"
        name="movie"
        required={true}
        value={movieSearch}
        onChange={(e): void => {
          setMovieSearch(e.target.value)
        }}
      ></input>
      <button
        onClick={() => {
          handleClick(movieSearch)
        }}
        style={{ marginLeft: "0.5rem" }}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
