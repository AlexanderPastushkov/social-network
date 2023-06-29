import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

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
        messageError={props.messageError}
      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
