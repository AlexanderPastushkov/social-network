import s from "./FriendsItem.module.css";

const FriendsItem = (props) => {
  return (
    <div>
      <div className={s.content}>{props.friend}</div>
    </div>
  );
};
export default FriendsItem;
