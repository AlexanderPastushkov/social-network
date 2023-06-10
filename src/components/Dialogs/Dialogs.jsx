import React, { useEffect } from "react";
import { reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { createField, Textarea } from "../Common/FormsControls/FormsControls";
import UserItem from "./UserItem/UserItem";
import DialogItem from "./UserItem/UserItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({
  dialogsPage: {
    dialogsDataUsers,
    postsData,
    pageSize,
    totalUsersCount,
    currentPage,
  },
  addMessage,
  addAllPosts,
  setDialogsDataUsers,
}) => {
  let url = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    fetch(`${url}posts`)
      .then((response) => response.json())
      .then((data) => addAllPosts(data));
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    await fetch(`${url}users`)
      .then((response) => response.json())
      .then((data) => setDialogsDataUsers(data))
      .catch((error) => console.log(error));
  };

  const onAdd = async () => {
    await fetch(`${url}users`);
  };

  let dialogsElements = dialogsDataUsers.map((u) => (
    <UserItem users={u} key={u.id} />
  ));
  let postsElements = postsData.map((m, index) => (
    <Message message={m} key={m.id} />
  ));

  const addNewMessage = (values) => {
    addMessage(values.message); //add our message to BLL
  };

  return (
    <div>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{postsElements}</div>
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
