import s from "./UserItem.module.css";

const UserItem = ({ users: { name, username, email } }) => {
  // let path = "/dialogs/" + users.id;
  return (
    <div className={s.dialog}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwZsyf5DxP_1f2efMNz_jBvlAeytorE4Ac65wwMk3jsPl8M68875c3VNwCZPRfVPCWuo&usqp=CAU"
        alt="image"
      />
      <span>
        {" "}
        {name} username:"{username}" email: {email}
      </span>
      <div className={s.buttons}>
        <button className={s.btn}>edit</button>
        <button className={s.btn}>delete</button>
      </div>
    </div>
  );
};

export default UserItem;
