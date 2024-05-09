import Maximize from '../../assets/img/icons/maximize-icon.png';
import Headphones from '../../assets/img/icons/headphones-icon.png';
import Smart from '../../assets/img/icons/girar-smartphone_icon.png';
import Click from '../../assets/img/icons/click-icon.png';
import { useContext, useEffect, useState } from 'react';
import { SoundContext } from '../../context/SoundContext';
import { RenderContext } from '../../context/RenderContext';
import { useLocation } from 'react-router-dom';

export const Animation = () => {
  const [sequenceStep, setSequenceStep] = useState('render-sequence');
  const [canInteract, setCanInteract] = useState(false);
  const { setCounter, counter } = useContext(SoundContext);
  const { renderCounter, changeRenderCounter } = useContext(RenderContext);
  const location = useLocation();
  const initSequence = () => {
    if (counter < 1) {
      setCounter(counter + 1);
      setSequenceStep('remove-element');
      setTimeout(() => {
        setCanInteract(true);
        setSequenceStep('init-secuence');
        setTimeout(() => {
          changeRenderCounter(1);
        }, 10000);
      }, 1000);
    }
  };
  useEffect(() => {
    console.log(renderCounter);
    if (location.pathname === '/' && renderCounter === 0) {
      setSequenceStep('render-sequence');
    } else if (location.pathname !== '/') {
      changeRenderCounter(1);
      setSequenceStep('disabled-secuence');
    } else if (location.pathname === '/' && renderCounter === 1) {
      setSequenceStep('loaded-secuence');
    }
  }, [renderCounter, location.pathname]);
  return (
    <section className={`${sequenceStep}`} onClick={() => initSequence()}>
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
  );
};
