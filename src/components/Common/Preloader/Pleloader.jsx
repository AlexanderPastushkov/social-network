import preloader from "../../../images/Rolling-1s-200px.svg";
import s from "./Pleloader.module.css";

let Preloader = (props) => {
  return (
    <div className={s.imagePreloader}>
      <img src={preloader} />
    </div>
  );
};
export default Preloader;
