import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import musicReducer from "./music-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      newNewsText: "random",
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
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._state.musicPage = musicReducer(this._state.musicPage, action);
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
    this._state.newsPage = newsReducer(this._state.newsPage, action);

    this._callSubscriber(this._state);
  },
};

//========================================================================================================================================================

//========================================================================================================================================================

//========================================================================================================================================================

window.store = store;
console.log(store);
export default store;
