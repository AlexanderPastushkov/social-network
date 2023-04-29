const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Dima" },
    { id: 2, name: "viktor" },
    { id: 3, name: "sanya" },
    { id: 4, name: "valera" },
    { id: 5, name: "dasha" },
  ],
  messagesData: [
    { id: 1, message: "hi" },
    { id: 2, message: "yo" },
    { id: 3, message: "hello" },
    { id: 4, message: "how are you" },
    { id: 5, message: "hello" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let body = { id: 6, message: action.newMessageBody };
      return {
        ...state,
        messagesData: [...state.messagesData, body],
      };

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

export default dialogsReducer;
