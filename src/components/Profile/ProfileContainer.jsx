import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { setUserProfile } from "../../redux/profile-reducer";
import Preloader from "../Common/Preloader/Pleloader";
import Profile from "./Profile";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
class ProfileContainer extends React.Component {
  render() {
    console.log(this.props);
    return <Profile {...this.props} />;
  }
  componentDidMount() {
    let userId = this.props.match.params.userId;
    console.log(userId);
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        console.log(response.data);
        this.props.setUserProfile(response.data);
      });
  }
}
let mapStateToProps = (state) => ({ profile: state.profilePage.profile });
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
