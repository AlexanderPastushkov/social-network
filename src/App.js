import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
//получаем пропсы от родителя index.js
const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="wrapper_content ">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/news" element={<NewsContainer />} />
          {/* <Route
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
