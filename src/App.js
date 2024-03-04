import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import "./components/navbar/Navbar.css";
import Home from "./components/home/Home";
import Movies from "./components/movies/Movies";
import { Reviews } from "./components/reviews/Reviews";
import MovieBox from "./components/movies/MovieBox";
import logo from "../src/assets/mvm2.jpg"


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

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    
    <BrowserRouter>
      <header>
      
        <nav className="navbar">
          <div className="container-fluid">
            {/* Logo */}
            <NavLink to="/">
              <img src={logo} alt="Movie Maniac Logo" className="navbar-logo" />
            </NavLink>
          <h1 className="navTitle" style={{ color: 'white' }}>Movie Maniac</h1>
          
            <button
              className="hamburger-menu"
              onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
              ☰
            </button>

           

            <div className={`nav-links ${isNavExpanded ? "" : "hide"}`}>
              <NavLink className="a" to="/" onClick={() => setIsNavExpanded(false)}>Home</NavLink>
              <NavLink className="a" to="movies" onClick={() => setIsNavExpanded(false)}>Popular Movies</NavLink>
              {/* Uncomment or add additional links as needed */}
              {/* <NavLink className="a" to="reviews" onClick={() => setIsNavExpanded(false)}>Reviews</NavLink> */}
            </div>
              

            {/* Search Bar */}
            <form onSubmit={searchMovies} className="d-flex justify-content-center" style={{marginLeft:20}}>
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search movies"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
             <button className="btn btn-outline-success custom-hover" type="submit" style={{ color: 'white', borderColor: 'white', backgroundColor: "#1c1c1c" }}>Search</button>

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
