import React from 'react'
import Star from '../Star'
import { Link } from 'react-router-dom'

const Movie = () => {
  return (
    <div className=' h-auto w-[250px] flex justify-start items-start flex-col text-white'>
      <Link to="/MovieInformation">
        <div className=" w-[250px] rounded-2xl overflow-hidden ">
          <img src="https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543" alt="poster" className='w-full' />
        </div></Link>
      <h1 className="font-semibold mt-3 w-full whitespace-nowrap overflow-hidden overflow-ellipsis">title title titletitletitle titletitle title title</h1>
      <div className="mt-2">
        <Star />
      </div>
    </div>
  )
}

export default Movie