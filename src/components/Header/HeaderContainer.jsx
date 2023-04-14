import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { headerAPI } from "../../api/api";
import { getAuth, setUserData } from "../../redux/auth-reducer";
import Header from "./Header";
import s from "./Header.module.css";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }
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
  getAuth: getAuth,
})(HeaderContainer);
