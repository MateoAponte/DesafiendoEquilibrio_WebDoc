import { useEffect } from 'react';
import { useAudioHandler } from '../hooks/useAudioHandler';

export const AudioHandler = () => {
  const { audio } = useAudioHandler();

  useEffect(() => {
    const audioEl = document.getElementById('audio-screen');
    audioEl.src = audio;
    audioEl.load();
  }, [audio]);

  return (
    <>
      <audio id="audio-screen" loop>
        <source id="audio-screen-source" src={audio} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </>
  );
};
