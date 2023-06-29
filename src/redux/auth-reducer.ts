import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "auth-Reducer/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth-Reducer/GET_CAPTCHA_URL_SUCCESS";

export type InitialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};

let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, //if null, then captcha is not required
};

const authReducer = (state = initialState, action): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

type SetUserDataActionPayloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean | null;
};

type SetUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetUserDataActionPayloadType;
};

export const setUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetUserDataActionType => {
  return {
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
  };
};

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccessActionType => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl },
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
export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string | null | undefined
) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    console.log(response);
    if (response.data.resultCode === 0) {
      //success, get auth data
      dispatch(getAuth());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
    }
  };
};

export const getCaptchaUrl = () => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
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
