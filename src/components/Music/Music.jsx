import s from "./Music.module.css";
import MusicItems from "./MusicItems/MusicItems";

const Music = (props) => {
  console.log(props);
  if (props.musicData.length === 0) {
    props.setMusic([
      {
        id: 1,
        followed: true,
        fullName: "Dmitry K.",
        status: "I am boss",
        location: { country: "Belarus", city: "Minsk" },
      },
      {
        id: 2,
        followed: false,
        fullName: "Alex P.",
        status: "I like football",
        location: { country: "Belarus", city: "Zhlobin" },
      },
      {
        id: 3,
        followed: false,
        fullName: "Darya P.",
        status: "I am beautiful",
        location: { country: "Belarus", city: "Zhlobin" },
      },
      {
        id: 4,
        followed: true,
        fullName: "Timofey P.",
        status: "Hi , I am fan of Chelsea FC",
        location: { country: "USA", city: "Los-Angeles" },
      },
    ]);
  }
  return (
    <div>
      {props.musicData.map((m) => (
        <div className={s.musicItems} key={m.id}>
          <div>{m.fullName}</div>
          <div>{m.status}</div>
          <div>{m.location.country}</div>
        </div>
      ))}
    </div>
  );
};
export default Music;
