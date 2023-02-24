import React from "react";
import { connect } from "react-redux";
import {
  addMessageCreator,
  updateMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage, //object - key:dialogsPage (идет в название пропса в Dialogs),value:state.dialogsPage(объект с массивами [dialogsData] [messagesData])
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageCLick: () => {
      dispatch(addMessageCreator()); //dispatch our action, which has been created by addMessageCreator
    },
    onMessageChange: (body) => {
      dispatch(updateMessageBodyCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); //we connect our data to store and make container component
export default DialogsContainer;

// const DialogsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogsPage;
//         let onSendMessageCLick = () => {
//           store.dispatch(addMessageCreator());
//         };

//         let onMessageChange = (body) => {
//           store.dispatch(updateMessageBodyCreator(body)); //update message in state(bll) FLUX
//         };
//         return (
//           <Dialogs
//             addMessage={onSendMessageCLick}
//             onMessageChange={onMessageChange}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
