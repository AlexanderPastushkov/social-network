import s from "./SidebarFriends.module.css";
import SidebarFriendsItem from "./SidebarFriendsItem/SidebarFriendsItem";

const SidebarFriends = (props) => {
  let sidebarFriendsElems = props.sidebarFriends.map((el) => (
    <SidebarFriendsItem d={el.friend} />
  ));

  return <div className={s.sidebarFriends}>{sidebarFriendsElems}</div>;
};
export default SidebarFriends;
