import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  console.log(props.profilePage.newPostText);
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={props.profilePage.postsData}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};
export default Profile;
