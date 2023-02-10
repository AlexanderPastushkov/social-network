import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwZsyf5DxP_1f2efMNz_jBvlAeytorE4Ac65wwMk3jsPl8M68875c3VNwCZPRfVPCWuo&usqp=CAU"
          alt="image"
        />
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
