import s from "./../Dialogs.module.css";
import React from "react";

const Message = ({ message }) => {
  return (
    <div className={s.dialog}>
      <div>{message.id}</div>
      <div className={s.title}>{message.title}</div>
      <div className={s.body}>{message.body}</div>
    </div>
  );
};

export default Message;
