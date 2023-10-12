import { getMovies } from 'fetches/api';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { MOVIEENDPOINT } from 'utils/constans';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import styled from 'styled-components';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  const FORFATCH = MOVIEENDPOINT + id;
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    async function getMovieById() {
      try {
        const getMovie = await getMovies(FORFATCH);
        setMovie(getMovie);
      } catch (error) {
        setMovie(null);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    }
    getMovieById();
  }, [FORFATCH, id]);

  return (
    <>
      {loading && <Loader />}
      <StyledLink to={goBackRef.current} type="button">
        <button>Go Back</button>
      </StyledLink>
      {loading && <Loader />}
      {movie && (
        <>
          <StyledMovieCard>
            <div>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                    : ''
                }
                alt="movie.original_title"
                width="342"
              />
            </div>
            <StyledInfo>
              <Subtitle>
                {movie.original_title}{' '}
                {`(${
                  movie.release_date
                    ? movie.release_date.slice(0, 4)
                    : 'unknown'
                })`}
              </Subtitle>
              <p>User score: {(movie.vote_average * 10).toFixed(2)}%</p>

              <Subtitle>Overview</Subtitle>
              <p>{movie.overview}</p>

              <Subtitle>Genres</Subtitle>
              <p>{movie.genres?.map(genre => genre.name).join(', ')}</p>
            </StyledInfo>
          </StyledMovieCard>
          <Additional>
            <Subtitle>Additional information</Subtitle>
            <NavLin to="cast">Cast</NavLin>
            <NavLin to="reviews">Reviews</NavLin>
          </Additional>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export const StyledMovieCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInfo = styled.div`
  flex: 1;
`;

export const Subtitle = styled.h3`
  font-size: 1.2em;
  color: #023047;
  margin-bottom: 10px;
`;

export const Additional = styled.div`
  margin-top: 20px;
`;

export const NavLin = styled(NavLink)`
  color: #3ca1d9;
  text-decoration: none;
  margin-right: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3ca1d9;

  button {
    background-color: #0b2f00;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    width: 120px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
      background-color: #03ff79;
      color: #000000;
    }

    &:hover:not(.active) {
      background-color: #23aad7;
      color: #000000;
    }
  }
`;

export default MovieDetails;
