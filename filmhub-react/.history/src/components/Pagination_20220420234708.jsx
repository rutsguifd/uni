import React from "react";

const Pagination = ({currentPage, totalPages}) => {
    let pages = [];
    for (let i = 0; i<totalPages; i++) {
        pages.push(i+1);
    }
    const showPages = pages.slice(currentPage-3, currentPage+2)
    console.log(showPages);
    return (
    <div>
      {
        showPages.map((page)=>(
              <button key={page}>{page}</button>
          ))
      }
    </div>
  );
};

export default Pagination;
