import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <header className="header">
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div className={s.loginItems}>
            <span className={s.userName}> {props.login}</span>
            <button className={s.btn} onClick={props.logout}>
              Log out
            </button>
          </div>
        ) : (
          <div className={s.login}>
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
