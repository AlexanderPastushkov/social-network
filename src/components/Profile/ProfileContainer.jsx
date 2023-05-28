import React from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "../../hoc/withRouter";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  render() {
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
  componentDidMount() {
    let userId = this.props.match.params.userId; //wrap in withRouter
    console.log(userId);
    if (!userId) {
      userId = this.props.authorizedUserId;

      if (!userId) {
        this.props.history.push("/login"); //wrapping in withRouter
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.match.params.userId !== this.props.authorizedUserId) {
  //     this.props.getProfile(this.props.authorizedUserId);
  //     this.props.getStatus(this.props.authorizedUserId);
  //   }
  //   console.log("componentDidUpdate");
  // }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});
export default compose(
  connect(mapStateToProps, {
    getProfile: getProfile,
    getStatus: getStatus,
    updateStatus: updateStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
