import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./UsersSearchForm.module.css";

const usersSearchFormValidate = (values) => {
  const errors = {};
  return errors;
};

const UsersSearchForm = ({ onFilterChanged }) => {
  const submit = (values, { setSubmitting }) => {
    onFilterChanged(values);
    setSubmitting(false);
  };

  return (
    <div className={s.findForm}>
      <Formik
        initialValues={{ term: "", friend: "" }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field className={s.nameField} type="text" name="term" />
            <Field className={s.selectField} name="friend" as="select">
              <option value="null">all</option>
              <option value="true">only followed</option>
              <option value="false">only unfollowed</option>
            </Field>
            <button
              className={s.submitButton}
              type="submit"
              disabled={isSubmitting}
            >
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UsersSearchForm;
