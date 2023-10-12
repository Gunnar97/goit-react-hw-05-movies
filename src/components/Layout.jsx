import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './Loader';
import Navigation from './Navigation';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: #050505;
`;

export default Layout;
