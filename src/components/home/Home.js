import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Movies from '../movies/Movies';
import "./Home.css"
import { Analytics } from "@vercel/analytics/react"
const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <div className="heroSection">
        <Container style={{color: 'white'}}>
        <Analytics />
          <h1>Welcome To Movie Maniac</h1>
          <p className="lead">"The Home Of Movies"</p>
          <Button variant="secondary" className="heroButton">
            <a href="movies" className="heroButton">Explore</a>
          </Button>
        </Container>
      </div>

      {/* Bio Section */}
      <div className="bioSection">
        <Container>
          <p style={{color: 'white'}}>Welcome to Movie Maniac, the ultimate destination for movie enthusiasts. Whether you're in search of the latest reviews, deep dives into classic films, or just looking to discover something new, we've got you covered. Dive in and let the movie magic begin!</p>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="my-5 features-section">
        <Row style={{ color: 'white' }}>
          <Col md={4} sm={12} className="mb-3 feature-col">

            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
              <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
            </svg>
            <h2>Movie Reviews And Ratings</h2>
            <p> Offer detailed reviews covering various aspects of the movies, such as plot, direction, acting, cinematography, and soundtrack</p>
          </Col>
          <Col md={4} sm={12} className="mb-3 feature-col">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
            </svg>
            <h2>Curated Movie Recommendations</h2>
            <p>Provide personalized movie recommendations based on users' viewing history, preferences, or ratings they've given.</p>
          </Col>
          <Col md={4} sm={12} className="mb-3 feature-col">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <h2>Advanced Search and Discovery Tools</h2>
            <p>Make use of an advanced search functionality that allows users to find movies based on a wide range of criteria, such as themes, mood, awards won, critical reception, and even specific dialogues or plot details</p>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-black text-light text-center p-3">
        <Container>
          <p style={{ color: "white" }}>© 2024 Movie Maniac Created By Toby Nosa-Omoregie. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
