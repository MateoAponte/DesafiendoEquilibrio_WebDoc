import { HOME_PICTURES } from '../constants/HomePictures';
import Picture from '../components/Home/Picture';
import SelectedPicture from '../components/Home/SelectedPicture';
import { useEffect, useState } from 'react';
import { useRevealMask } from '../hooks/useRevealMask';

import Maximize from '../assets/img/icons/maximize-icon.png';
import Headphones from '../assets/img/icons/headphones-icon.png';
import Smart from '../assets/img/icons/girar-smartphone_icon.png';
import Click from '../assets/img/icons/click-icon.png';
import { AudioBoolean } from '../components/Home/AudioBoolean';

const Home = () => {
  const [selected, setSelected] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
  const [canInteract, setCanInteract] = useState(false);
  const [sequenceStep, setSequenceStep] = useState('render-sequence');
  const { onMouseMove, timerBackground } = useRevealMask();
  const [counter, setCounter] = useState(0);
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
    timerBackground();
  }, []);

  const getOverlayStatus = (className) => {
    return `${className} ${showOverlay ? `${className}--active` : ''}`;
  };

  const initSequence = () => {
    if (counter < 1) {
      setCounter(counter + 1);
      setSequenceStep('remove-element');
      setTimeout(() => {
        setCanInteract(true);
        setSequenceStep('init-secuence');
      }, 1000);
    }
  };

  return (
    <main className="home" onClick={() => initSequence()}>
      <section className={`home__main-screen ${sequenceStep}`}>
        <div className="home__title-container">
          <h1 className="title-text">DESAFIANDO EL EQUILIBRIO</h1>
          <h1 className="title-shadow">DESAFIANDO EL EQUILIBRIO</h1>
        </div>
        <div className="background-screen"></div>
        <div className="home-recommendation">
          {canInteract ? (
            <span className="home-recommendation-icon">
              <img src={Maximize} alt="Maximize screen icon" />
              <img src={Headphones} alt="Use headphones to interactive experience" />
              <img src={Smart} alt="Change to landscape view" />
            </span>
          ) : (
            <span className="home-recommendation-icon">
              <img src={Click} alt="Please interact with the app" />
            </span>
          )}

          {canInteract ? (
            <span className="home-recommendation-text">Se recomienda usar la página de esa forma para mejorar la experiencia</span>
          ) : (
            <span className="home-recommendation-text">Da click para comenzar</span>
          )}
        </div>
      </section>
      <section className="home__title">
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
      <AudioBoolean counter={counter} />
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
