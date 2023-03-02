import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let state = props.dialogsPage; //здесь пришел наш объект с двумя массивами, которые наде преобразовать "мапить"
  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let addMessage = () => {
    props.onSendMessageCLick(); //пришел колбэк, который будет диспатчить наш экшн( клик по кнопке "Send" ) в dialogs-reducer, чтобы изменить старый стейт
  };

  let onMessageChange = (e) => {
    let body = e.target.value;
    props.onMessageChange(body); //пришел колбэк, который будет диспатчить наш экшн( изменение textarea ) в dialogs-reducer, чтобы изменить старый стейт
    //update message in state(bll) FLUX
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
            value={state.newMessageBody} //тут значение сначала по-умолчанию,которое в initialState,далее зачищается
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
