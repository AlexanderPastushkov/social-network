import s from "./../Dialogs.module.css";
import React from "react";

const Message = (props) => {
  return (
    <div>
      <div className={s.dialog}>{props.message}</div>
    </div>
  );
};

export default Message;
