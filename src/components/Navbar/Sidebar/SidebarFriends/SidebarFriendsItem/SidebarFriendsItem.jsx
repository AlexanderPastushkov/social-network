import s from "./SidebarFriendsItem.module.css";

const SidebarFriendsItem = (props) => {
  return (
    <div>
      <img
        className={s.avatarka}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"
        alt="friendimg"
      />
      {props.d}
    </div>
  );
};
export default SidebarFriendsItem;
