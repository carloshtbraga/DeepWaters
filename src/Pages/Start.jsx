import { Link } from "react-router-dom";
import "../styles/Start.css";
import wave2 from "../assets/wave2.svg";
import danger from "../assets/danger.svg";
import audio1 from "../assets/audiostart.mp3";
import AudioPlayer from "../components/AudioPlayer";


export default function Start() {
  return (<>
      <AudioPlayer src={audio1} />
    <div className="start-container">
      <div className="login-container">
        <h5>You are doing fine.</h5>
        <h5>Ocean is calm.</h5>
        <h5 className="h5">Do you really wanna go into the ...</h5>
        <h2>DeepWaters</h2>
        <img src={danger} alt="" className="danger" />
        <br /><br />
        <Link to="/deepwaters">
          <button type="submit">Yes</button>
        </Link>

        <img className="wave2" src={wave2} alt="" />
      </div>
    </div>
    </>
  );
}
