import BackgroundVideo from '../../assets/img/basket/scene_2/BackgroundScene.mp4';

import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useScrollHandler, videoHandler } from '../../hooks/useScrollViewport.js';
import { useEffect } from 'react';

export const SceneSecond = () => {
  const { scrollTrigger } = useScrollMagic();
  useScrollHandler('#scene-basket-play', videoHandler);
  useEffect(() => {
    scrollTrigger(
      '#trigger-second-scene',
      '#second_scene_main',
      [
        {
          left: '-35vw',
        },
      ],
      3150,
      {
        start: 'start right',
        end: 'start left',
      },
    );
  }, []);
  return (
    <section className="scene scene__image--basket scene__second-basket" id="second_scene_main">
      <div className="scene__image-container" id="scene-basket-intro">
        <div className="scene__image background" id="second_background_basket">
          <video className="scene__image video" id="scene-basket-play" loop muted>
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
          <div className="backdrop"></div>
        </div>
      </div>
      <div className="scene__trigger" id="trigger-second-scene"></div>
    </section>
  );
};
