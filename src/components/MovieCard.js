import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const baseImageUrl = 'https://image.tmdb.org/t/p/w1280';
const defaultImage =
  'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  return (
    <div
      className="movie"
      onClick={() =>
        currentUser
          ? navigate('details/' + id)
          : alert('Please log in to see details')
      }
    >
      <img
        src={poster_path ? baseImageUrl + poster_path : defaultImage}
        alt="filmImg"
      />
      <div className="d-flex align-items-baseline justify-content-between p-1 text-white">
        <h5>{title}</h5>
        {currentUser && (
          <span
            className={`tag ${
              vote_average >= 8 ? 'green' : vote_average >= 6 ? 'orange' : 'red'
            }`}
          >
            {vote_average}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview </h2>
        <p>{overview} </p>
      </div>
    </div>
  );
};

export default MovieCard;
