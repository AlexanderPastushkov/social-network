import React from "react";
import { Field } from "redux-form";
import s from "./FormsControls.module.css";

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};
export const Input = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      />{" "}
      {text}
    </div>
  );
};
