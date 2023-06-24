import React, { useEffect, useState } from "react";
import s from "./Paginator.module.css";

const Paginator = ({
  pageSize,
  currentPage,
  onPageChanged,
  totalItemsCount,
  portionSize = 5, //quantity of pages what we see on desctop
}) => {
  let pagesCount = Math.ceil(
    totalItemsCount / pageSize // округляем до большего чтоб все страницы отображались
  );
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i); //create empty array and push count of pages in?start with 1
  }

  let portionCount = Math.ceil(pagesCount / portionSize); //quantity of portions, we divide our all pages on 10
  let [portionNumber, setPortionNumber] = useState(
    Math.floor(currentPage / 10) + 1 //rounded to down 1.1--->1 ect.
  );
  useEffect(() => {
    setPortionNumber(Math.ceil(currentPage / portionSize)); //Math.ceil rounded our integer UP
  }, [currentPage]); //при уходе со страницы юзеров на другую и при повторном возвращении на неё,
  // пагинация подгоняется под текущую страницу юзеров, которая записана в userReducer,

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      <div className={s.pagination}>
        {portionNumber > 1 && (
          <button
            className={s.btn}
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            PREV
          </button>
        )}
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p, index) => (
            <span
              key={index}
              className={currentPage === p ? s.selectedPage : s.nonSelected}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          ))}
        {portionCount > portionNumber && (
          <button
            className={s.btn}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
