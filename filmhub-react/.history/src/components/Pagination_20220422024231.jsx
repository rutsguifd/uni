import React, { useEffect, useMemo, useState } from "react";
import "../styles/Pagination.scss";

const Pagination = ({ currentPage, totalPages, changePage }) => {
  const sideButtonCount = 2;
  function createPages(total) {
    let pages = [];
    for (let i = 0; i < total; i++) {
      pages.push(i + 1);
    }
    return pages;
  }
  let pages = useMemo(() => createPages(totalPages), [totalPages]);
  console.log("current page:", currentPage,"totalPages:", totalPages, "pages:", pages);
  const [rPages, setrPages] = useState([]);
  useEffect(() => {
    if (currentPage == 1 || currentPage == 2) {
      setrPages([1, 2, 3, 4, 5]);
    }
    else if (currentPage == totalPages || currentPage == totalPages - 1) {
      setrPages([
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]);
    }
    else setrPages(pages.slice(currentPage - 3, currentPage+sideButtonCount));
  }, [currentPage, pages, totalPages]);
  console.log(rPages);
  return (
    <div className="pag">
      <button onClick={() => changePage(1)}>first</button>
      {rPages.map((page) => (
        <button
          onClick={() => changePage(page)}
          className={page == currentPage ? "page page__current" : "page"}
          key={page}
        >
          {page}
        </button>
      ))}
      <button onClick={() => changePage(totalPages)}>last</button>
    </div>
  );
};

export default Pagination;
