import React from "react";
import "../styles/Pagination.scss";

const Pagination = ({ currentPage, totalPages, changePage }) => {
  let pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }
  console.log("current page: ", currentPage, "pages: ", pages);
  const showPages = pages.slice(currentPage - 3, 20);
  console.log(showPages);
  return (
    <div className="pag">
      {showPages.map((page) => (
        <button
          onClick={() => changePage(page)}
          className={page === currentPage ? "page page__current" : "page"}
          key={page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
