import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";

const Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  portionSize,
  ...Restprops
}) => {
  return (
    <>
      <Paginator
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
      />
      <div className={s.usersItems}>
        {users.map((u) => (
          <User user={u} {...Restprops} key={u.id} />
        ))}
      </div>
    </>
  );
};

export default Users;
