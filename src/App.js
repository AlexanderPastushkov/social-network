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
import DialogsContainer from "./components/Dialogs/DialogsContainer";
//получаем пропсы от родителя index.js
const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar sidebarFriends={props.state.sidebar.sidebarFriends} />
      <div className="wrapper_content ">
        <Routes>
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route
            path="/dialogs"
            element={<DialogsContainer store={props.store} />}
          />
          {/* <Route
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
          /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
