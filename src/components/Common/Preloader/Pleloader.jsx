import preloader from "../../../images/Rolling-1s-200px.svg";
import s from "./Pleloader.module.css";

let Preloader = (props) => {
  return (
    <span className={s.loader}>
      <span className={s.loaderBall}></span>
      <span className={s.loaderBall}></span>
      <span className={s.loaderBall}></span>
    </span>
  );
};
export default Preloader;
