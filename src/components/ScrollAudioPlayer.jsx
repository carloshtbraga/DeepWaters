import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';

const ScrollAudioPlayer = ({ src }) => {
  const [isFirstMusicPlaying, setIsFirstMusicPlaying] = useState(true);

  useEffect(() => {
    const sound = new Howl({
      src: [src],
      html5: true,
      onend: () => {
        setIsFirstMusicPlaying(false);
      },
    });

    const handleScroll = () => {
      const isScrollEnd = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

      if (isScrollEnd && isFirstMusicPlaying) {
        sound.play();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sound.stop();
    };
  }, [src, isFirstMusicPlaying]);

  return null;
};

export default ScrollAudioPlayer;
