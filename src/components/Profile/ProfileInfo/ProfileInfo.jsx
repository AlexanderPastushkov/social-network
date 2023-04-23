import Preloader from "../../Common/Preloader/Pleloader";
import s from "./ProfileInfo.module.css";
import lookingForJob from "../../../images/job.jfif";
import trustMe from "../../../images/trustMe.jpg";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profile_items}>
      <div>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile?.fullName}</div>
        <div>{props.profile?.contacts?.vk}</div>
        <div className={s.image}>
          <img
            src={props.profile?.lookingForAJob ? lookingForJob : trustMe}
            alt="looking for job"
            className={s.img}
          />
          <div>{props.profile?.lookingForAJobDescription}</div>
        </div>

        <div>
          <img src={props.profile?.photos?.large} alt="photo" />
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
