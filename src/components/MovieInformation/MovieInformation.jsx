import React from 'react'
import Star from '../Star'
import { GoTriangleRight } from "react-icons/go";
import { useParams } from 'react-router-dom';
import { useGetMovieQuery } from '../../services/Api';
import {CiLocationArrow1} from 'react-icons/ci';

const MovieInformation = () => {
    const { id } = useParams();
    console.log(id);

    const { data, isfetching, error } = useGetMovieQuery(id);
    console.log(data);
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
                        <p className="text-sm mt-2">
                            {data?.tagline}
                        </p>
                    </div>
                    <div className="mt-3 w-full flex flex-col justify-center items-center lg:justify-between lg:flex-row">
                        <Star />
                        <p className="mt-3">
                            {data?.runtime}  min / {data?.release_date} / {data?.original_language}
                        </p>
                    </div>
                    <div className="mt-3 w-full">
                        <h1 className="font-bold mb-3">Genre:</h1>
                        <div className="flex gap-4">
                            <button className='px-4 py-2  flex justify-center items-center gap-2 rounded-lg bg-light-blue'>
                                {data?.genres.map((genre, index) => (
                                    <p
                                        key={index}
                                        className="mb-4 mr-4 flex items-center justify-center rounded-lg bg-[#227fb4] px-3 py-2 text-sm"
                                    >
                                        <span className="mr-2 uppercase">{genre?.name}</span>
                                        <CiLocationArrow1 className="text-sm" />
                                    </p>
                                ))}
                                {/*<p className='uppercase'> genre2 </p>
                                <AiOutlineStar />*/}
                            </button>
                            {/*<button className='px-4 py-2  flex justify-center items-center gap-2 rounded-lg bg-light-blue'>
                                <p className='uppercase'> genre2 </p>
                                <AiOutlineStar />
                                </button>*/}
                        </div>
                    </div>
                    <div className="mt-3">
                        <h1 className="font-bold">Information:</h1>
                        <p className="">
                            {data?.overview}
                        </p>
                    </div>
                    <div className="mt-5 w-full">
                        <h1 className="font-bold mb-3">Top Cast:</h1>
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            {data?.credits?.cast
                                .map((character, index) => (
                                    <div
                                        key={index}
                                        className="mt-2 flex w-[100px] flex-col items-center justify-start"
                                    >
                                        <img
                                            className="w-full rounded-2xl"
                                            src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`}
                                            alt={character?.name}
                                        />
                                        <p className="mt-2 w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-sm">
                                            {character?.name}
                                        </p>
                                    </div>
                                ))
                                .slice(0, 8)}

                        </div>
                    </div>
                    <div className=" w-full mt-3 flex justify-start items-center">
                        <button className="px-3 py-3 border rounded-lg mr-4 flex justify-center items-center gap-2">
                            <a href={data?.homepage} target='_blank'>
                                <span>
                                    Website
                                </span>
                                <GoTriangleRight />
                            </a>
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