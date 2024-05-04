import WallBackground from '../../assets/img/basket/scene_4/wood_wall.jpg';
import TableBackground from '../../assets/img/basket/scene_4/Fondo.png';
import Clavada from '../../assets/img/basket/scene_4/Clavada.mp4';
import TV from '../../assets/img/basket/scene_4/Tv.png';
import Dibujo_1 from '../../assets/img/basket/scene_4/Dibujo_1.png';
import Dibujo_2 from '../../assets/img/basket/scene_4/Dibujo_2.png';
import Dibujo_3 from '../../assets/img/basket/scene_4/Dibujo_3.png';

import Foto_1 from '../../assets/img/basket/scene_4/Foto_1.jpg';
import Foto_2 from '../../assets/img/basket/scene_4/Foto_2.jpg';
import Foto_3 from '../../assets/img/basket/scene_4/Foto_3.jpg';
import Foto_4 from '../../assets/img/basket/scene_4/Foto_4.jpg';
import Marco from '../../assets/img/basket/scene_4/Marco_1.png';

import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useScrollHandler, videoHandler } from '../../hooks/useScrollViewport.js';
import { useEffect } from 'react';

export const SceneFour = () => {
  const { scrollTrigger } = useScrollMagic();
  useScrollHandler('#scene-basket-tv', videoHandler);

  useEffect(() => {
    const animationDrawn = [
      {
        scale: 1,
        opacity: 1,
        ease: 'power2.inOut',
        transformOrigin: 'center',
      },
    ];

    scrollTrigger('#trigger-four-scene', '#four_scene_main', [{}], 3000);
    scrollTrigger('#trigger-drawn-1', '#scene-drawn-1', animationDrawn, 500);
    scrollTrigger('#trigger-drawn-2', '#scene-drawn-2', animationDrawn, 500);
    scrollTrigger('#trigger-drawn-3', '#scene-drawn-3', animationDrawn, 500);
    scrollTrigger('#trigger-photo-1', '#scene-photo-1', animationDrawn, 500);
    scrollTrigger('#trigger-photo-2', '#scene-photo-2', animationDrawn, 500);
    scrollTrigger('#trigger-drawn-3', '#scene-photo-3', animationDrawn, 500);
    scrollTrigger('#trigger-drawn-3', '#scene-photo-4', animationDrawn, 500);
    scrollTrigger('#trigger-drawn-3', '#scene-text-1', animationDrawn, 500);
    scrollTrigger(
      '#trigger-wood-wall',
      '#background-wood-wall',
      [
        {
          left: '-70vw',
          top: '-50vh',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-wood-wall',
      '#scene-drawn-1',
      [
        {
          left: '-65vw',
          top: '-55vh',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-wood-wall',
      '#scene-drawn-2',
      [
        {
          left: '-47vw',
          top: '-40vh',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-wood-wall',
      '#scene-drawn-3',
      [
        {
          left: '-55vw',
          top: '0vh',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-wood-wall',
      '#scene-photo-1',
      [
        {
          left: '-60vw',
          top: '8vh',
        },
      ],
      2300,
    );
    scrollTrigger(
      '#trigger-wood-wall',
      '#scene-photo-2',
      [
        {
          left: '-40vw',
          top: '-35vh',
        },
      ],
      2300,
    );
    scrollTrigger(
      '#trigger-wood-wall',
      '#scene-photo-3',
      [
        {
          left: '-5vw',
          top: '-5vh',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-wood-wall',
      '#scene-photo-4',
      [
        {
          left: '2vw',
          top: '40vh',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-wood-wall',
      '#scene-text-1',
      [
        {
          left: '23vw',
          top: '15vh',
        },
      ],
      2000,
    );
    // #four_scene_main
    // #scene-basket-four
  }, []);
  return (
    <section className="scene scene__image--basket scene__four-basket" id="four_scene_main">
      <div className="scene__image-container" id="scene-basket-four">
        <img className="scene__image background background-wall" id="background-wood-wall" alt="background scene" src={WallBackground} />
        <img className="scene__image background" alt="background scene" src={TableBackground} />
        <div className="scene__image tv">
          <img className="scene__image portrait" alt="background scene" src={TV} />
          <video className="scene__image video" id="scene-basket-tv" loop muted>
            <source src={Clavada} type="video/mp4" />
          </video>
        </div>
        <div className="scene__image pined pined-1" id="scene-drawn-1">
          <img className="pined__image " src={Marco} alt="Pin" />
          <img className="scene__image drawn_1" src={Dibujo_1} alt="Fernando Drawn 1" />
        </div>
        <div className="scene__image pined pined-2" id="scene-drawn-2">
          <img className="pined__image " src={Marco} alt="Pin" />
          <img className="scene__image drawn_2" src={Dibujo_2} alt="Fernando Drawn 2" />
        </div>
        <div className="scene__image pined pined-3" id="scene-drawn-3">
          <img className="pined__image " src={Marco} alt="Pin" />
          <img className="scene__image drawn_3" src={Dibujo_3} alt="Fernando Drawn 3" />
        </div>
        <div className="scene__image pined pined-4" id="scene-photo-1">
          <img className="pined__image " src={Marco} alt="Pin" />
          <img className="scene__image drawn_4" src={Foto_1} alt="Fernando as Child 1" />
        </div>
        <div className="scene__image pined pined-5" id="scene-photo-2">
          <img className="pined__image " src={Marco} alt="Pin" />
          <img className="scene__image drawn_5" src={Foto_2} alt="Fernando as Child 2" />
        </div>
        <div className="scene__image pined pined-6" id="scene-photo-3">
          <img className="pined__image " src={Marco} alt="Pin" />
          <img className="scene__image drawn_6" src={Foto_3} alt="Fernando as Child 3" />
        </div>
        <div className="scene__image pined pined-7" id="scene-photo-4">
          <img className="pined__image " src={Marco} alt="Pin" />
          <img className="scene__image drawn_7" src={Foto_4} alt="Fernando as Young 1" />
        </div>
        <div className="scene__image pined pined-8" id="scene-text-1">
          <span>Cada piedra en el camino</span>
          <span>Es el camino en si</span>
        </div>
      </div>
      <div className="scene__trigger" id="trigger-four-scene"></div>
      <div className="trigger__drawn-1" id="trigger-drawn-1"></div>
      <div className="trigger__drawn-2" id="trigger-drawn-2"></div>
      <div className="trigger__drawn-3" id="trigger-drawn-3"></div>
      <div className="trigger__photo-1" id="trigger-photo-1"></div>
      <div className="trigger__photo-2" id="trigger-photo-2"></div>
      <div className="trigger__wood-wall" id="trigger-wood-wall"></div>
    </section>
  );
};
