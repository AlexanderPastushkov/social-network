import React, { useState } from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";
import UsersSearchForm from "./UsersSearchForm";
import img from "../../images/search.png";

const Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  onFilterChanged,
  users,
  portionSize,
  ...restProps
}) => {
  const [searchingMode, setSearchingMode] = useState(false);

  return (
    <>
      {searchingMode ? (
        <UsersSearchForm onFilterChanged={onFilterChanged} />
      ) : (
        <div className={s.searchButton}>
          <button
            onClick={() => {
              setSearchingMode(true);
            }}
          >
            <img className={s.imgSearch} src={img} alt="search" />
          </button>
        </div>
      )}

      <Paginator
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
      />
      <div className={s.usersItems}>
        {users.map((u) => (
          <User user={u} {...restProps} key={u.id} />
        ))}
      </div>
    </>
  );
};

export default Users;
