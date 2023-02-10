import s from "./Header.module.css";
const Header = () => {
  return (
    <header className="header">
      <img
        className={s.logo}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jyIZKnCnSctH43DTboAeajoTwEeJPFbk_A&usqp=CAU"
        alt="fff"
      />
    </header>
  );
};
export default Header;
