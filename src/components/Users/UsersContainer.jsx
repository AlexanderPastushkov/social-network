import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../Hoc/withAuthRedirect";
import { follow, requestUsers, unfollow } from "../../redux/users-reducer.ts";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getPortionSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter,
} from "../../redux/users-selectors";
import Preloader from "../Common/Preloader/Pleloader";

import Users from "./Users.tsx";
class UsersContainer extends React.Component {
  // constructor(props) {
  //   super(props); если конструктор не делает ничего другого,кроме как делегирует полномочия Реакт компоненте то можно не писать
  // }
  componentDidMount() {
    let { currentPage, pageSize, filter } = this.props;
    this.props.requestUsers(currentPage, pageSize, filter);
    // this.props.toggleIsFetching(true);
    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.pageSize) //axios.create -> we make request from DAL
    //   .then((data) => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //   });
  }
  onPageChanged = (pageNumber) => {
    const { pageSize, filter } = this.props;
    this.props.requestUsers(pageNumber, pageSize, filter);
  };
  onFilterChanged = (filter) => {
    let { pageSize } = this.props;
    this.props.requestUsers(1, pageSize, filter);
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
          onFilterChanged={this.onFilterChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state), //using selectors
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state),
  };
};
export default compose(
  connect(mapStateToProps, {
    requestUsers,
    follow,
    unfollow,
  }),
  withAuthRedirect
)(UsersContainer);
