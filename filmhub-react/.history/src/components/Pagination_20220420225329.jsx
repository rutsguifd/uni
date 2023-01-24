import React from "react";

const Pagination = (currentPage, totalPages) => {
    const sideButtonCount = 2;
    let pages = [];
    for (let i = 2; i<=currentPage+2; i++) {
        pages.push(i);
    }
    console.log(pages);
    return (
    <div>
      xd
    </div>
  );
};

export default Pagination;
