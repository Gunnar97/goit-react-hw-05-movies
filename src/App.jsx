import Layout from 'components/Layout';
import Cast from 'pages/Cast';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Reviews from 'pages/Reviews';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Movies = lazy(() => import('pages/Movies.jsx'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
