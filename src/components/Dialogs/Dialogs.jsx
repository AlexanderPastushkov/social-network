import React, { useEffect } from "react";
import { reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { createField, Textarea } from "../Common/FormsControls/FormsControls";
import Paginator from "../Common/Paginator/Paginator";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({
  dialogsPage: {
    dialogsDataUsers,
    messagesData,
    pageSize,
    totalUsersCount,
    currentPage,
  },
  addMessage,
  addAllMessages,
  setDialogsDataUsers,
}) => {
  let url = "https://jsonplaceholder.typicode.com/";
  useEffect(() => {
    fetch(`${url}posts`)
      .then((response) => response.json())
      .then((data) => addAllMessages(data));
  }, [url]);
  useEffect(() => {
    fetch(`${url}users`)
      .then((response) => response.json())
      .then((data) => setDialogsDataUsers(data));
  }, [url]);
  let dialogsElements = dialogsDataUsers.map((u) => (
    <DialogItem users={u} key={u.id} />
  ));
  let messagesElements = messagesData.map((m, index) => (
    <Message message={m} key={m.id} />
  ));

  const addNewMessage = (values) => {
    addMessage(values.message); //add our message to BLL
  };

  return (
    <div>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.formMessage}>
        <DialogsReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const DialogsForm = (props) => {
  const maxLength40 = maxLengthCreator(40);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField(
          "Enter your message",
          "message",
          [required, maxLength40],
          Textarea
        )}
      </div>
      <div>
        <button className={s.btn}>Send</button>
      </div>
    </form>
  );
};

const DialogsReduxForm = reduxForm({
  form: "dialogs",
})(DialogsForm);
export default Dialogs;
