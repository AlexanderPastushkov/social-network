const ADD_MESSAGE = "dialogs/ADD-MESSAGE";
const SET_POSTS = "dialogs/SET_POSTS";
const SET_USERS = "dialogs/SET_USERS";
const SET_CURRENT_PAGE = "dialogs/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "dialogs/SET_TOTAL_COUNT";

// export type InitialStateType = typeof initialState;
// type DialogType = {
//   id: number;
//   name: string;
// };
// type MessageType = {
//   id: number;
//   message: string;
// };
// let initialState = {
//   dialogs: [
//     { id: 1, name: "Sanya" },
//     { id: 2, name: "Sanek" },
//     { id: 3, name: "Darya" },
//     { id: 4, name: "Tima" },
//     { id: 5, name: "Olya" },
//   ] as Array<DialogType>,
//   messages: [
//     { id: 1, message: "message #1" },
//     { id: 2, message: "message #2" },
//     { id: 3, message: "message #3" },
//     { id: 4, message: "message #4" },
//     { id: 5, message: "message #5" },
//   ] as Array<MessageType>,
//   pageSize: 20,
//   totalUsersCount: 0,
//   currentPage: 1,
// };
let initialState;
const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = { id: 6, message: action.newMessageBody };
      return {
        ...state,
        dialogs: [...state.dialogs, body],
      };
    case SET_POSTS:
      return {
        ...state,
        messages: action.postsData,
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
// type AddMessageActionCreatorType = {
//   type: typeof ADD_MESSAGE;
//   newMessageBody: string;
// };
// export const addMessage = (
//   newMessageBody: string
// ): AddMessageActionCreatorType => {
//   return {
//     type: ADD_MESSAGE,
//     newMessageBody,
//   };
// };

export const addAllPosts = (postsData) => {
  return {
    type: SET_POSTS,
    postsData,
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
