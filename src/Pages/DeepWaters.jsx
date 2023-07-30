
import Sky from "../components/Sky";
import Ocean from "../components/Ocean";
import fundo from '../assets/fundo.svg'
import '../styles/DeepWaters.css'
import AudioPlayer from "../components/AudioPlayer";
import audio from '../assets/audio.mp3'
import audio2 from '../assets/audio2.mp3'
import ScrollAudioPlayer from "../components/ScrollAudioPlayer";
import { useRef } from "react";

export default function DeepWaters() {
  const audioPlayerRef = useRef();

  const pauseFirstMusic = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
    }
  };

  return (
    <>
    <AudioPlayer src={audio}/>
    <ScrollAudioPlayer src={audio2} stopPreviousMusic={pauseFirstMusic}/>
      <Sky />
      <Ocean className='animate__animated animate__backInUp'/>

      <img src={fundo} alt="" className="ocean-floor" />
    </>
  );
}
