import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hi , it is my first post", likeCount: 120000 },
      { id: 2, message: "Hi , it is my second post", likeCount: 564 },
      { id: 3, message: "Hi , it is my third post", likeCount: 321 },
      { id: 4, message: "Hi , it is my four post", likeCount: 890 },
    ],
    newPostText: "sanek kolobok",
  },
  messagesPage: {
    dialogsData: [
      { id: 1, name: "Dima" },
      { id: 2, name: "viktor" },
      { id: 3, name: "sanya" },
      { id: 4, name: "valera" },
      { id: 5, name: "dasha" },
    ],
    messagesData: [
      { id: 1, message: "hi", likesCount: 12 },
      { id: 2, message: "yo", likesCount: 12 },
      { id: 3, message: "hello", likesCount: 12 },
      { id: 4, message: "how are you", likesCount: 15 },
      { id: 5, message: "hello", likesCount: 12 },
    ],
    newMessageText: "Butterfly",
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
};
window.state = state;
console.log(state);
//========================================================================================================================================================
export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.messagesPage.newMessageText,
    likesCount: 0,
  };
  state.messagesPage.messagesData.push(newMessage);
  state.messagesPage.newMessageText = "";
  rerenderEntireTree(state);
};
export let updateNewMessageText = (newMessage) => {
  state.messagesPage.newMessageText = newMessage;
  rerenderEntireTree(state);
};
//========================================================================================================================================================

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 13340000000,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
