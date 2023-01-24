import React from "react";

const Pagination = (currentPage, totalPages) => {
    const sideButtonCount = 2;
    const pages = [];
    for (let i = sideButtonCount; i<=currentPage+sideButtonCount; i++) {
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
