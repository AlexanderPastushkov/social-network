import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const activeLink = ({ isActive }) => (isActive ? s.active : s.item); //isActive - atribute of Navlink
const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink to="/profile/" className={activeLink}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" className={activeLink}>
            Messages
          </NavLink>
        </li>

        <li>
          <NavLink to="/users" className={activeLink}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" className={activeLink}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/video" className={activeLink}>
            Video
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
