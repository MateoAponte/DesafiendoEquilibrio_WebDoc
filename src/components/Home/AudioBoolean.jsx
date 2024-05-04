import { useContext, useEffect } from 'react';
import MutedIcon from '../../assets/img/icons/sin-volumen-icon.png';
import PlayedIcon from '../../assets/img/icons/con-volumen-icon.png';
import { SoundContext } from '../../context/SoundContext';
import { AMBIEND_SOUND } from '../../constants/pathsAthletes.ts';
export const AudioBoolean = ({ counter }) => {
  const { changeSoundUrl, playSound, isIncrement, setIsIncrement } = useContext(SoundContext);

  const swapState = () => {
    setIsIncrement(!isIncrement);
  };

  useEffect(() => {
    if (counter >= 1) {
      changeSoundUrl(AMBIEND_SOUND);
      playSound();
    }
  }, [counter]);
  return (
    <div className="audio-boolean" onClick={swapState}>
      <img src={isIncrement ? PlayedIcon : MutedIcon} alt="Icon handler to muted or play the home music" />
    </div>
  );
};
