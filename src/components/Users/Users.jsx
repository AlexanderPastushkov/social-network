import React from "react";
import s from "./Users.module.css";
import image from "../../assets/Images/images.png";

const Users = (props) => {
  let pagesCount = Math.ceil(
    props.totalUsersCount / props.pageSize // округляем до большего чтоб все страницы отображались
  );
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let slicedPages;
  let curPage = props.currentPage;
  if (curPage - 3 < 0) {
    slicedPages = pages.slice(0, 5);
  } else {
    slicedPages = pages.slice(curPage - 3, curPage + 2);
  }
  return (
    <div>
      <div className={s.pagination}>
        {slicedPages.map((p) => {
          return (
            <div
              className={
                props.currentPage === p ? s.selectedPage : s.nonSelected
              }
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </div>
          );
        })}
      </div>
      <div className={s.usersItems}>
        {props.users.map((u) => (
          <div key={u.id}>
            <div>
              <div className={s.follow}>
                <img
                  src={u.photos.small != null ? u.photos.small : image}
                  alt="photo"
                  className={s.img}
                />
              </div>
              <div>
                {/* ИСПОЛЬЗУЕМ ТЕРНАРНЫЙ ОПЕРАТОР ЧТОБЫ МЕНЯТЬ НАДПИСЬ КНОПКИ ПО КЛИКУ */}
                {u.followed ? (
                  <button
                    className={s.btn}
                    onClick={() => props.unfollow(u.id)}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button className={s.btn} onClick={() => props.follow(u.id)}>
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div>
              <div className={s.userInfo}>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
