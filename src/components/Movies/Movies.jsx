import React from 'react'
import MovieList from '../MovieList/MovieList'
import Pagination from '../Pagination/Pagination'
import {useGetMoviesQuery} from '../../services/Api'

const Movies = () => {
  const {data, isFetching, error} = useGetMoviesQuery();
  console.log(data);


  return (
    <section className='w-full text-white flex flex-col justify-normal items-center h-auto  p-5'>
      <MovieList movies={data}/>
      <Pagination />
    </section>
  )
}

export default Movies;