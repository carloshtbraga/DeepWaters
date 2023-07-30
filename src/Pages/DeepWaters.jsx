
import Sky from "../components/Sky";
import Ocean from "../components/Ocean";
import fundo from '../assets/fundo.svg'
import '../styles/DeepWaters.css'
import AudioPlayer from "../components/AudioPlayer";
import audio from '../assets/audio.mp3'

export default function DeepWaters() {


  return (
    <>
    <AudioPlayer src={audio}/>
      <Sky />
      <Ocean />

      <img src={fundo} alt="" className="ocean-floor" />
    </>
  );
}
