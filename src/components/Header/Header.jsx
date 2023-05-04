import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <header className="header">
      <img className={s.logo} src="#" alt="logo" />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}
            <button className={s.btn} onClick={props.logout}>
              Log out
            </button>{" "}
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
