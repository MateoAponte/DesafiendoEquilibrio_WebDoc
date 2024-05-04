import BackgroundVideo from '../../assets/img/skate/Scene_4/Background.mp4';

import { useEffect } from 'react';
import { useScrollMagic } from '../../hooks/useScrollMagic';
import { useScrollHandler, videoHandler } from '../../hooks/useScrollViewport';

export const SceneFour = () => {
  const { scrollTrigger } = useScrollMagic();
  useScrollHandler('#scene-four-video', videoHandler);
  useEffect(() => {
    scrollTrigger('#trigger-four-scene', '#four-scene-title', [], 2000);
  }, []);
  return (
    <>
      <section className="scene scene__image--skate scene__four-skate">
        <div className="scene__image-container" id="scene-skate-four">
          <div className="scene__image competence-video" id="second_background_basket">
            <video className="scene__image video" id="scene-four-video" loop muted>
              <source src={BackgroundVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="scene__trigger four-scene" id="trigger-four-scene"></div>
      </section>
    </>
  );
};
