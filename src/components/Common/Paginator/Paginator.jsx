import React from "react";
import s from "./Paginator.module.css";

const Paginator = ({
  pageSize,
  currentPage,
  onPageChanged,
  totalUsersCount,
}) => {
  let pagesCount = Math.ceil(
    totalUsersCount / pageSize // округляем до большего чтоб все страницы отображались
  );
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let slicedPages;
  let curPage = currentPage;
  if (curPage - 3 < 0) {
    slicedPages = pages.slice(0, 5);
  } else {
    slicedPages = pages.slice(curPage - 3, curPage + 2);
  }
  return (
    <div>
      <div className={s.pagination}>
        {slicedPages.map((p, index) => (
          <div
            key={index}
            className={currentPage === p ? s.selectedPage : s.nonSelected}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paginator;
