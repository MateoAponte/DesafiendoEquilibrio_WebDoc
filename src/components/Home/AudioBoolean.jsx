import { useEffect, useState } from 'react';
import MutedIcon from '../../assets/img/icons/sin-volumen-icon.png';
import PlayedIcon from '../../assets/img/icons/con-volumen-icon.png';
import { useAudioHandler } from '../../hooks/useAudioHandler';

export const AudioBoolean = ({ counter }) => {
  const { loudedMusic, mutedMusic, changeMusic, playMusic } = useAudioHandler();
  const [isPlayer, setIsPlayed] = useState(true);
  const swapState = () => {
    setIsPlayed(!isPlayer);
    isPlayer ? loudedMusic() : mutedMusic();
  };
  useEffect(() => {
    changeMusic(
      'https://firebasestorage.googleapis.com/v0/b/desafiandoelequilibrio.appspot.com/o/music%2FAmbient.mp3?alt=media&token=578c197a-8f0d-4a69-8e8f-3e91156b53fa',
    );
    if (counter > 1) {
      playMusic();
      loudedMusic();
    }
  }, [counter]);
  return (
    <div className="audio-boolean" onClick={() => swapState()}>
      <img src={isPlayer ? PlayedIcon : MutedIcon} alt="Icon handler to muted or play the home music" />
    </div>
  );
};
