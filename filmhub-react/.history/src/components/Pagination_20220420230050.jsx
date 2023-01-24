import React from "react";

const Pagination = ({currentPage, totalPages}) => {
    const sideButtonCount = 2;
    let pages = [];
    for (let i = currentPage-sideButtonCount; i<=currentPage+sideButtonCount; i++) {
        if(i>0) pages.push(i);
    }
    console.log(pages);
    return (
    <div>
      xd
    </div>
  );
};

export default Pagination;
