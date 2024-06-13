import React, { useState } from "react";
import genreIds from '../utility/genre'

const WatchListRow = ({ movieObj, handleRemoveWatchList }) => {
  // Placeholder for genre names; adjust as per your data structure.
  // const genres = movieObj.genre_ids ? movieObj.genre_ids.join(', ') : 'Unknown';
  

  return (
    <tr className="align-middle text-center">
      <td className="flex items-center justify-center">
        <img
          className="table-image"
          src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
          alt={movieObj.title}
        />
        <div className="ms-3 me-4">{movieObj.title}</div>
      </td>
      <td>{movieObj.vote_average}</td>
      <td>{movieObj.popularity}</td>
      <td>{genreIds[movieObj.genre_ids[0]]}</td>
      <td className="text-danger">
        <button onClick={() => handleRemoveWatchList(movieObj)}>Delete</button>
      </td>
    </tr>
  );
};

export default WatchListRow;
