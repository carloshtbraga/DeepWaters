import Sky from "../components/Sky";
import Ocean from "../components/Ocean";
import fundo from "../assets/fundo.svg";
import "../styles/DeepWaters.css";
import AudioPlayer from "../components/AudioPlayer";
import audio from "../assets/audio.mp3";
import audio2 from "../assets/audio2.mp3";
import ScrollAudioPlayer from "../components/ScrollAudioPlayer";
import { useRef } from "react";
import astro from "../assets/astro.gif";
import "../styles/DeepWaters.css";
import DeepFlying from "../components/DeepFlying";
import loco from "../assets/loco.gif";

export default function DeepWaters() {
  const audioPlayerRef = useRef();

  const pauseFirstMusic = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
    }
  };

  return (
    <>
      <AudioPlayer src={audio} />
      <ScrollAudioPlayer src={audio2} stopPreviousMusic={pauseFirstMusic} />
      <Sky />
      <Ocean  />
        <DeepFlying gif={loco} lado="direita" />
      <div className="divastro">
        <img src={astro} alt="" className="astro" />
      </div>
      <img src={fundo} alt="" className="ocean-floor" />
    </>
  );
}
