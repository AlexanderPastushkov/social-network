import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  newsPage: newsReducer,
});

let store = legacy_createStore(reducers);
window.store = store;

export default store;

//========================================================================================================================================================
const arr = [1, 2, 3];
const mutateArray = (arr) => {
  arr.pop();
};
mutateArray(arr);
console.log(arr); //[1,2]
//========================================================================================================================================================
const array = [1, 2, 3];
const removeLastItem = (arr) => {
  const newArr = [].concat(arr);
  newArr.pop();
  return newArr;
};
removeLastItem(array); //pure function
console.log(array); //[1,2,3]
//========================================================================================================================================================

let userInfo = {
  name: "Alexander",
  age: 34,
  address: {
    city: "Zhlobin",
    street: "Bazrnaya",
  },
  showInfo() {
    console.log(this.address);
  },
};
let obj1 = {
  name: 90,
  age: "kir",
};
let user = { ...userInfo, ...obj1 };

console.log(user);
