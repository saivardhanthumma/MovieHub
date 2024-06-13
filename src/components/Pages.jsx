import React from "react";

const Pages = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center my-4 space-x-5">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500 hover:bg-blue-100'}`}
      >
        <i className="fa-solid fa-less-than"></i>
      </button>

      <div>{currentPage}</div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500 hover:bg-blue-100'}`}
      >
        <i className="fa-solid fa-greater-than"></i>
      </button>
    </div>
  );
};

export default Pages;
