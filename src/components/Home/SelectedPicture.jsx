import { MediaPlayer } from './MediaPlayer';
import Atras from '../../assets/img/icons/atras-icon.png';

export const SelectedPicture = ({ children, selected, setSelected, setShowOverlay, className }) => {
  const closeSelection = () => {
    setShowOverlay(false);
    setTimeout(() => {
      setSelected({});
    }, 700);
  };
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
