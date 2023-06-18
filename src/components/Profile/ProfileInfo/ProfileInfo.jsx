import React, { useState } from "react";
import noAva from "../../../images/NoAva.png";
import Preloader from "../../Common/Preloader/Pleloader";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileDataFormik from "./ProfileDataForm/ProfileDataFormik";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
  messageError,
}) => {
  const [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) savePhoto(e.target.files[0]);
  };
  const onSubmit = (values, { setSubmitting }) => {
    saveProfile(values).then(() => {
      setSubmitting(false);
      setEditMode(false);
    });
  };
  // const onSubmit = (formData) => {
  //   console.log(formData);
  // saveProfile(formData);
  // };
  return (
    <div className={s.profileItems}>
      <div className={s.imagesFlex}>
        <div className={s.avaItems}>
          <img
            className={s.ava}
            src={!profile?.photos?.large ? noAva : profile.photos.large}
            alt="photo"
          />

          {isOwner && (
            <div className={s.chooseBtn}>
              <label className={s.customFileUpload}>
                <input onChange={onMainPhotoSelected} type="file" />
                Upload Photo
              </label>
            </div>
          )}
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          <div>{messageError}</div>
        </div>
      </div>
      <div className={s.profileInfo}>
        {editMode ? (
          <ProfileDataFormik
            onSubmit={onSubmit}
            profile={profile}
            initialValues={profile}
          />
        ) : (
          <ProfileData
            isOwner={isOwner}
            profile={profile}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={s.userInfo}>
      {isOwner && (
        <div>
          <button className={s.button} onClick={goToEditMode}>
            edit
          </button>
        </div>
      )}
      <div>
        <b>Name : </b> {profile?.fullName}
      </div>
      <div>
        <b>Lookin for a job : </b>
        {profile?.lookingForAJob ? "yes" : "no"}{" "}
        {profile?.lookingForAJob && (
          <div>
            <b>My professional skills : </b>
            {profile.lookingForAJobDescription}
          </div>
        )}
      </div>
      <div>
        {profile?.aboutMe && (
          <div>
            <b>About me : </b> {profile.aboutMe}
          </div>
        )}
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      {contactValue && `${contactTitle} :  ${contactValue}`}
    </div>
  );
};
export default ProfileInfo;
