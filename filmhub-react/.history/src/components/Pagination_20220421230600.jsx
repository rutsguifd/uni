import React from "react";
import "../styles/Pagination.scss";

const Pagination = ({ currentPage, totalPages, changePage }) => {
  let pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i + 1);
  }
  console.log("current page: ", currentPage, "pages: ", pages);
  let showPages = pages.slice(currentPage - 3, currentPage + 2);
  if(currentPage===1 || currentPage===2) {showPages=[1,2,3,4,5];}
  if(currentPage===totalPages || currentPage===totalPages-1) {showPages=[totalPages-4, totalPages-3, totalPages-2, totalPages-1, totalPages];}
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
