import React from "react";
import { connect } from "react-redux";
import {
  buttonsAC,
  followAC,
  setUsersAC,
  timaAC,
  unfollowAC,
} from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    buttons: state.usersPage.buttons,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    buttonChange: (btnId) => {
      dispatch(buttonsAC(btnId));
    },
    timaShow: (btnId) => {
      dispatch(timaAC(btnId));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
