import React from 'react'
import Movies from '../Movies/Movies'
import TopBar from '../TopBar/TopBar'
import { useGetMovieByGenreQuery } from '../../services/Api'

const Genre = () => {
  const { data } = useGetMovieByGenreQuery();
  return (
    <section className='text-white'>
      <TopBar />
      <Movies movie={data} />
    </section>
  )
}

export default Genre