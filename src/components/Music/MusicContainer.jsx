import { connect } from "react-redux";
import { setMusicAC } from "../../redux/music-reducer";
import Music from "./Music";

let mapStateToProps = (state) => {
  return {
    musicData: state.musicPage.musicData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return { setMusic: (musicData) => dispatch(setMusicAC(musicData)) };
};

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);
export default MusicContainer;
