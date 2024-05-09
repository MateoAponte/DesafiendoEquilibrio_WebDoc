import { HOME_PICTURES } from '../constants/HomePictures';
import Picture from '../components/Home/Picture';
import SelectedPicture from '../components/Home/SelectedPicture';
import { useEffect, useState } from 'react';

import { AudioBoolean } from '../components/Home/AudioBoolean';

import Contact from '../assets/img/buttons/Contact_Button.png';
import PQ_Button from '../assets/img/buttons/PQ_Button.png';
import TeamWork from '../assets/img/buttons/TeamWork_Button.png';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selected, setSelected] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
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
  }, []);

  const getOverlayStatus = (className) => {
    return `${className} ${showOverlay ? `${className}--active` : ''}`;
  };

  return (
    <main className="home">
      <section className={`home__main-screen `}></section>
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
      <AudioBoolean />
      <section className="home__link">
        <div className="home__link-item">
          <Link to="/equipo">
            <img className="home__link-image" src={TeamWork} alt="Link option" />
          </Link>
        </div>
        <div className="home__link-item">
          <Link to="/proyecto">
            <img className="home__link-image" src={PQ_Button} alt="Link option" />
          </Link>
        </div>
        <div className="home__link-item">
          <Link to="/contactanos">
            <img className="home__link-image" src={Contact} alt="Link option" />
          </Link>
        </div>
      </section>
    </main>
  );
};
export default Home;
