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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />

        <div className="wrapper_content ">
          <Routes>
            <Route
              path="/profile"
              element={<Profile postsData={props.postsData} />}
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogsData={props.dialogsData}
                  messagesData={props.messagesData}
                />
              }
            />

            <Route path="/news" element={<News news={props.news} />} />

            <Route
              path="/music"
              element={<Music mus={props.musicAtribute} />}
            />
            <Route path="/settings" element={<Set />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
