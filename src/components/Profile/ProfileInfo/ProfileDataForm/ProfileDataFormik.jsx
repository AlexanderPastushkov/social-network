import React from "react";
import { Field, Form, Formik } from "formik";
import s from "../ProfileInfo.module.css";
const ProfileDataFormik = ({ onSubmit, initialValues, profile }) => {
  const profileFormValidate = (values) => {
    if (!values) return "Required";
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={profileFormValidate}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form className={s.formBlock}>
          <div className={s.fieldBlock}>
            <label className={s.profileInfoLabel}>Name</label>
            <Field className={s.field} type="text" name="fullName" />
          </div>

          <div className={s.fieldBlock}>
            <label className={s.profileInfoLabel}>My professional skills</label>
            <Field
              className={s.field}
              type="textarea"
              name="lookingForAJobDescription"
            />
          </div>

          <div className={s.fieldBlock}>
            <label className={s.profileInfoLabel}>About me</label>
            <Field className={s.field} type="textarea" name="aboutMe" />
          </div>
          <div>
            <label className={s.profileInfoLabel}>Lookin for a job</label>
            <Field className={s.field} type="checkbox" name="lookingForAJob" />
          </div>
          <div>
            <label className={s.profileInfoLabel}>Contacts:</label>
            {Object.keys(profile.contacts).map((key, index) => {
              return (
                <div key={index} className={s.contacts}>
                  <p>
                    {key}:
                    <Field
                      placeholder={key}
                      className={s.field}
                      type="text"
                      name={"contacts." + key}
                    />
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            {" "}
            <button className={s.button} type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataFormik;
