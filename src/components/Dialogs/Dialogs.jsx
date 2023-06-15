import React, { useEffect } from "react";
import { reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { createField, Textarea } from "../Common/FormsControls/FormsControls";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import UserItem from "./UserItem/UserItem";

const Dialogs = (props) => {
  return (
    <div>
      <Message />
    </div>
  );
};

export default Dialogs;
