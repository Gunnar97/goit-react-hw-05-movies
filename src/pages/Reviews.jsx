import { getMovies } from 'fetches/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MOVIEENDPOINT, REVIEWSENPOINT } from 'utils/constans';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import imgAvatar from '../img/default avatar.jpeg';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const FORFATCH = MOVIEENDPOINT + id + REVIEWSENPOINT;
  useEffect(() => {
    if (!id) return;
    async function getCast() {
      try {
        const getReviews = await getMovies(FORFATCH);
        setReviews(getReviews.results);
      } catch (error) {
        setReviews(null);
        setLoading(false);
        toast.error('Something went wrong. Please, try again');
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [FORFATCH, id]);

  const reviewsList = reviews.map(review => {
    return (
      <StyledCard key={review.id}>
        <StyledReviewHeader>
          <img
            src={
              review.author_details.avatar_path
                ? `https://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`
                : imgAvatar
            }
            alt=""
            width="45"
            height="45"
          ></img>
          <h4>{review.author}</h4>
        </StyledReviewHeader>
        <p>{review.content}</p>
        <StyledHr></StyledHr>
      </StyledCard>
    );
  });
  return (
    <>
      {loading && <Loader />}
      <StyledList>
        {reviewsList.length ? (
          reviewsList
        ) : (
          <NoReviewsMessage>There are no reviews yet</NoReviewsMessage>
        )}
      </StyledList>
      ;
    </>
  );
};

export const StyledCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const StyledReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    border-radius: 50%;
  }

  h4 {
    font-size: 1.2em;
    color: #023047;
  }
`;

export const StyledList = styled.div`
  margin-top: 20px;
`;

export const NoReviewsMessage = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #023047;
`;

export const StyledHr = styled.hr`
  border-top: 1px solid #3ca1d9;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default Reviews;
