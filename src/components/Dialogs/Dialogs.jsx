import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import {
  addMessageCreator,
  updateMessageBodyCreator,
} from "../../redux/state.js";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let addMessage = () => {
    props.dispatch(addMessageCreator());
  };

  let onMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateMessageBodyCreator(body)); //update message in state(bll) FLUX
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.formMessage}>
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={onMessageChange} //updating state (bll) FLUX
            value={props.dialogsPage.newMessageBody}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage} className={s.btn}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
