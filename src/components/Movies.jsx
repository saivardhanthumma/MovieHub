import React, { useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import { useEffect } from 'react'
import Pages from './Pages'

const Movies = ({handleAddWatchList,handleRemoveWatchList,watchList}) => {

  

  const [movies,setMovies]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  
  useEffect(()=>{
   const getData=async()=>{
    try{
      const response= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e4abb58862236c98c1abf704680c2e1c&language=en-US&page=${currentPage}`);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
     
      

    }catch(error){
      console.log(error)
    }
        
  }
  getData()
  
  },[currentPage,watchList])// Empty dependency array to ensure it runs only once

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };



 
 
  return (
    <div className='p-2'> 
    <div className='text-dark text-center text-2xl  font-bold m-2 '>Trending Movies</div> 
    <div className='flex flex-row flex-wrap justify-around '>
      {movies.map((obj,index)=>(
        
        <MovieCard key={obj.id} title={obj.title} poster_path={obj.poster_path} handleAddWatchList={handleAddWatchList} movieObj={obj} handleRemoveWatchList={handleRemoveWatchList} isInWatchList={watchList.some(movie => movie.id === obj.id)}/>
      ))}
     
      
    
    </div>
    <div className='flex justify-center m-2'>
    <Pages
     currentPage={currentPage}
     totalPages={totalPages}
     onPageChange={handlePageChange}
     
    />
    </div>
    
    </div>
  )
}

export default Movies


// https://api.themoviedb.org/3/movie/popular?api_key=e4abb58862236c98c1abf704680c2e1c&language=en-US&page=1