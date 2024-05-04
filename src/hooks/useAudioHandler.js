import { useState, useEffect, useRef } from 'react';

export const useAudioHandler = () => {
  const [audio, setAudio] = useState('');
  const audioElRef = useRef(null);

  useEffect(() => {
    if (!audioElRef.current) return;
    audioElRef.current.src = audio;
    audioElRef.current.load();
  }, [audio]);

  const initInterval = (interval, type) => {
    if (!audioElRef.current) return;

    audioElRef.current.volume = 0;
    const intervalId = setInterval(() => {
      if (type === 'muted') {
        audioElRef.current.volume = Math.max(0, audioElRef.current.volume - 0.1);
      } else {
        audioElRef.current.volume = Math.min(1, audioElRef.current.volume + 0.1);
      }
      if (audioElRef.current.volume === 0 || audioElRef.current.volume === 1) {
        clearInterval(intervalId);
      }
    }, interval);
  };

  const changeMusic = (url) => {
    setAudio(url);
  };

  const mutedMusic = (interval = 1000) => {
    initInterval(interval, 'muted');
  };

  const loudedMusic = (interval = 1000) => {
    initInterval(interval, 'play');
  };

  const playMusic = () => {
    if (!audioElRef.current) return;

    audioElRef.current.volume = 0;
    audioElRef.current.play();
  };

  return {
    audio,
    changeMusic,
    loudedMusic,
    mutedMusic,
    playMusic,
  };
};
