import React from 'react'
import {useEffect, useState } from 'react';

const MovieCard = (props) => {
    const { movieObj,handleAddWatchList,handleRemoveWatchList,isInWatchList} =props

    const [addWatchList, setAddWatchList] = useState(isInWatchList);

  useEffect(() => {
    setAddWatchList(isInWatchList);
  }, [isInWatchList]);

  const toggleWatchList = () => {
    if (addWatchList) {
      handleRemoveWatchList(movieObj);
    } else {
      handleAddWatchList(movieObj);
    }
    setAddWatchList(!addWatchList);
  };
    
  return (
    <div
      className=' movie-card relative bg-cover  bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end m-2 overflow-hidden'
      style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${movieObj.poster_path}')` }}
      
    >
      <div>
        {addWatchList ? (
          <div className='m-2 p-2 rounded-lg bg-white' onClick={() => { toggleWatchList() }}>
            <i className="fa-solid fa-check text-primary"></i>
          </div>
        ) : (
          <div className='m-2 p-2 rounded-lg bg-gray-900/60' onClick={() => { toggleWatchList() }}>
            <i className="fa-solid fa-plus text-white"></i>
          </div>
        )}
      </div>
      
      
      <div className='absolute bottom-0 text-white text-l w-full p-2 text-center bg-gray-900/60'>
        {movieObj.title}
      </div>
    </div>
  )
}

export default MovieCard

