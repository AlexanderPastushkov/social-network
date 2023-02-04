import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
const activeLink = ({ isActive }) => (isActive ? s.active : s.item);
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" className={activeLink}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={activeLink}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={activeLink}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={activeLink}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
