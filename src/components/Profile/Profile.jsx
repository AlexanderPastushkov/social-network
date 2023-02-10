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
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};
export default Profile;
