import React from "react";
import "../styles/Pagination.scss";

const Pagination = ({ currentPage, totalPages, changePage }) => {
  let pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }
  console.log("current page: ", currentPage, "pages: ", pages);
  const showPages = pages.slice(currentPage - 3, currentPage + 2);
  console.log(showPages);
  return (
    <div className="pag">
    <button onClick={() => changePage(1)}>first</button>
      {showPages.map((page) => (
        <button
          onClick={() => changePage(page)}
          className={page === currentPage ? "page page__current" : "page"}
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
