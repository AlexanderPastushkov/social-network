import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import image from "../../assets/Images/images.png";

class Users extends React.Component {
  // constructor(props) {
  //   super(props); если конструктор не делает ничего другого,кроме как делегирует полномочия Реакт компоненте то можно не писать
  // }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        console.log(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize // округляем до большего чтоб все страницы отображались
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    let curP = this.props.currentPage;
    let curPF = curP - 5 < 0 ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return (
      <div>
        <div className={s.pagination}>
          {slicedPages.map((p) => {
            return (
              <div
                className={
                  this.props.currentPage === p ? s.selectedPage : s.nonSelected
                }
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </div>
            );
          })}
        </div>
        <div className={s.usersItems}>
          {this.props.users.map((u) => (
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
                      onClick={() => this.props.unfollow(u.id)}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className={s.btn}
                      onClick={() => this.props.follow(u.id)}
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
                {/* <div className={s.userLocation}>
              <div className={s.userCountry}>{u.location.country}</div>
              <div className={s.userCity}>{u.location.city}</div>
            </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
