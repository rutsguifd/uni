import React from "react";

const Pagination = ({currentPage, totalPages}) => {
    const sideButtonCount = 2;
    console.log(currentPage)
    let pages = [];
    for (let i = currentPage-sideButtonCount; i<=currentPage+sideButtonCount; i++) {
        if(i>0 && i<=totalPages) pages.push(i);
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
