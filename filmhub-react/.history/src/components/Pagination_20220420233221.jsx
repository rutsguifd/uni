import React from "react";

const Pagination = ({currentPage, totalPages}) => {
    const sideButtonCount = 2;
    let pages = [];
    for (let i = 0; i<=sideButtonCount.currentPage+1; i++) {
         pages.push(i+1);
    }
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
