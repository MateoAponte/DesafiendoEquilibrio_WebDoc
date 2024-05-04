import { useEffect } from 'react';
import { useScrollMagic } from '../../hooks/useScrollMagic';

import Ambulancia from '../../assets/img/skate/Scene_5/Ambulancia.png';
import Background from '../../assets/img/skate/Scene_5/Hospital.jpg';
import LesionVideo from '../../assets/img/skate/Scene_5/Lesion.mp4';
import Pantalla from '../../assets/img/skate/Scene_5/Pantalla.png';

import Rollo from '../../assets/img/skate/Scene_5/rollo.png';
import Foto_1 from '../../assets/img/skate/Scene_5/Foto_1.jpeg';
import Foto_2 from '../../assets/img/skate/Scene_5/Foto_2.jpeg';
import Foto_3 from '../../assets/img/skate/Scene_5/Foto_3.jpeg';
import Foto_4 from '../../assets/img/skate/Scene_5/Foto_4.jpeg';
import Foto_5 from '../../assets/img/skate/Scene_5/Foto_5.jpeg';
import Foto_6 from '../../assets/img/skate/Scene_5/Foto_6.jpeg';
import { useScrollHandler, videoHandler } from '../../hooks/useScrollViewport';

export const SceneFive = () => {
  const { scrollTrigger } = useScrollMagic();
  useScrollHandler('#scene-tv', videoHandler);
  useEffect(() => {
    scrollTrigger(
      '#trigger-five-scene',
      '#scene-skate-five',
      [
        {
          x: '-100vw',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-ambulance',
      '#scene-ambulance',
      [
        {
          x: '-200vw',
        },
      ],
      3000,
    );
    scrollTrigger(
      '#trigger-ambulance',
      '#scene-five-background',
      [
        {
          x: '-50vw',
        },
      ],
      1500,
    );
    scrollTrigger(
      '#trigger-camara',
      '#five-scene-camara',
      [
        {
          y: '-230vh',
        },
      ],
      10000,
    );
    scrollTrigger(
      '#trigger-five-scene',
      '#scene-five-text',
      [
        {
          x: '-80vh',
        },
      ],
      2000,
    );
  }, []);
  return (
    <>
      <section className="scene scene__image--skate scene__five-skate">
        <div className="scene__image-container" id="scene-skate-five">
          <img className="scene__image background" id="scene-five-background" src={Background} alt="sala hospital" />
          <div className="scene__image container" id="scene-ambulance">
            <img className="ambulance" src={Ambulancia} alt="ambulancia" />
          </div>
          <div className="scene__image lesion-tv">
            <div className="lesion-tv__monitor">
              <img src={Pantalla} alt="Pantalla de lesión" />
              <video className="scene__image lesion-tv__video" id="scene-tv" loop muted>
                <source src={LesionVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="scene__image rollo" id="five-scene-camara">
            <div className="rollo__background">
              <img className="scene__image" src={Rollo} alt="Foto about Aleja 1" />
            </div>
            <div className="rollo__content">
              <img className="scene__image photo photo-1" src={Foto_1} alt="Foto about Aleja 1" />
              <img className="scene__image photo photo-2" src={Foto_2} alt="Foto about Aleja 2" />
              <img className="scene__image photo photo-3" src={Foto_3} alt="Foto about Aleja 3" />
              <img className="scene__image photo photo-4" src={Foto_4} alt="Foto about Aleja 4" />
              <img className="scene__image photo photo-5" src={Foto_5} alt="Foto about Aleja 4" />
              <img className="scene__image photo photo-6" src={Foto_6} alt="Foto about Aleja 5" />
            </div>
          </div>
          <div className="scene__image message" id="scene-five-text">
            <p className="message__item">Con más ganas de</p>
            <p className="message__item">vivir que nunca</p>
          </div>
        </div>
        <div className="scene__trigger five-scene" id="trigger-five-scene"></div>
        <div className="scene__trigger trigger-ambulance" id="trigger-ambulance"></div>
        <div className="scene__trigger trigger-camara" id="trigger-camara"></div>
      </section>
    </>
  );
};
