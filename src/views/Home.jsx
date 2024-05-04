import { HOME_PICTURES } from '../constants/HomePictures';
import Picture from '../components/Home/Picture';
import SelectedPicture from '../components/Home/SelectedPicture';
import { useEffect, useState } from 'react';
import { useRevealMask } from '../hooks/useRevealMask';

const Home = () => {
  const [selected, setSelected] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
  const { onMouseMove } = useRevealMask();
  useEffect(() => {
    document.addEventListener('click', (evt) => {
      if (evt.target.className.indexOf('home__gallery-overlay') !== -1) {
        const activePicture = document.querySelector('.home__gallery-picture--active');
        if (activePicture) {
          activePicture.classList.remove('home__gallery-picture--active');
          activePicture.classList.remove('home__gallery-picture--clicked');
          setShowOverlay(false);
        }
      }
    });
    onMouseMove();
  }, []);

  const getOverlayStatus = (className) => {
    return `${className} ${showOverlay ? `${className}--active` : ''}`;
  };

  return (
    <main className="home">
      <section className="home__title">
        <h1 className="title-text">DESAFIANDO EL EQUILIBRIO</h1>
        <h1 className="title-shadow">DESAFIANDO EL EQUILIBRIO</h1>
        <section className="home__description">
          <span>Conoce las historias de vida detrás de estos deportistas universitarios </span>
        </section>
      </section>
      <section className="home__content">
        <section className="home__background"></section>
        <section className="home__mask"></section>
        <section className="home__gallery">
          <div>
            {HOME_PICTURES.map((picture, index) => (
              <Picture key={index} setSelected={setSelected} setShowOverlay={setShowOverlay} showOverlay={showOverlay} pictureInfo={picture} />
            ))}
          </div>
          <div className={getOverlayStatus('home__gallery-overlay')}>
            <SelectedPicture
              className={getOverlayStatus('home__gallery-selected')}
              selected={selected}
              setShowOverlay={setShowOverlay}
              setSelected={setSelected}>
              {selected.scenes}
            </SelectedPicture>
          </div>
        </section>
      </section>
      {/* <section className="home__link">
        <div className="home__link-item">
          <img className="home__link-image home__link-image--rotated" src={MarcoMorado} alt="Link option" />
          <span className="home__link-text">Nuestra inspiración</span>
        </div>
        <div className="home__link-item">
          <img className="home__link-image home__link-image--inclined" src={MarcoNaranja} alt="Link option" />
          <span className="home__link-text">¿Quiénes participaron?</span>
        </div>
        <div className="home__link-item">
          <img className="home__link-image home__link-image--inclined" src={MarcoAmarillo} alt="Link option" />
          <span className="home__link-text">¿Donde contactarnos?</span>
        </div>
      </section> */}
    </main>
  );
};
export default Home;
