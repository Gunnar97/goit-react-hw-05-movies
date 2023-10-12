import Loader from 'components/Loader';
import { getMovies } from 'fetches/api';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { SEARCHMOVIEBYQUERY } from 'utils/constans';
import img from '../img/123.jpeg';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();

  const onSubmit = async data => {
    setSearchParams({ query: data.queryValue });
    if (!data.queryValue) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
    reset();
  };

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    async function getMoviesByQuery() {
      setLoading(true);
      try {
        const getMovie = await getMovies(SEARCHMOVIEBYQUERY, { query });
        if (Array.isArray(getMovie.results)) {
          setMovies(getMovie.results);
        } else {
          setMovies([]);
        }
      } catch (error) {
        setMovies([]);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    }
    getMoviesByQuery();
  }, [query]);
  return (
    <>
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <SearchInput {...register('queryValue')} type="text" />
        <SearchButton>Search</SearchButton>
      </SearchForm>
      {loading && <Loader />}
      {!isEmpty && (
        <MoviesList>
          {movies.length ? (
            movies.map(movie => {
              return (
                <FindeItem key={movie.id}>
                  <Link
                    state={{ from: location }}
                    to={`/movies/${movie.id}`}
                    key={movie.id}
                  >
                    {movie.title} (
                    {movie.release_date
                      ? movie.release_date.slice(0, 4)
                      : 'unknown'}
                    )
                  </Link>
                </FindeItem>
              );
            })
          ) : (
            <Wrapper>
              <StyledNotFoundIMG src={img} alt="Oops! Page not found" />
              <Title>Enter another query!</Title>
            </Wrapper>
          )}
        </MoviesList>
      )}
    </>
  );
};

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #3ca1d9;
  border-radius: 5px;
  flex: 1;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #3ca1d9;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #023047;
  }
`;

export const MoviesList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 30px 50px;
  padding: 0;
  list-style: none;

  font-family: 'Poppins', sans-serif;
`;

export const FindeItem = styled.li`
  font-size: 1.2rem;
  color: #023047;
  position: relative;

  &:before {
    content: '→';
    color: #3ca1d9;
    font-size: 1.2em;
    margin-right: 10px;
    position: absolute;
    left: -40px;
  }
  a {
    text-decoration: none;
    color: #023047;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #3ca1d9;
  }
`;

export const StyledNotFoundIMG = styled.img`
  width: 35vw;
`;

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 50vh;
`;

export const Title = styled.p`
  font-family: 'Righteous', cursive;
  position: relative;
  color: #0b2f00;
  display: inline-block;
  font-size: 3em;
  padding: 11px 60px;
  margin: 0;
  line-height: 1;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
`;

export default Movies;
