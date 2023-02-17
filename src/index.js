import React from "react";
import "./index.css";
import store from "./redux/state.js";
// import * as ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import {
//   addMessage,
//   addPost,
//   updateNewMessageText,
//   updateNewPostText,
//   subscribe,
// } from "./redux/state.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
