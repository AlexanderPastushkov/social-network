import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Set from "./components/Set/Set";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
//получаем пропсы от родителя index.js
const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar sidebarFriends={props.state.sidebar.sidebarFriends} />
      <div className="wrapper_content ">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs"
            element={
              <Dialogs
                dialogsData={props.state.dialogsPage.dialogsData}
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
                store={props.store}
              />
            }
          />
          <Route
            path="/news"
            element={<News news={props.state.newsPage.newsData} />}
          />
          <Route
            path="/music"
            element={<Music mus={props.state.musicPage.musicData} />}
          />
          <Route path="/settings" element={<Set />} />
          <Route
            path="/friends"
            element={<Friends friends={props.state.friendsPage.friendsData} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
