import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../img/lovepik-404-page-error-png-image_400217866_wh1200.png';
const NotFound = () => {
  return (
    <Wrapper>
      <StyledNotFoundIMG src={img} alt="Oops! Page not found" />
      <p>
        Go to <Link to="/">Homepage</Link>
      </p>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 85vh;
`;

export const StyledNotFoundIMG = styled.img`
  width: 30vw;
`;

export default NotFound;
