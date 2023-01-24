import React from "react";

const Pagination = ({currentPage, totalPages}) => {
    //const sideButtonCount = 2;
    let pages = [];
    for (let i = 0; i<totalPages; i++) {
        pages.push(i+1);
    }
    const showPages = pages.slice(currentPage-3, currentPage+1)
    console.log(showPages);
    return (
    <div>
      {
          pages.map((page)=>(
              <button key={page}>{page}</button>
          ))
      }
    </div>
  );
};

export default Pagination;
