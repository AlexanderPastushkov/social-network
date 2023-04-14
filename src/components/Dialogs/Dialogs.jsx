import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import React from "react";

const Dialogs = (props) => {
  let state = props.dialogsPage; //здесь пришел наш объект с двумя массивами, которые наде преобразовать "мапить"

  let dialogsElements = state.dialogsData.map((d) => (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + d.id}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwZsyf5DxP_1f2efMNz_jBvlAeytorE4Ac65wwMk3jsPl8M68875c3VNwCZPRfVPCWuo&usqp=CAU"
          alt="image"
        />
        {d.name}
      </NavLink>
    </div>
  ));
  let messagesElements = state.messagesData.map((m) => (
    <div className={s.dialog}>{m.message}</div>
  ));

  let addMessage = () => {
    props.addMessage(); //пришел колбэк, который будет диспатчить наш экшн( клик по кнопке "Send" ) в dialogs-reducer, чтобы изменить старый стейт
  };

  let updateMessageBody = (e) => {
    let body = e.target.value;
    props.updateMessageBody(body); //пришел колбэк, который будет диспатчить наш экшн( изменение textarea ) в dialogs-reducer, чтобы изменить старый стейт
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
            onChange={updateMessageBody} //updating state (bll) FLUX
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
