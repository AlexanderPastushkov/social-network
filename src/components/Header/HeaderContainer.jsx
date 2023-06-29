import React from "react";
import { connect } from "react-redux";
import { logout, setUserData } from "../../redux/auth-reducer.ts";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {}
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, {
  setUserData: setUserData,

  logout: logout,
})(HeaderContainer);
