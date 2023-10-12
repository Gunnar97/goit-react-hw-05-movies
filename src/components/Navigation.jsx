import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Navi>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </Navi>
  );
};

const Navi = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 28px;
  height: 10vh;
  padding-left: 75px;
  background-color: #0b2f00;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 24px;
  color: #03ff79;

  &.active {
    background-color: #03ff79;
    color: #000000;
  }

  &:hover:not(.active) {
    background-color: #23aad7;
    color: #000000;
  }
`;

export default Navigation;
