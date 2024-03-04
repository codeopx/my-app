import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import "./Movies.css";
import MovieBox from './MovieBox';
// import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = "18d058a684a4adb29783b5dede765b99";
const BASE_URL = "https://api.themoviedb.org/3";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const fetchMovies = (searchQuery = "") => {
    const url = searchQuery
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`
      : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const searchMovies = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    fetchMovies(query);
  };

  return (
    <div className='container'>
      <div className='grid'>
        {movies.map((movieReq) =>
          <MovieBox key={movieReq.id} {...movieReq} />)
        }
      </div>

        {/* Footer */}
        <footer className="bg-black text-light text-center p-3">
        <Container>
          <p style={{ color: "white" }}>© 2024 Movie Maniac Created By Toby Nosa-Omoregie. All rights reserved.</p>
        </Container>
      </footer>
    </div>

    
  );


}

export default Movies;
