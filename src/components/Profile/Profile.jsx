import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        savePhoto={props.savePhoto}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
