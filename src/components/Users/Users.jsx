import React from "react";
import s from "./Users.module.css";
import image from "../../assets/Images/images.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { followAPI } from "../../api/api";

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
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )} //если кто-нибудь из этого массива равен айдишке тогда метод some ->true
                    onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                      followAPI.unfollowUsers(u.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
                      });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.includes(u.id)} //можно и через includes
                    className={s.btn}
                    onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                      followAPI.followUsers(u.id).then((data) => {
                        if (data.resultCode === 0) {
                          props.follow(u.id);
                        }
                        props.toggleFollowingProgress(false, u.id);
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
