import { getAuth } from "./auth-reducer";

const INITIALIZED_SUCCESSFULLY = "app-reducer/INITIALIZED_SUCCESSFULLY";
const CATCH_GLOBAL_ERROR = "app-reducer/CATCH_GLOBAL_ERROR";

let initialState = {
  initialized: false,
  messageError: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESSFULLY:
      return {
        ...state,
        initialized: true,
      };
    case CATCH_GLOBAL_ERROR:
      return {
        ...state,
        messageError: action.messageError,
      };
    default:
      return state;
  }
};
//========================================================================================================================================================
//action-creator
export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESSFULLY,
  };
};
export const catchGlobalErrorMessage = (messageError) => {
  return {
    type: CATCH_GLOBAL_ERROR,
    messageError,
  };
};
//========================================================================================================================================================
//thunk-creator
export const catchGlobalError = (messageError) => {
  return (dispatch) => {
    dispatch(catchGlobalErrorMessage(messageError));
    setTimeout(() => {
      dispatch(catchGlobalErrorMessage(null));
    }, 4000);
  };
};

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuth()); //we return that promise in auth-reducer
    // dispatch(smthElse)
    // dispatch(smthElse)
    Promise.all([promise]).then(() => {
      //Promise.all если много промисов--->помещаем в массив
      dispatch(initializedSuccess());
    });
  };
};
export default appReducer;
