import React from "react";
// import * as ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
let postsData = [
  { id: 1, message: "Hi , it is my first post", likeCount: 10 },
  { id: 1, message: "Hi , it is my second post", likeCount: 12 },
  { id: 1, message: "Hi , it is my third post", likeCount: 14 },
];
let dialogsData = [
  { id: 1, name: "Dima" },
  { id: 2, name: "viktor" },
  { id: 3, name: "sanyua" },
  { id: 4, name: "valera" },
  { id: 5, name: "dasha" },
];
let messagesData = [
  { id: 1, message: "hi", likesCount: 12 },
  { id: 2, message: "yo", likesCount: 12 },
  { id: 3, message: "hello", likesCount: 12 },
  { id: 4, message: "how are you", likesCount: 15 },
  { id: 5, message: "hello", likesCount: 12 },
];
let newsData = [
  { id: 1, word: "hi", number: 12 },
  { id: 2, word: "yo", number: 12 },
  { id: 3, word: "hello", number: 12 },
  { id: 4, word: "how are you", number: 15 },
  { id: 5, word: "hello", number: 12 },
];
let musicData = [
  { dj: "smash", ber: 15 },
  { dj: "moby", ber: 15 },
  { dj: "armin", ber: 15 },
];
root.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
      news={newsData}
      musicAtribute={musicData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
