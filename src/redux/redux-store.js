import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import musicReducer from "./music-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  musicPage: musicReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;

export default store; //export to Provider

//========================================================================================================================================================
