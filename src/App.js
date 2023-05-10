import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MusicContainer from "./components/Music/MusicContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from "react";
import { getAuth } from "./redux/auth-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "./hoc/withRouter";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Pleloader";

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
            <Route path="/news" element={<NewsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/music" element={<MusicContainer />} />
            <Route path="/login" element={<Login />} />

            {/* <Route path="/settings" element={<Set />} />
          <Route
            path="/friends"
            element={<Friends friends={props.state.friendsPage.friendsData} />}
          /> */}
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
