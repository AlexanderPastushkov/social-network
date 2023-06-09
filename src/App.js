import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/Common/Preloader/Pleloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import NewsContainer from "./components/News/NewsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { withRouter } from "./hoc/withRouter";
import { initializeApp } from "./redux/app-reducer";

//получаем пропсы от родителя index.js
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="wrapper_content ">
          <Routes>
            <Route path="/profile/" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />{" "}
            </Route>
            <Route path="/dialogs" element={<DialogsContainer />} />

            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp: initializeApp,
  })
)(App);
