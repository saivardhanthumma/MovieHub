import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {
  const [watchList,setWatchList]=useState([])
  const handleRemoveWatchList = (movieObj) => {
    setWatchList(prevList => {
      const filteredList = prevList.filter(movie => movie.id !== movieObj.id);
      console.log(filteredList);
      localStorage.setItem('moviesApp',JSON.stringify(filteredList))
      return filteredList;
    });
  };
  

  const handleAddWatchList = (movieObj) => {
    setWatchList(prevList => {
      const updatedList = prevList.includes(movieObj) 
        ? prevList.filter(movie => movie.id !== movieObj.id) 
        : [...prevList, movieObj];
      console.log(updatedList);

      localStorage.setItem('moviesApp',JSON.stringify(updatedList))
      return updatedList;
    });
  };

  useEffect(()=>{
    let moviesFromLocalStorage=localStorage.getItem("moviesApp")
    
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))

  },[])

  let sortIncrease =()=>{

    let sortedIncresing=watchList.sort((A,B) =>{
      return A.vote_average-B.vote_average
    })
    setWatchList([...sortedIncresing])
  }
  let sortDecrease =()=>{
    let sortedDecresing=watchList.sort((A,B) =>{
      return B.vote_average-A.vote_average
    })
    setWatchList([...sortedDecresing])

  }

  
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route exact path="/" element={<><Banner /> <Movies watchList={watchList} handleRemoveWatchList={handleRemoveWatchList} handleAddWatchList={handleAddWatchList} /></> } />
          <Route exact path="/watchList" element={<WatchList watchList={watchList} handleRemoveWatchList={handleRemoveWatchList}  sortDecrease={sortDecrease} sortIncrease={sortIncrease}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
