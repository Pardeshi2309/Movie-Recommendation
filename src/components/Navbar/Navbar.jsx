import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full py-5 px-5 text-white flex justify-center items-center bg-light-blue'>
            <div className='w-full max-w-[1700px]  flex items-center justify-between'>
                <Link to='/' className="font-black text-2xl">MoviesAdda</Link>
                <div className="relative hidden sm:block">
                    <input type='text' placeholder='Enter a Movie' className='bg-dark-gray py-3 pl-4 pr-10 text-light-gray border-none outline-none rounded-lg w-[250px] text-sm placeholder:text-sm' />
                    <FaSearch className='absolute right-3 top-[50%] -translate-y-[50%]' />
                </div>
                <Link to='/genre' className='px-5 py-3 bg-dark-gray rounded-lg text-sm' >Select Genre</Link>
            </div>



        </div>
    )
}

export default Navbar