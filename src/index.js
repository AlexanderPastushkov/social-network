import React from "react";
import "./index.css";
import store from "./redux/redux-store.js";
// import * as ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux"; //create context

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Provider store={store}>
      {/* create context with redux library */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </HashRouter>
);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Orange"];
const vegetables = ["tomato", "potato", "cucumber", "cabbage", "onion"];
let size = fruits.length;
const filteredArray = fruits.filter((el) => el === "Orange");
const newArray = fruits.concat(vegetables);
const newCreatedArray = [...vegetables, ...fruits];

const isTrue = newArray.includes("Banana");
const stringFruits = newArray.join("^");
const products = stringFruits.split("");

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newMyArr = myArr.flat();
console.log(newMyArr);
