import React from "react";
import { NavLink } from "react-router-dom";
import image from "../../assets/Images/images.png";
import s from "./Users.module.css";

const User = ({ user, ...props }) => {
  return (
    <div>
      <div>
        <div className={s.follow}>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : image}
              alt="photo"
              className={s.img}
            />
          </NavLink>
        </div>
        <div>
          {/* ИСПОЛЬЗУЕМ ТЕРНАРНЫЙ ОПЕРАТОР ЧТОБЫ МЕНЯТЬ НАДПИСЬ КНОПКИ ПО КЛИКУ */}
          {user.followed ? (
            <button
              className={s.btn}
              disabled={props.followingInProgress.some((id) => id === user.id)} //если кто-нибудь из этого массива равен айдишке тогда метод some ->true
              onClick={() => {
                props.unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.includes(user.id)} //можно и через includes
              className={s.btn}
              onClick={() => {
                props.follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div>
        <div className={s.userInfo}>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
