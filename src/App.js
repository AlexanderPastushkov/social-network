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
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar sidebarFriends={props.appState.sidebar.sidebarFriends} />
        <div className="wrapper_content ">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  profilePage={props.appState.profilePage}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogsData={props.appState.messagesPage.dialogsData}
                  messagesPage={props.appState.messagesPage}
                  updateNewMessageText={props.updateNewMessageText}
                  addMessage={props.addMessage}
                />
              }
            />
            <Route
              path="/news"
              element={<News news={props.appState.newsPage.newsData} />}
            />
            <Route
              path="/music"
              element={<Music mus={props.appState.musicPage.musicData} />}
            />
            <Route path="/settings" element={<Set />} />
            <Route
              path="/friends"
              element={
                <Friends friends={props.appState.friendsPage.friendsData} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
