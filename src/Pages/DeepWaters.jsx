import Sky from "../components/Sky";
import Ocean from "../components/Ocean";
import fundo from "../assets/fundo.svg";
import "../styles/DeepWaters.css";
import AudioPlayer from "../components/AudioPlayer";
import audio from "../assets/audio.mp3";
import audio2 from "../assets/audio2.mp3";
import ScrollAudioPlayer from "../components/ScrollAudioPlayer";
import { useEffect, useRef } from "react";
import astro from "../assets/astro.gif";
import "../styles/DeepWaters.css";
import DeepFlying from "../components/DeepFlying";
import loco from "../assets/loco.gif";
import { animateScroll as scroll } from 'react-scroll';

export default function DeepWaters() {
  const audioPlayerRef = useRef();

  const pauseFirstMusic = () => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
    }
  };

  useEffect(() => {

    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    scroll.scrollToBottom({
      duration: 60000, // Defina a duração da animação em milissegundos (por exemplo, 1500ms)
      delay: 50, // Adicione um pequeno atraso antes de iniciar a animação (por exemplo, 100ms)
      smooth: 'easeInOutQuart' // Defina a curva de aceleração da animação (você pode usar outras curvas, como 'easeInCubic', 'easeInOutExpo', etc.)
    });
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
