import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import './MovieBox.css'; // Import custom CSS

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="col-12 mb-4">
      <div className="card text-center bg-black h-100 movie-card">
        <img className="card-img-top movie-img" src={API_IMG + poster_path} alt={title} />
        <div className="card-body d-flex flex-column">
          <button type="button" className="btn btn-dark mt-auto" onClick={handleShow}>View More</button>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton style={{ backgroundColor: 'white' }}>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: 'black', color: 'white' }}>
              <img className="img-fluid movie-img" src={API_IMG + poster_path} alt={title} />
              <h4>Rating: {vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <h6>Overview</h6>
              <p>{overview}</p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;

