import React from "react";
import s from "./Users.module.css";
import image from "../../assets/Images/images.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
              key={p}
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
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : image}
                    alt="photo"
                    className={s.img}
                  />
                </NavLink>
              </div>
              <div>
                {/* ИСПОЛЬЗУЕМ ТЕРНАРНЫЙ ОПЕРАТОР ЧТОБЫ МЕНЯТЬ НАДПИСЬ КНОПКИ ПО КЛИКУ */}
                {u.followed ? (
                  <button
                    className={s.btn}
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "0f1cff10-61c5-4862-9131-225965aecd70",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={s.btn}
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "0f1cff10-61c5-4862-9131-225965aecd70",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                        });
                    }}
                  >
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
