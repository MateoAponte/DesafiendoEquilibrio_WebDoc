import { useState, useEffect } from 'react';

const Picture = ({ pictureInfo, setSelected, setShowOverlay, showOverlay }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!showOverlay) {
      setIsClicked(false);
      setIsHovered(false);
    }
  }, [showOverlay]);

  const showAsActive = (evt) => {
    setIsHovered(true);
  };
  const removeAsActive = (evt) => {
    setIsHovered(false);
  };

  const setOverlay = (evt) => {
    setIsClicked(true);
    setIsHovered(true);
    setShowOverlay(true);
    setSelected(pictureInfo);
  };
  const getPictureStates = () => {
    return `home__gallery-picture ${isHovered ? 'home__gallery-picture--active' : ''} ${isClicked ? 'home__gallery-picture--clicked' : ''}`;
  };

  return (
    <>
      <div className={getPictureStates()} onMouseOver={showAsActive} onMouseLeave={removeAsActive} onClick={setOverlay}>
        <img className="picture__cover" src={pictureInfo.picture} alt="Athletic screen" />
      </div>
    </>
  );
};
export default Picture;
