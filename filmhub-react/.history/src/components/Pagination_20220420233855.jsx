import React from "react";

const Pagination = ({currentPage, totalPages}) => {
    //const sideButtonCount = 2;
    let pages = [];
    for (let i = 0; i<totalPages; i++) {
        pages.push(i+1);
    }
    pages.slice(currentPage-2, currentPage+2)
    console.log(pages);
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
