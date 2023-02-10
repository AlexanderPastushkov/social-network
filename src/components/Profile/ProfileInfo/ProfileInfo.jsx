import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div className={s.profile_items}>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img
          className={s.avatarka}
          src="https://bipbap.ru/wp-content/uploads/2022/11/1652235719_20-kartinkin-net-p-prikolnie-kartinki-dlya-stima-21.jpg"
          alt="ava"
        />
        descriptionsss
      </div>
    </div>
  );
};
export default ProfileInfo;
