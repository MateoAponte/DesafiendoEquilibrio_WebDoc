import Background from '../../assets/img/basket/scene_5/Background.png';
import Friends from '../../assets/img/basket/scene_5/Coanca.png';
import Nubes from '../../assets/img/basket/scene_5/Nubes.jpg';
import Atrapasueños from '../../assets/img/basket/scene_5/Atrapasueños.png';
import Nota from '../../assets/img/basket/scene_5/Nota.png';

import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useScrollHandler, videoHandler, fixSpacing } from '../../hooks/useScrollViewport.js';
import { useEffect } from 'react';

export const SceneFive = () => {
  const { scrollTrigger } = useScrollMagic();
  useScrollHandler('#scene-basket-goal-video', videoHandler);
  useScrollHandler('#scene-basket-five', fixSpacing);

  useEffect(() => {
    scrollTrigger('#trigger-five-scene', '#five_scene_main', [{}], 3000);
    scrollTrigger(
      '#trigger-five-scene',
      '#scene-friends-sky',
      [
        {
          top: '-30vh',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-five-scene',
      '#scene-friends-background',
      [
        {
          top: '20vh',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-five-scene',
      '#scene-friends-people',
      [
        {
          top: '30vh',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-goal',
      '#scene-basket-goal',
      [
        {
          left: '-28vw',
        },
      ],
      6000,
    );
    scrollTrigger(
      '#trigger-dream',
      '#dream-catcher',
      [
        {
          top: '-2vh',
          opacity: 1,
        },
      ],
      100,
    );
    scrollTrigger(
      '#trigger-dream',
      '#dream-text',
      [
        {
          opacity: 1,
        },
      ],
      100,
    );
    scrollTrigger(
      '#trigger-note',
      '#dream-text',
      [
        {
          top: '62vh',
        },
      ],
      4500,
    );
  }, []);
  return (
    <section className="scene scene__image--basket scene__five-basket" id="five_scene_main">
      <div className="scene__image-container" id="scene-basket-five">
        <img className="scene__image background" alt="background scene" id="scene-friends-background" src={Background} />
        <img className="scene__image nubes" alt="background scene" id="scene-friends-sky" src={Nubes} />
        <img className="scene__image friends" alt="background scene" id="scene-friends-people" src={Friends} />
        <div className="goal" id="scene-basket-goal">
          <video className="scene__image goal-image" id="scene-basket-goal-video" loop muted>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/desafiandoelequilibrio.appspot.com/o/Goal.mp4?alt=media&token=185950a1-df4f-44ad-8302-0f004fd432b6"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="dream">
          <img className="dream__image" src={Atrapasueños} alt="basket dream" id="dream-catcher" />
          <div className="dream__note" id="dream-text">
            <img className="dream__note-image" src={Nota} alt="note dream" />
            <span className="dream__note-text">Mi sinergia va más allá de una cesta de 3 puntos.</span>
          </div>
        </div>
      </div>
      <div className="scene__trigger" id="trigger-five-scene"></div>
      <div className="scene__trigger trigger__goal" id="trigger-goal"></div>
      <div className="scene__trigger trigger__dream" id="trigger-dream"></div>
      <div className="scene__trigger trigger__note" id="trigger-note"></div>
    </section>
  );
};
