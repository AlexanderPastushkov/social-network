import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../../Common/FormsControls/FormsControls";

const ProfileDataForm = ({ profile, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      <div>
        <b>Name : </b> {createField("Name", "fullName", [], Input)}
      </div>
      <div>{profile?.contacts?.vk}</div>
      <div>
        <b>Lookin for a job : </b>{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        <div>
          <b>My professional skills : </b>
          {createField(
            "My professional skills",
            "lookingForAJobDescription",
            [],
            Textarea
          )}
        </div>
      </div>
      <div>
        <div>
          <b>About me : </b>
          {createField("About me", "aboutMe", [], Textarea)}
        </div>
      </div>
      {/* <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contctValue={profile.contacts[key]}
            />
          );
        })}
      </div> */}
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "editprofile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
