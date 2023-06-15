import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { login, logout } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../Common/FormsControls/FormsControls";
import styles from "../Common/FormsControls/FormsControls.module.css";
import s from "./Login.module.css";

const LoginForm = ({ handleSubmit, error, onSubmit }) => {
  return (
    // props.handleSubmit появляется после wrap reduxForm и собирает данные в formData
    <form onSubmit={onSubmit} className={s.form}>
      {createField("email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "remember me"
      )}
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button className={s.button}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  //we use HOC reduxForm() from 'redux-form'
  form: "login", //we use unique name in reducer for the form --->"login"
})(LoginForm);

const Login = ({ isAuth }) => {
  const onSubmit = (formData) => {
    console.log(formData);
    login(formData.email, formData.password, formData.rememberMe);
  };
  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className={s.formStyle}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login: login, logout: logout })(
  Login
);
