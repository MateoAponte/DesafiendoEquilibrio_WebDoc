import { createContext, useState } from 'react';

const SoundContext = createContext();

const SoundProvider = ({ children }) => {
  const [soundUrl, setSoundUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIncrement, setIsIncrement] = useState(true);
  const [volume, setVolume] = useState(0);
  const [counter, setCounter] = useState(0);

  const playSound = () => setIsPlaying(true);
  const pauseSound = () => setIsPlaying(false);
  const increaseVolume = (val) => setVolume(val);
  const decreaseVolume = (val) => setVolume(val);
  const changeSoundUrl = (newUrl) => setSoundUrl(newUrl);

  return (
    <SoundContext.Provider
      value={{
        soundUrl,
        isPlaying,
        volume,
        isIncrement,
        counter,
        setCounter,
        setIsIncrement,
        playSound,
        pauseSound,
        increaseVolume,
        decreaseVolume,
        changeSoundUrl,
      }}>
      {children}
    </SoundContext.Provider>
  );
};

export { SoundProvider, SoundContext };
