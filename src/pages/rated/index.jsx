import React, { useState, useEffect } from 'react';
import ratedMoviesData from './ratedMovies.json';
import { Card, Button, Modal, Form } from 'semantic-ui-react';

export const Rated = () => {
  const [ratedMovies, setRatedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [friendEmail, setFriendEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setRatedMovies(ratedMoviesData);
  }, []);

  const handleRecommend = (movie) => {
    setSelectedMovie(movie);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setOpenModal(false);
    setFriendEmail('');
    setMessage('');
  };

  const handleSendRecommendation = () => {
    console.log(`Recommend movie with ID ${selectedMovie.id} to ${friendEmail} with message: ${message}`);
    handleModalClose();
  };

  return (
    <div style={{ marginTop: '80px', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px', color: 'black' }}>Rated Movies</h1>
      <Card.Group>
        {ratedMovies.map((movie) => (
          <Card key={movie.id} style={{ marginBottom: '20px' }}>
            <Card.Content>
              <Card.Header>{movie.title}</Card.Header>
              <Card.Meta>Rating: {movie.rating}</Card.Meta>
              <Card.Description>{movie.overview}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color="olive" onClick={() => handleRecommend(movie)}>Recommend to a friend</Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Modal open={openModal} onClose={handleModalClose} size='small'>
        <Modal.Header>Recommend {selectedMovie ? selectedMovie.title : ''} to a Friend</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Friend's Email</label>
              <input placeholder="Enter your friend's email" value={friendEmail} onChange={(e) => setFriendEmail(e.target.value)} />
            </Form.Field>
            <Form.Field>
              <label>Message</label>
              <textarea placeholder="Add a message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={handleModalClose}>Cancel</Button>
          <Button color="green" onClick={handleSendRecommendation}>Send</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
