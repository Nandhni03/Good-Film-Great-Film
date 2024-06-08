import React, { useState, useEffect } from 'react';
import { ColumnDisplay } from './column-display';

export const Home = () => {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./src/pages/movie/films.json');
        const data = await response.json();
        setFilmData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: 20 }}>
      {filmData.length > 0 ? <ColumnDisplay data={filmData} /> : <p>Loading...</p>}
    </div>
  );
};
