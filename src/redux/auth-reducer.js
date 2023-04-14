import { authAPI, headerAPI, usersAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

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
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setUserData = (id, email, login) => {
  return {
    type: SET_USER_DATA,
    data: { id, email, login },
  };
};

export const getAuth = () => {
  return (dispatch) => {
    authAPI.me().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data; //здесь порядок смотрим в консоли как пришли данные
        dispatch(setUserData(id, email, login)); //здесь порядок смотрим как указали в редьюсере
      }
    });
  };
};
export default authReducer;
