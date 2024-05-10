import Background from '../../assets/img/basket/scene_3/Fondo2.png';
import Team_1 from '../../assets/img/basket/scene_3/Team_1.jpeg';
import Team_2 from '../../assets/img/basket/scene_3/Team_2.jpeg';
import Team_3 from '../../assets/img/basket/scene_3/Team_3.jpeg';
import Polaroid from '../../assets/img/basket/scene_3/polaroid.png';

import Papel from '../../assets/img/paper.jpg';

import Camiseta1 from '../../assets/img/basket/scene_3/Camiseta.png';
import Camiseta2 from '../../assets/img/basket/scene_3/Camiseta_2.png';
import Camiseta3 from '../../assets/img/basket/scene_3/Camiseta_3.png';
import Camiseta4 from '../../assets/img/basket/scene_3/Camiseta_4.png';
import Camiseta5 from '../../assets/img/basket/scene_3/Camiseta_5.png';

import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useEffect } from 'react';

export const SceneThird = () => {
  const { scrollTrigger } = useScrollMagic();
  useEffect(() => {
    scrollTrigger(
      '#trigger-third-scene',
      '#third_scene_main',
      [
        {
          left: '-20px',
        },
      ],
      2550,
    );
    scrollTrigger(
      '#trigger-third-fan',
      '#scene-basket-fan',
      [
        {
          top: '30vh',
          opacity: 1,
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-third-fan-item',
      '#scene-basket-fan-item-1',
      [
        {
          rotate: -10,
          transformOrigin: 'center',
          x: -110,
          y: -5,
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-third-fan-item',
      '#scene-basket-fan-item-2',
      [
        {
          rotate: -30,
          transformOrigin: 'center',
          x: -210,
          y: 40,
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-third-fan-item',
      '#scene-basket-fan-item-4',
      [
        {
          rotate: 10,
          transformOrigin: 'center',
          x: 120,
          y: 20,
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-third-fan-item',
      '#scene-basket-fan-item-5',
      [
        {
          rotate: 30,
          transformOrigin: 'center',
          x: 220,
          y: 55,
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-third-polaroid-1',
      '#polaroid-1',
      [
        {
          y: '-75vh',
          x: '0vw',
          opacity: 1,
          scale: 1.3,
          rotation: 20,
          transformOrigin: 'center',
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-third-polaroid-2',
      '#polaroid-2',
      [
        {
          y: '-50vh',
          x: '0vw',
          opacity: 1,
          scale: 1.4,
          rotation: -20,
          transformOrigin: 'center',
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-third-polaroid-3',
      '#polaroid-3',
      [
        {
          y: '-70vh',
          x: '65vw',
          opacity: 1,
          scale: 1.4,
          rotation: 15,
          transformOrigin: 'center',
        },
      ],
      1000,
      {
        start: 'start right',
        end: 'start left',
        scrub: true,
      },
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#backdrop',
      [
        {
          left: '-100vw',
        },
      ],
      8000,
      {
        start: 'start right',
        end: 'start left',
        scrub: true,
      },
    );
    scrollTrigger(
      '#trigger-third-paper',
      '#scene-paper',
      [
        {
          top: '-30vh',
        },
      ],
      3000,
      {
        start: 'start right',
        end: 'start left',
        scrub: true,
      },
    );
    scrollTrigger(
      '#trigger-third-paper',
      '#background-paper',
      [
        {
          top: '-50vh',
        },
      ],
      3000,
      {
        start: 'start right',
        end: 'start left',
        scrub: true,
      },
    );
  }, []);

  return (
    <section className="scene scene__image--basket scene__third-basket" id="third_scene_main">
      <div className="scene__image-container" id="scene-basket-intro">
        <div className="backdrop">
          <div className="backdrop__content" id="backdrop"></div>
        </div>
        <img className="scene__image background" alt="background scene" src={Background} />
        <div className="overlay"></div>
        <div className="fan" id="scene-basket-fan">
          <div className="fan__item" id="scene-basket-fan-item-1">
            <img className="fan__item-image" src={Camiseta1} alt="Camiseta Basquet 1" />
            <span className="fan__item-text"></span>
          </div>
          <div className="fan__item" id="scene-basket-fan-item-2">
            <img className="fan__item-image" src={Camiseta2} alt="Camiseta Basquet 1" />
            <span className="fan__item-text"></span>
          </div>
          <div className="fan__item" id="scene-basket-fan-item-3">
            <img className="fan__item-image" src={Camiseta3} alt="Camiseta Basquet 1" />
            <span className="fan__item-text"></span>
          </div>
          <div className="fan__item" id="scene-basket-fan-item-4">
            <img className="fan__item-image" src={Camiseta4} alt="Camiseta Basquet 1" />
            <span className="fan__item-text"></span>
          </div>
          <div className="fan__item" id="scene-basket-fan-item-5">
            <img className="fan__item-image" src={Camiseta5} alt="Camiseta Basquet 1" />
            <span className="fan__item-text"></span>
          </div>
        </div>
        <div className="scene__image scene__polaroid team-1" id="polaroid-1">
          <img className="scene__polaroid-background" src={Polaroid} alt="polaroid asd" />
          <img alt="background scene" src={Team_1} />
          <span className="text">Algo Team</span>
        </div>
        <div className="scene__image scene__polaroid team-2" id="polaroid-2">
          <img className="scene__polaroid-background" src={Polaroid} alt="polaroid to" />
          <img alt="background scene" src={Team_2} />
          <span className="text">ECCI Team</span>
        </div>
        <div className="scene__image scene__polaroid team-2" id="polaroid-3">
          <img className="scene__polaroid-background" src={Polaroid} alt="polaroid to" />
          <img alt="background scene" src={Team_3} />
          <span className="text">ECCI Team</span>
        </div>
        <div className="scene__image scene__paper" id="scene-paper">
          <img className="background-paper" id="background-paper" src={Papel} alt="escena de papel" />
          <div className="scene__text">
            <h1 className="text">"El trabajo en equipo es fundamental, </h1>
            <h1 className="text">dentro y fuera de la cancha."</h1>
          </div>
        </div>
      </div>
      <div className="scene__trigger" id="trigger-third-scene"></div>
      <div className="scene__trigger trigger__fan" id="trigger-third-fan"></div>
      <div className="scene__trigger trigger__fan-item" id="trigger-third-fan-item"></div>
      <div className="scene__trigger trigger__polaroid-1" id="trigger-third-polaroid-1"></div>
      <div className="scene__trigger trigger__polaroid-2" id="trigger-third-polaroid-2"></div>
      <div className="scene__trigger trigger__polaroid-3" id="trigger-third-polaroid-3"></div>
      <div className="scene__trigger trigger__paper" id="trigger-third-paper"></div>
    </section>
  );
};
