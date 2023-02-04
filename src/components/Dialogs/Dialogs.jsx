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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name="viktor" id="2" />
        <DialogItem name="sanyua" id="3" />
        <DialogItem name="valera" id="4" />
        <DialogItem name="dasha" id="6" />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
      </div>
    </div>
  );
};
export default Dialogs;
