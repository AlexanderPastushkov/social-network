import React from "react";
import {
  addMessageCreator,
  updateMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let onSendMessageCLick = () => {
          store.dispatch(addMessageCreator());
        };

        let onMessageChange = (body) => {
          store.dispatch(updateMessageBodyCreator(body)); //update message in state(bll) FLUX
        };
        return (
          <Dialogs
            addMessage={onSendMessageCLick}
            onMessageChange={onMessageChange}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
