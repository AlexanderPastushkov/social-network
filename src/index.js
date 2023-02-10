import React from "react";
// import * as ReactDOM from "react-dom/client";
import "./index.css";
import { rerenderEntireTree } from "./render";
import state from "./redux/state.js";

rerenderEntireTree(state);
