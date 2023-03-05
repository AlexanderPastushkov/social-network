import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import musicReducer from "./music-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
});

let store = legacy_createStore(reducers);
window.store = store;

export default store;

//========================================================================================================================================================
