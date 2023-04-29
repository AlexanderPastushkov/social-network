import React from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "../../hoc/withRouter";
import {
  getProfile,
  getStatus,
  setUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  render() {
    return (
      <Profile
        {...this.props}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
  componentDidMount() {
    let userId = this.props.match.params.userId;
    console.log(userId);
    if (!userId) {
      userId = 28437;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});
export default compose(
  connect(mapStateToProps, {
    getProfile: getProfile,
    getStatus: getStatus,
    updateStatus: updateStatus,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
