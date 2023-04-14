import React from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "../../hoc/withRouter";
import { getProfile, setUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  render() {
    return <Profile {...this.props} />;
  }
  componentDidMount() {
    let userId = this.props.match.params.userId;
    console.log(userId);
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
export default compose(
  connect(mapStateToProps, {
    getProfile: getProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
