import React from "react";
import { connect } from "react-redux";
import { getAuth, logout, setUserData } from "../../redux/auth-reducer";
import Header from "./Header";
import s from "./Header.module.css";

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
