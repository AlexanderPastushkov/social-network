import s from "./Music.module.css";
import MusicItems from "./MusicItems/MusicItems";

const Music = (props) => {
  let musicEls = props.mus.map((m) => <MusicItems d={m.dj} />);
  return <div>{musicEls}</div>;
};
export default Music;
