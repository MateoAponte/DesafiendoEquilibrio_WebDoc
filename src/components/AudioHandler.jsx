import { useContext, useEffect, useRef } from 'react';
import { SoundContext } from '../context/SoundContext';

export const AudioHandler = () => {
  const soundRef = useRef(null);
  const { soundUrl, isPlaying, volume, isIncrement, increaseVolume, decreaseVolume } = useContext(SoundContext);

  useEffect(() => {
    console.log(soundUrl, isPlaying);
    // Update the sound element's src attribute when the sound URL changes
    if (soundRef.current && soundUrl) {
      soundRef.current.src = soundUrl;
    }
    // Update the sound element's playback state when the isPlaying state changes
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.play();
      } else {
        soundRef.current.pause();
      }
    }
  }, [soundUrl, isPlaying]);

  useEffect(() => {
    if (soundRef.current && isPlaying) {
      const newInterval = setInterval(() => {
        if (!isIncrement) {
          const volumen = Math.max(0, soundRef.current.volume - 0.1);
          soundRef.current.volume = volumen;
          decreaseVolume(volumen);
        } else {
          const volumen = Math.min(1, soundRef.current.volume + 0.1);
          soundRef.current.volume = volumen;
          increaseVolume(volume);
        }
        if (soundRef.current.volume === 0 || soundRef.current.volume === 1) {
          clearInterval(newInterval);
        }
      }, 100);
      return () => clearInterval(newInterval);
    }
  }, [isIncrement]);

  return (
    <>
      <audio id="audio-screen" ref={soundRef} loop>
        <source id="audio-screen-source" src={soundUrl} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </>
  );
};
