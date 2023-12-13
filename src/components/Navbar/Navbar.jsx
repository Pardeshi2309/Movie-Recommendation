import React from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='w-full py-5 px-5 text-white flex justify-center items-center bg-light-blue'>
            <div className='w-full max-w-[1700px]  flex items-center justify-between'>
                <p className="font-black text-2xl">MoviesAdda</p>
                <div className="relative hidden sm:block">
                    <input type='text' placeholder='Enter a Movie' className='bg-dark-gray py-3 pl-4 pr-10 text-light-gray border-none outline-none rounded-lg w-[250px] text-sm placeholder:text-sm' />
                    <FaSearch className='absolute right-3 top-[50%] -translate-y-[50%]' />
                </div>
                <button className='px-5 py-3 bg-dark-gray rounded-lg text-sm' >Select Genre</button>
            </div>



        </div>
    )
}

export default Navbar