import React from "react";
import { Field, Form, Formik } from "formik";
import s from "./Login.module.css";
import { login, logout } from "../../redux/auth-reducer.ts";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginFormik = ({ login, isAuth, captchaUrl }) => {
  const loginFormValidateEmail = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const loginFormValidatePassword = (values) => {
    if (!values) return "Required";
  };
  const submit = (values, { setSubmitting }) => {
    login(values.email, values.password, values.rememberMe, values.captcha);
    setSubmitting(false);
  };
  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className={s.loginForm}>
      <Formik
        className={s.form}
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
          captcha: "",
        }}
        validate={loginFormValidateEmail}
        onSubmit={submit}
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
            <div className={s.emailBlock}>
              <label className={s.loginLabel}>Email</label>
              <Field className={s.field} type="email" name="email" />
              <p className={s.error}>
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div>
              <label className={s.loginLabel}>Password</label>
              <Field
                className={s.field}
                type="password"
                name="password"
                validate={loginFormValidatePassword}
              />
              <p className={s.error}>
                {errors.password && touched.password && errors.password}
              </p>
            </div>
            <label className={s.loginLabel}>Remember me</label>
            <Field type="checkbox" name="rememberMe" />
            <div className={s.captchaBlock}>
              {captchaUrl && <img src={captchaUrl} />}
              {captchaUrl && <Field type="text" name="captcha" />}
            </div>
            <button className={s.button} type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login: login, logout: logout })(
  LoginFormik
);
