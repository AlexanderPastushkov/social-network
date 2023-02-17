const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const ADD_MESSAGE = "ADD-MESSAGE";
let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi , it is my first post", likeCount: 120000 },
        { id: 2, message: "Hi , it is my second post", likeCount: 564 },
        { id: 3, message: "Hi , it is my third post", likeCount: 321 },
        { id: 4, message: "Hi , it is my four post", likeCount: 890 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    newsPage: {
      newsData: [
        { id: 1, word: "hi", number: 12 },
        { id: 2, word: "yo", number: 12 },
        { id: 3, word: "hello", number: 12 },
        { id: 4, word: "how are you", number: 15 },
        { id: 5, word: "hello", number: 12 },
      ],
    },
    musicPage: {
      musicData: [
        { dj: "smash", ber: 15 },
        { dj: "moby", ber: 15 },
        { dj: "armin", ber: 15 },
      ],
    },
    friendsPage: {
      friendsData: [
        { friend: "Andrew", id: 1 },
        { friend: "Sasha", id: 2 },
        { friend: "Sveta", id: 3 },
      ],
    },
    sidebar: {
      sidebarFriends: [
        { friend: "Andrew", id: 1 },
        { friend: "Sasha", id: 2 },
        { friend: "Sveta", id: 3 },
      ],
    },
  },
  _callSubscriber() {
    console.log("State was changed");
  },
  //========================================================================================================================================================

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //наблюдатель (паттерн)
  },
  //========================================================================================================================================================

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.messagesData.push({ id: 6, message: newMessage });
      this._state.dialogsPage.newMessageBody = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.entireMessage;
      this._callSubscriber(this._state);
    }
  },
};

//========================================================================================================================================================

export const addPostCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

//========================================================================================================================================================
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
//========================================================================================================================================================

window.store = store;
console.log(store);
export default store;
