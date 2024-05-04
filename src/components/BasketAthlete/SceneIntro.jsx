import Background from '../../assets/img/basket/scene_1/Fondo_1.png';
import Buildings from '../../assets/img/basket/scene_1/buildings.jpg';
import Nota from '../../assets/img/basket/scene_1/Nota.png';

import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useEffect } from 'react';
import { Scrolled } from '../Scrolled.jsx';

export const SceneIntro = () => {
  const { scrollTrigger } = useScrollMagic();
  useEffect(() => {
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro_title_basket',
      [
        {
          opacity: 1,
          scale: 1,
          top: '70vh',
        },
      ],
      1000,
      {
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    );
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro_background_parallax',
      [
        {
          top: '0vh',
        },
      ],
      4000,
      {
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    );
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro_background_basket',
      [
        {
          top: '10vh',
        },
      ],
      4000,
      {
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    );
  }, []);

  return (
    <section className="scene scene__image--basket scene__intro-basket">
      <div className="scene__image-container" id="scene-basket-intro">
        <img className="scene__image background-parallax" alt="background scene" id="intro_background_parallax" src={Buildings} />
        <img className="scene__image background" alt="background scene" id="intro_background_basket" src={Background} />
        <div className="scene__image note" id="intro_title_basket">
          <img src={Nota} alt="Nota de motivacion" />
          <h1 className="scene__image text text-1">La fuerza del equipo está en cada miembro individual</h1>
          <h1 className="scene__image text text-2">La fuerza de cada miembro está en la unión</h1>
        </div>
        <div className="scene__image title" id="intro-basket-title">
          <span className="title-text">SINERGIA</span>
          <span className="title-shadow">SINERGIA</span>
        </div>
      </div>
      <Scrolled />
      <div className="scene__trigger" id="trigger-intro-scene"></div>
      <div className="scene__trigger" id="trigger-intro-scene"></div>
    </section>
  );
};
