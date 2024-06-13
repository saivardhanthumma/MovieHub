import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import WatchListRow from './WatchListRow';
import { useState } from 'react';
import genreIds from '../utility/genre'


const WatchList = ({watchList,handleRemoveWatchList ,sortDecrease,sortIncrease}) => {

  const [search,setSearch] = useState("")
  
  const [genreList, setGenreList] = useState(["All Genres"]);

  const [currgenre,setCurrentgenre]=useState("All Genres")

  
  let handlegenre = (genre)=>{
    setCurrentgenre(genre)
   console.log(currgenre)
  }
  const handleSearch=(e)=>{
    setSearch(e.target.value)
    
  }

 

  useEffect(() => {
    console.log(search); // Logging the updated value of search
    // Place any logic that needs to run when search state changes here
  }, [search]); 

  useEffect(() => {
    // Update genre list when watchList changes
    let temp = watchList.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]]; // Assuming genre_ids is an array and you want the first genre
    });
    let uniqueTemp=[...new Set(temp)]
  
    setGenreList(['All Genres',...uniqueTemp ]);
  }, [watchList]);
  
  
  return (
    <div>
      <div className='container flex justify-center p-4 overflow-x-auto'>
        {genreList.map((obj)=>(
          
          <button onClick={(e)=>handlegenre(e.target.value)} value={obj} className='btn btn-outline-secondary me-2 btn-sm' type='button'>{obj}</button>
          
        ))}
        
      {/* <button className='btn btn-info text-white me-2 btn-sm' type='button'>All Genres</button>
      <button className='btn btn-outline-secondary me-2 btn-sm' type='button'>Action</button>
      <button className='btn btn-outline-secondary me-2 btn-sm' type='button'>Comedy</button> */}
      {/* Add more buttons for other genres as needed */}
        
    </div>
      <div className='text-center m-2 mb-4 d-flex justify-content-center'>
      <Form.Control onChange={handleSearch} type="text" placeholder="search for Movies"  className='w-[18rem]' />
      </div>
      <div className='container table-responsive '>
        <table className='table  table-bordered'>
          <thead className='table-light text-center'>
            <tr >
              
              <th>Name</th>
              <th className='flex  justify-center'>
              <div className='pe-2' onClick={sortDecrease}><i class="fa-solid fa-arrow-down"></i></div>
                <div className=''>Ratings</div>
                <div className='ps-2' onClick={sortIncrease}><i class="fa-solid fa-arrow-up"></i></div>
              </th>
              
             
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj)=>{
              if (currgenre==="All Genres"){
                return true
              }else{
                return genreIds[movieObj.genre_ids[0]]===currgenre 
              }
            }).filter((movieObj)=>{
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj)=>(
              <WatchListRow key={movieObj.id} movieObj={movieObj} handleRemoveWatchList={handleRemoveWatchList} sortDecrease={sortDecrease} sortIncrease={sortIncrease}/>
            ))}
           
            
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default WatchList