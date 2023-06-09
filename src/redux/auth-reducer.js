import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "auth-Reducer/SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
  };
};

export const getAuth = () => {
  return async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data; //здесь порядок смотрим в консоли как пришли данные
      dispatch(setUserData(id, email, login, true)); //здесь порядок смотрим как указали в редьюсере
    }
  };
};
export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    console.log(response);
    if (response.data.resultCode === 0) {
      dispatch(getAuth());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages
          : "some error";
      dispatch(stopSubmit("login", { _error: message })); //login --->unique name of our form
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  };
};
export default authReducer;
