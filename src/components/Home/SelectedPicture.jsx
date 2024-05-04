import { MediaPlayer } from './MediaPlayer';
import Atras from '../../assets/img/icons/atras-icon.png';
import { useContext, useEffect } from 'react';
import { SoundContext } from '../../context/SoundContext';
import { AMBIEND_SOUND } from '../../constants/pathsAthletes.ts';

export const SelectedPicture = ({ children, selected, setSelected, setShowOverlay, className }) => {
  const { playSound, pauseSound, setIsIncrement, changeSoundUrl, isPlaying } = useContext(SoundContext);

  const closeSelection = () => {
    setTimeout(() => {
      setShowOverlay(false);
      setSelected({});
      changeSong(AMBIEND_SOUND);
    }, 500);
  };

  const changeSong = (url) => {
    setIsIncrement(false);
    setTimeout(() => {
      pauseSound();
      changeSoundUrl(url);
    }, 1200);
    setTimeout(() => {
      playSound();
      setIsIncrement(true);
    }, 2000);
  };
  useEffect(() => {
    isPlaying && changeSong(selected.sound);
  }, [selected]);

  return (
    <section className="gallery-media">
      <div className="gallery-media__icon" onClick={() => closeSelection()}>
        <img src={Atras} alt="Get to home view" />
      </div>
      {children}
      <div className="gallery-artist" smooth-parallax="" start-position="0" end-position="1">
        <div>
          <div className="gallery-artist__trailer">
            <MediaPlayer url={selected.url} className={className} />
          </div>
        </div>
        <div className="home__gallery-selected-closed" onClick={() => closeSelection()}>
          X
        </div>
      </div>
    </section>
  );
};

export default SelectedPicture;
