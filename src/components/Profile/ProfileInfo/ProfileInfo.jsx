import Preloader from "../../Common/Preloader/Pleloader";
import s from "./ProfileInfo.module.css";
import lookingForJob from "../../../images/job.jpg";
import trustMe from "../../../images/trustMe.jpg";
import ProfileStatus from "./ProfileStatus";
import ava from "../../../images/02.jpg";
import noAva from "../../../images/NoAva.png";
import developer from "../../../images/React-Developer.png";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.profileItems}>
      <div className={s.userInfo}>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile?.fullName}</div>
        <div>{props.profile?.contacts?.vk}</div>
      </div>
      <div className={s.imagesFlex}>
        <div>
          <div className={s.ava}>
            <img
              src={
                !props.profile?.photos?.large
                  ? noAva
                  : props.profile.photos.large
              }
              alt="photo"
            />
          </div>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
        <div className={s.image}>
          <img
            src={props.profile?.lookingForAJob ? lookingForJob : developer}
            alt="looking for job"
            className={s.img}
          />
          <div>{props.profile?.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
