import React, { useState } from 'react'
import MovieList from '../MovieList/MovieList'
import Pagination from '../Pagination/Pagination'
import {useGetMoviesQuery, useGetMovieByGenreQuery } from '../../services/Api'
import { useSelector } from 'react-redux'

const Movies = () => {
  const {data, isFetching, error} = useGetMoviesQuery();
  const [page, setPage] = useState(1);
  const {genreName} = useSelector((state) => state.currentGenre);
  
  console.log(data);


  return (
    <section className='w-full text-white flex flex-col justify-normal items-center h-auto  p-5'>
      <MovieList movies={data}/>
      <Pagination />
    </section>
  )
}

export default Movies;