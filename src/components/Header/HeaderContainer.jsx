import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUserData } from "../../redux/auth-reducer";
import Header from "./Header";
import s from "./Header.module.css";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data; //здесь порядок смотрим в консоли как пришли данные
          this.props.setUserData(id, email, login); //здесь порядок смотрим как указали в редьюсере
        }
      });
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
export default connect(mapStateToProps, { setUserData: setUserData })(
  HeaderContainer
);
