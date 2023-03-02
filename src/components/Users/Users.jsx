import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div className={s.usersItems} key={u.id}>
          <div className={s.img_button}>
            <div>
              <img src={u.photoUrl} alt="photo" className={s.img} />
            </div>
            <div>
              {/* ИСПОЛЬЗУЕМ ТЕРНАРНЫЙ ОПЕРАТОР ЧТОБЫ МЕНЯТЬ НАДПИСЬ КНОПКИ ПО КЛИКУ */}
              {u.followed ? (
                <button className={s.btn} onClick={() => props.follow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button className={s.btn} onClick={() => props.unfollow(u.id)}>
                  Follow
                </button>
              )}
            </div>
          </div>
          <div>
            <div className={s.userInfo}>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div className={s.userLocation}>
              <div className={s.userCountry}>{u.location.country}</div>
              <div className={s.userCity}>{u.location.city}</div>
            </div>
          </div>
        </div>
      ))}
      <div>
        {props.buttons.map((b) => (
          <div key={b.id}>
            {b.clicked ? (
              <button
                onClick={() => props.buttonChange(b.id)}
                className={s.btn1}
              >
                ТИМА НАЖМИ НА КНОПКУ
              </button>
            ) : (
              <button onClick={() => props.timaShow(b.id)} className={s.btn1}>
                Ливерпуль ЧЕМПИОН!!!
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
