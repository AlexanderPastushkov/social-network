import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((d) => (
    <div key={d.id} className={s.dialog}>
      <NavLink to={"/dialogs/" + d.id}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwZsyf5DxP_1f2efMNz_jBvlAeytorE4Ac65wwMk3jsPl8M68875c3VNwCZPRfVPCWuo&usqp=CAU"
          alt="image"
        />
        {d.name}
      </NavLink>
    </div>
  ));
  let messagesElements = props.dialogsPage.messagesData.map((m) => (
    <div key={m.id} className={s.dialog}>
      {m.message}
    </div>
  ));

  const addNewMessage = (values) => {
    props.addMessage(values.message); //add our message to BLL
  };
  return (
    <div className={s.dialogs}>
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
        <Field
          placeholder={"Enter your message"}
          component={Textarea}
          name={"message"}
          validate={[required, maxLength40]}
        />
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
