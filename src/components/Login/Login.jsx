import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login, logout } from "../../redux/auth-reducer";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../Common/FormsControls/FormsControls";
import s from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <div>
        <Field
          placeholder={"email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type={"password"}
          placeholder={"Password"}
          name={"password"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />
        remember me
      </div>
      <div>
        <button className={s.button}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  //we use HOC reduxForm() from 'redux-form'
  form: "login", //we use unique name for the form --->"login"
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
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
