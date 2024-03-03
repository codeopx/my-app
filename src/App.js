import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import "./components/navbar/Navbar.css";
import Home from "./components/home/Home";
import Movies from "./components/movies/Movies";
import { Reviews } from "./components/reviews/Reviews";
import MovieBox from "./components/movies/MovieBox";

const API_KEY = "18d058a684a4adb29783b5dede765b99";
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState(false); // Track if a search has been submitted

  const fetchMovies = (searchQuery = "") => {
    if (!searchQuery.trim()) return; // Prevent fetching if the search query is empty

    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  };

  const searchMovies = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    setSearchSubmitted(true); // Indicate that a search has been submitted
    fetchMovies(query);
  };

  return (
    <BrowserRouter>
      <header>
        <nav className="navbar bg-body-black">
          <div className="container-fluid">
            <h1 className="navTitle" style={{ color: 'white' }}>Movie Maniac</h1>
            <NavLink className="a" to="/">Home</NavLink>
            <NavLink className="a" to="movies">Popular Movies</NavLink>
            {/* Uncomment the line below if you wish to include the Reviews section in your navbar */}
            {/* <NavLink className="a" to="reviews">Reviews</NavLink> */}
            {/* Search Bar */}
            <form onSubmit={searchMovies} className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search movies"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit" style={{ color: 'white', borderColor: 'red' }}>Search</button>
            </form>
            <h1 className="motto">"The Home Of Movies"</h1>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>

      {/* Conditionally render the movies grid only if a search has been submitted */}
      {searchSubmitted && (
        <div className='grid'>
          {movies.map((movieReq) =>
            <MovieBox key={movieReq.id} {...movieReq} />)
          }
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
