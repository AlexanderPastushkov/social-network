import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    {
      id: 1,
      name: "Dima",
    },
    {
      id: 2,
      name: "viktor",
    },
    {
      id: 3,
      name: "sanyua",
    },
    {
      id: 4,
      name: "valera",
    },
    {
      id: 5,
      name: "dasha",
    },
  ];
  let messagesData = [
    {
      id: 1,
      message: "hi",
      likesCount: 12,
    },
    {
      id: 2,
      message: "yo",
      likesCount: 12,
    },
    {
      id: 3,
      message: "hello",
      likesCount: 12,
    },
    {
      id: 4,
      message: "how are you",
      likesCount: 15,
    },
    {
      id: 5,
      message: "hello",
      likesCount: 12,
    },
  ];
  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messagesData.map((m) => (
    <Message message={m.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
