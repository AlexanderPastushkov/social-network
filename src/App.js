import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/Common/Preloader/Pleloader";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginFormik from "./components/Login/LoginFormik";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { withRouter } from "./Hoc/withRouter";
import { initializeApp } from "./redux/app-reducer.ts";

const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
//our component misses bundle for the first render of our app, if we dont use it

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
          <Suspense fallback={"LOADING..."}>
            <Routes>
              <Route exact path="/" element={<Navigate to={"/profile"} />} />
              <Route path="/profile/" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />{" "}
              </Route>
              <Route
                path="/dialogs"
                element={
                  <div style={{ height: "100vh" }}>
                    this page is under construction
                  </div>
                }
              />
              <Route
                path="/music"
                element={
                  <div style={{ height: "100vh" }}>
                    this page is under construction
                  </div>
                }
              />
              <Route
                path="/video"
                element={
                  <div style={{ height: "100vh" }}>
                    this page is under construction
                  </div>
                }
              />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginFormik />} />
              <Route path="*" element={<div> 404 NOT FOUND</div>} />
            </Routes>
          </Suspense>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    globalError: state.app.globalError,
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp: initializeApp,
  })
)(App);
