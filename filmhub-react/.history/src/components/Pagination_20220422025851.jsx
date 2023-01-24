import React, { useEffect, useMemo, useState } from "react";
import "../styles/Pagination.scss";

const Pagination = ({ currentPage, totalPages, changePage }) => {
  function createPages(total) {
    let pages = [];
    for (let i = 0; i < total; i++) {
      pages.push(i + 1);
    }
    return pages;
  }
  let pages = useMemo(() => createPages(totalPages), [totalPages]);
  const [rPages, setrPages] = useState([]);
  useEffect(() => {
    if (currentPage === 1 || currentPage === 2) {
      setrPages([1, 2, 3, 4, 5]);
    }
    else if (currentPage === totalPages || currentPage === totalPages - 1) {
      setrPages([
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]);
    }
    else setrPages(pages.slice(currentPage - 3, currentPage+2));
  }, [currentPage, pages, totalPages]);
  return (
    <div className="pag">
      <button className="page" onClick={() => changePage(1)}>first</button>
      {rPages.map((page) => (
        <button
          onClick={() => changePage(page)}
          className={page === currentPage ? "page page__current" : "page"}
          key={page}
        >
          {page}
        </button>
      ))}
      <button className="page" onClick={() => changePage(totalPages)}>last</button>
    </div>
  );
};

export default Pagination;
