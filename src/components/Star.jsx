import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from 'react-icons/ai'
const star = () => {

    const rating = 8.6;
    const starRating = rating / 2;

    const starPrinting = Array.from({ length: 5 }, (ele, index) => {
        let n = index + 0.5;
        return (

            <span key={index} className='text-yellow-500'>
                {
                    (starRating >= index + 1) ? (
                        <FaStar />
                    ) : (starRating >= n) ? (
                        <FaStarHalfAlt />
                    ) : (
                        <AiOutlineStar />
                    )
                }
            </span>
        )
    })
    return (
        <div className='flex justify-center items-center gap-1'>
            {starPrinting}
        </div>
    )
}

export default star