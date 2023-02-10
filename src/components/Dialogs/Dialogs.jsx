import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.messagesPage.messagesData.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageEl = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageEl.current.value;
    props.updateNewMessageText(text); //update post in state(bll)
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.formMessage}>
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageEl}
            value={props.messagesPage.newMessageText} //in props we get value which click on keyboard
          />
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
