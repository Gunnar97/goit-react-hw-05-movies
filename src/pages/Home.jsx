import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { TRENDINGENDPOINT } from 'utils/constans';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { getMovies } from 'fetches/api';
import styled, { css } from 'styled-components';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTrendMov() {
      setLoading(true);
      try {
        const getTrend = await getMovies(TRENDINGENDPOINT);
        if (Array.isArray(getTrend.results)) {
          setTrending(getTrend.results);
        } else {
          setTrending([]);
        }
      } catch (error) {
        setTrending([]);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    }
    getTrendMov();
  }, []);

  const trendList = trending.map(({ id, title }) => {
    return (
      <TrendItem key={id}>
        <Link to={`/movies/${id} `} key={id} id={id}>
          {title}
        </Link>
      </TrendItem>
    );
  });

  return (
    <>
      <TitleWrapper>
        <TrendTitle>What's trending today</TrendTitle>
      </TitleWrapper>

      {loading && <Loader />}
      <TrendList>{trendList}</TrendList>
    </>
  );
};

export const TitleWrapper = styled.div`
  background: #fff4ed;
  padding: 50px 20px;
  text-align: center;
`;

export const trendTitleStyles = css`
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

  &:hover {
    border-color: #fff4ed;
  }

  @media (max-width: 420px) {
    font-size: 2em;
  }
`;

export const TrendTitle = styled.h2`
  ${trendTitleStyles}

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 30px;
    height: 100%;
    border-left: 2px solid;
    border-right: 2px solid;
    background: repeating-linear-gradient(
      180deg,
      transparent,
      transparent 2px,
      #3ca1d9 2px,
      #3ca1d9 4px
    );
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }
`;

export const TrendList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 30px 50px;
  padding: 0;
  list-style: none;

  font-family: 'Poppins', sans-serif;
`;

export const TrendItem = styled.li`
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

export default Home;
