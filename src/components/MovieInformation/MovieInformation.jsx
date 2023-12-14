import React from 'react'
import Star from '../Star'
import { AiOutlineStar } from 'react-icons/ai'
import { GoTriangleRight } from "react-icons/go";
import { useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../services/Api';

const MovieInformation = () => {
    const { id } = useParams();
    console.log(id);

    const {data, isfetching, error} = useGetMovieQuery(id);
    return (

        <section className="w-full flex flex-col justify-center items-center max-w-[1700px] lg:flex-row lg:items-start">
            <div className="w-full  flex justify-center items-center lg:w-[50%]">
                <div className=" w-[50%] my-5 shadow-lg shadow-light-blue rounded-2xl overflow-hidden">
                    <img src={data?.poster_path ? `http://image.tmdb.org/t/p/w500/${data?.poster_path}` : "https://www.fillmurray.com/200/300"} alt="poster" className='w-full' />
                </div>
            </div>
            <div className="w-full  h-auto flex flex-col justify-start items-center text-white p-5 lg:w-[50%]">
                <div className="w-[70%]">
                    <div className="text-center w-full">
                        <h1 className='font-black text-3xl'>{data?.title}</h1>
                        <p className="text-sm mt-2">Every good thing in this world started with a dream.</p>
                    </div>
                    <div className="mt-3 w-full flex flex-col justify-center items-center lg:justify-between lg:flex-row">
                        <Star />
                        <p className="mt-3">
                            117min/ 2023-12-06 / English
                        </p>
                    </div>
                    <div className="mt-3 w-full">
                        <h1 className="font-bold mb-3">Genre:</h1>
                        <div className="flex gap-4">
                            <button className='px-4 py-2  flex justify-center items-center gap-2 rounded-lg bg-light-blue'>
                                <p className='uppercase'> genre2 </p>
                                <AiOutlineStar />
                            </button>
                            <button className='px-4 py-2  flex justify-center items-center gap-2 rounded-lg bg-light-blue'>
                                <p className='uppercase'> genre2 </p>
                                <AiOutlineStar />
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h1 className="font-bold">Information:</h1>
                        <p className="">
                            Willy Wonka chock-full of ideas and determined to change the world one delectable bite at a time- is proof that the best thing in life begin with a dream, and if you're lucky enough to meet Willy Wonka, anything is possible.
                        </p>
                    </div>
                    <div className="mt-5 w-full">
                        <h1 className="font-bold mb-3">Top Cast:</h1>
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            <div className="flex flex-col  justify-center items-center">
                                <div className="w-[100px] rounded-lg overflow-hidden">
                                    <img src="https://learn.zoner.com/wp-content/uploads/2015/06/040mm.jpg?fidl=2019-06-mag-en&utm_source=learn.zoner.com&utm_medium=referral&utm_campaign=why-should-i-zoom-in-for-portraits&utm_content=text" alt="cast image" />
                                </div>
                                <p className="overflow-hidden over-flow-ellipsis whitespace-nowrap">Cast Name</p>
                            </div>

                            <div className="flex flex-col  justify-center items-center">
                                <div className="w-[100px] rounded-lg overflow-hidden">
                                    <img src="https://learn.zoner.com/wp-content/uploads/2015/06/040mm.jpg?fidl=2019-06-mag-en&utm_source=learn.zoner.com&utm_medium=referral&utm_campaign=why-should-i-zoom-in-for-portraits&utm_content=text" alt="cast image" />
                                </div>
                                <p className="overflow-hidden over-flow-ellipsis whitespace-nowrap">Cast Name</p>
                            </div>

                            <div className="flex flex-col  justify-center items-center">
                                <div className="w-[100px] rounded-lg overflow-hidden">
                                    <img src="https://learn.zoner.com/wp-content/uploads/2015/06/040mm.jpg?fidl=2019-06-mag-en&utm_source=learn.zoner.com&utm_medium=referral&utm_campaign=why-should-i-zoom-in-for-portraits&utm_content=text" alt="cast image" />
                                </div>
                                <p className="overflow-hidden over-flow-ellipsis whitespace-nowrap">Cast Name</p>
                            </div>
                        </div>


                    </div>
                    <div className=" w-full mt-3 flex justify-start items-center">
                        <button className="px-3 py-3 border rounded-lg mr-4 flex justify-center items-center">
                            <span>
                                Website
                            </span>
                            <GoTriangleRight />
                        </button>
                        <button className="px-3 py-3 border rounded-lg flex justify-center items-center">
                            <span>
                                Trailer
                            </span>
                            <GoTriangleRight />
                        </button>

                    </div>
                </div>


            </div>
        </section>
    )
}

export default MovieInformation