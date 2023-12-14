/* eslint-disable react/jsx-key */
import React from 'react';
import Movie from '../Movie/Movie';

const MovieList = () => {
  return (
    <div className=' p-1  gap-4 grid grid-cols-1 sm:grid-cols-2
     lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 h-auto'>
      {
        Array(20).fill(true).map((item, index) => {
          return <Movie />
        })
      }
    </div>
  )
}

export default MovieList