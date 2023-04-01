import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import {
  follow,
  followingInProgress,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollowingProgress,
  toggleIsFetching,
  unfollow,
} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Pleloader";

import Users from "./Users";
class UsersContainer extends React.Component {
  // constructor(props) {
  //   super(props); если конструктор не делает ничего другого,кроме как делегирует полномочия Реакт компоненте то можно не писать
  // }
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize) //axios.create -> we make request from DAL
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);

        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber); //dispatch to store our pagenumber in currentPage
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(pageNumber, this.props.pageSize) //axios.create -> we make request from DAL
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress: toggleFollowingProgress,
})(UsersContainer);
