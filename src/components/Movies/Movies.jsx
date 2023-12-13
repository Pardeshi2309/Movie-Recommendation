import React from 'react'
import MovieList from '../MovieList/MovieList'
import Pagination from '../Pagination/Pagination'


const Movies = () => {
  return (
    <section className='w-full text-white flex flex-col justify-normal items-center h-auto  p-5'>
      <MovieList />
      <Pagination />
    </section>
  )
}

export default Movies