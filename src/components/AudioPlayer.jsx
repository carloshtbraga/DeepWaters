import { useEffect } from 'react';
import { Howl } from 'howler';

const AudioPlayer = ({ src }) => {
  useEffect(() => {
    const sound = new Howl({
      src: [src],
      html5: true, // Usar o player de áudio HTML5 quando possível
    });

    // Reproduzir o áudio quando o componente for montado
    sound.play();

    // Opcional: Pausar o áudio quando o componente for desmontado
    return () => sound.stop();
  }, [src]);

  return null; // Não renderizar nada no DOM, pois este componente é apenas para reprodução de áudio
};

export default AudioPlayer;
