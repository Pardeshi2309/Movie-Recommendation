import React from 'react'
import genreIcons from '../../assets/genres';
import { useGetMovieByGenreQuery } from '../../services/Api';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectGenre } from '../../Feature/currentGenre';

const TopBar = () => {
    

    const dispatch = useDispatch();
    const {data, isFetching} = useGetMovieByGenreQuery();
 return (
    <div className='text-white flex justify-center item-center gap-4 p-3 overflow-x-auto'>
        {isFetching || (
            data?.genres.map(({name,id}) => (
                <Link key={id} value={id} className='text-white flex px-2 py-2 border rounded-lg justify-center items-center '>
                    <div className="flex" onClick={() => dispatch(selectGenre(id))}>
                        <div>
                            <img src={genreIcons[name.toLowerCase()]} width={30} height={30}
                            className='text-white invert mr-5' />
                        </div>
                        {name}
                    </div>
                </Link> 
            ))
        )}
            
        
    </div>
  )
}

export default TopBar