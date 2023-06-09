const ADD_MESSAGE = "dialogs/ADD-MESSAGE";
const SET_MESSAGES = "dialogs/SET_MESSAGES";
const SET_USERS = "dialogs/SET_USERS";
const SET_CURRENT_PAGE = "dialogs/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "dialogs/SET_TOTAL_COUNT";

let initialState = {
  dialogsDataUsers: [],
  messagesData: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = { id: 6, message: action.newMessageBody };
      return {
        ...state,
        messagesData: [...state.messagesData, body],
      };
    case SET_MESSAGES:
      return {
        ...state,
        messagesData: action.messagesData,
      };
    case SET_USERS:
      return {
        ...state,
        dialogsDataUsers: action.users,
      };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    default:
      return state;
  }
};

export const addMessage = (newMessageBody) => {
  return {
    type: ADD_MESSAGE,
    newMessageBody,
  };
};

export const addAllMessages = (messagesData) => {
  return {
    type: SET_MESSAGES,
    messagesData,
  };
};
export const setDialogsDataUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalUsersCount,
  };
};
export default dialogsReducer;
