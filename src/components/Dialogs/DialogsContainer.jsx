import React from "react";
import {
  addMessageCreator,
  updateMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;
  let onSendMessageCLick = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onMessageChange = (body) => {
    props.store.dispatch(updateMessageBodyCreator(body)); //update message in state(bll) FLUX
  };
  return (
    <Dialogs
      addMessage={onSendMessageCLick}
      onMessageChange={onMessageChange}
      dialogsPage={state}
    />
  );
};
export default DialogsContainer;
