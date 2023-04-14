import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import musicReducer from "./music-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  auth: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store; //export to Provider

//========================================================================================================================================================
