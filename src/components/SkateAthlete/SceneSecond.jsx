import BackgroundVideo from '../../assets/img/skate/scene_2/Background.mp4';

import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useEffect } from 'react';
import { useScrollHandler, videoHandler } from '../../hooks/useScrollViewport.js';

export const SceneSecond = () => {
  const { scrollTrigger } = useScrollMagic();
  useScrollHandler('#scene-skate', videoHandler);
  useEffect(() => {
    scrollTrigger(
      '#trigger-second-scene',
      '#scene-skate-second',
      [
        {
          x: '-160vw',
        },
      ],
      5000,
    );
  }, []);

  return (
    <section className="scene scene__image--skate scene__second-skate">
      <div className="scene__image-container" id="scene-skate-second">
        <div className="scene__image background" id="second_background_basket">
          <video className="scene__image video" id="scene-skate" loop muted>
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="scene__trigger second-scene" id="trigger-second-scene"></div>
    </section>
  );
};
