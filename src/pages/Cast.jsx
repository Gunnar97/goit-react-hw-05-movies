import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { getMovies } from 'fetches/api';
import { CASTSENPOINT, MOVIEENDPOINT } from 'utils/constans';
import imgAvatar from '../img/default avatar.jpeg';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const FORFATCH = MOVIEENDPOINT + id + CASTSENPOINT;
  useEffect(() => {
    if (!id) return;
    async function getCast() {
      try {
        const getMovie = await getMovies(FORFATCH);
        setCredits(getMovie.cast);
      } catch (error) {
        setCredits(null);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [FORFATCH, id]);

  const casts = credits.map(credit => {
    return (
      <StyledListItem key={credit.cast_id}>
        <img
          src={
            credit.profile_path
              ? `https://image.tmdb.org/t/p/w185${credit.profile_path}`
              : imgAvatar
          }
          alt={credit.name}
          width="185"
        ></img>
        <h4>{credit.name}</h4>
        <p>{credit.character}</p>
      </StyledListItem>
    );
  });

  return (
    <>
      {loading && <Loader />}
      <StyledList>
        {casts.length ? (
          casts
        ) : (
          <NoInfoMessage>Unfortunately there are no information</NoInfoMessage>
        )}
      </StyledList>
      ;
    </>
  );
};

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin: 24px 0 0 0;
`;

export const StyledListItem = styled.li`
  width: 185px;
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  img {
    border-radius: 50%;
  }

  h4 {
    margin: 10px 0;
    font-size: 1.2em;
    color: #023047;
  }

  p {
    margin: 10px 0;
    font-size: 1rem;
    color: #3ca1d9;
  }
`;

export const NoInfoMessage = styled.p`
  font-family: 'Righteous', cursive;
  position: relative;
  color: #0b2f00;
  display: inline-block;
  font-size: 3em;
  padding: 11px 60px;
  margin: 0 auto;
  line-height: 1;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
`;
export default Cast;
