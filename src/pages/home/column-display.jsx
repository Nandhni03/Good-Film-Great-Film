import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Form, Button, Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const ColumnDisplay = ({ data }) => {
  const [ratings, setRatings] = useState({});

  const handleRate = (filmId, rating) => {
    setRatings({ ...ratings, [filmId]: rating });
  };

  const handleSubmit = (filmId) => {
    const rating = ratings[filmId];
    console.log(`Submitting rating ${rating} for film ${filmId}`);
    // BACKEND.........
  };

  const getMoviePoster = (title) => {
    switch (title) {
      case 'Inception':
        return './src/pages/movie/inception.jpg';
      case 'The Shawshank Redemption':
        return './src/pages/movie/shawshank_redemption.jpg';
      case 'Oldboy':
        return './src/pages/movie/oldboy.jpg';
      case 'La Haine':
        return './src/pages/movie/la_haine.jpg';
      case 'Chungking Express':
        return './src/pages/movie/chungking_express.jpg';
      case 'Perfect Days':
        return './src/pages/movie/perfect_days.jpg';
      case 'Joker':
        return './src/pages/movie/joker.jpg';
      case 'Oppenheimer':
        return './src/pages/movie/oppenheimer.jpg';
      case 'Dead Poets Society':
        return './src/pages/movie/dead_poets_society.jpg';
      default:
        return ''; 
    }
  };
  

  return (
    <div style={{ marginTop: '80px', padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {data.map((film) => (
        <Card key={film.id} style={{ width: '400px', height: '350px', marginBottom: '20px' }}>
          <Card.Content style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
            {/* Left side */}
            <Link to={`/movie/${film.id}`} style={{ textDecoration: 'none', height: '100%' }}>
              <Image
                src={getMoviePoster(film.title)}
                alt={film.title}
                wrapped
                ui={false}
                style={{ height: '100%', objectFit: 'cover', flex: '1' }}
              />
            </Link>
  
            {/* Right side */}
            <div style={{ flex: '1', paddingLeft: '20px', height: '100%' }}>
              <Link to={`/movie/${film.id}`} style={{ textDecoration: 'none' }}>
                <Card.Header as='h2'>{film.title}</Card.Header>
                <Card.Meta>
                  <span className='date'>Release Date: {film.release_date}</span>
                </Card.Meta>
                <Card.Description>{film.overview}</Card.Description>
              </Link>
              <Form style={{ marginTop: '10px' }}>
                <Form.Group inline>
                  <Form.Field>
                    <Rating icon='star' rating={ratings[film.id] || 0} maxRating={5} onRate={(e, { rating }) => handleRate(film.id, rating)} />
                  </Form.Field>
                  <Button color='olive' content='Rate' onClick={() => handleSubmit(film.id)} />
                </Form.Group>
              </Form>
              <div>
                <p>Vote Average: {film.vote_average}</p>
                <p>Vote Count: {film.vote_count}</p>
              </div>
            </div>
          </Card.Content>
        </Card>
      ))}
    </div>
  );  
};

ColumnDisplay.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};