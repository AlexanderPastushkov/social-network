import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";
import UsersSearchForm from "./UsersSearchForm";

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
  return (
    <>
      <UsersSearchForm onFilterChanged={onFilterChanged} />
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
