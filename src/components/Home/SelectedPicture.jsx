import { MediaPlayer } from './MediaPlayer';

export const SelectedPicture = ({ children, selected, setSelected, setShowOverlay, className }) => {
  const closeSelection = () => {
    setShowOverlay(false);
    setTimeout(() => {
      setSelected({});
    }, 700);
  };
  return (
    <section className="gallery-media">
      {children}
      <div className="gallery-artist" smooth-parallax="" start-position="0" end-position="1">
        <div>
          <div className="gallery-artist__trailer">
            <MediaPlayer url={selected.url} className={className} />
          </div>
        </div>
        <div className="home__gallery-selected-closed" onClick={closeSelection}>
          X
        </div>
      </div>
    </section>
  );
};

export default SelectedPicture;
