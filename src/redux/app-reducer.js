import { getAuth } from "./auth-reducer";

const INITIALIZED_SUCCESSFULLY = "INITIALIZED_SUCCESSFULLY";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESSFULLY:
      return {
        ...state,
        initialized: true,
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
//========================================================================================================================================================
//thunk-creator
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
