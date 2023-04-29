import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MusicContainer from "./components/Music/MusicContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

//получаем пропсы от родителя index.js
const App = (props) => {
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
};

export default App;
