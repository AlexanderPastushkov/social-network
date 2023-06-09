import lookingForJob from "../../../images/job.jpg";
import noAva from "../../../images/NoAva.png";
import developer from "../../../images/React-Developer.png";
import Preloader from "../../Common/Preloader/Pleloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={s.profileItems}>
      <div className={s.userInfo}>
        <div>{profile.aboutMe}</div>
        <div>{profile?.fullName}</div>
        <div>{profile?.contacts?.vk}</div>
      </div>
      <div className={s.imagesFlex}>
        <div>
          <div className={s.ava}>
            <img
              src={!profile?.photos?.large ? noAva : profile.photos.large}
              alt="photo"
            />
          </div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
        <div className={s.image}>
          <img
            src={profile?.lookingForAJob ? lookingForJob : developer}
            alt="looking for job"
            className={s.img}
          />
          <div>{profile?.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
