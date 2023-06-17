import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        savePhoto={props.savePhoto}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
      />
      {/* <MyPostsContainer /> */}
    </div>
  );
};
export default Profile;
