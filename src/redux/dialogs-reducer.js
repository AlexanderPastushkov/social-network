const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
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
  newMessageBody: "",
};

export const addMessageCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export const updateMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    entireMessage: body,
  };
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = state.newMessageBody;
      state.messagesData.push({ id: 6, message: newMessage });
      state.newMessageBody = "";
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.entireMessage;
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;
