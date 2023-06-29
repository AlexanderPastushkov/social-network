import { getAuth } from "./auth-reducer.ts";

const INITIALIZED_SUCCESSFULLY = "app-reducer/INITIALIZED_SUCCESSFULLY";
const CATCH_GLOBAL_ERROR = "app-reducer/CATCH_GLOBAL_ERROR";

export type InitialStateType = {
  initialized: boolean;
  messageError: null | string;
};

let initialState: InitialStateType = {
  initialized: false,
  messageError: null,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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
type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESSFULLY;
  //"app-reducer/INITIALIZED_SUCCESSFULLY"<--- nothing except this
};

type CatchGlobalErrorMessageActionType = {
  type: typeof CATCH_GLOBAL_ERROR; //"app-reducer/CATCH_GLOBAL_ERROR"<--- nothing except this
  messageError: string | null;
};
export const initializedSuccess = (): InitializedSuccessActionType => {
  return {
    type: INITIALIZED_SUCCESSFULLY,
  };
};
export const catchGlobalErrorMessage = (
  messageError: string | null
): CatchGlobalErrorMessageActionType => {
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
