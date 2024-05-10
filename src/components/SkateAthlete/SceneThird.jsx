import Paper from '../../assets/img/paper.jpg';
import Marco_V from '../../assets/img/skate/Scene_3/Marco_1.png';
import Marco_H from '../../assets/img/skate/Scene_3/Marco_2.png';
import Foto_1 from '../../assets/img/skate/Scene_3/Foto_1.jpeg';
import Foto_2 from '../../assets/img/skate/Scene_3/Foto_2.jpeg';
import Foto_3 from '../../assets/img/skate/Scene_3/Foto_3.jpeg';
import Foto_4 from '../../assets/img/skate/Scene_3/Foto_4.jpeg';

import { useEffect } from 'react';
import { useScrollMagic } from '../../hooks/useScrollMagic';
import { useScrollHandler, videoHandler } from '../../hooks/useScrollViewport';

export const SceneThird = () => {
  const { scrollTrigger } = useScrollMagic();
  useScrollHandler('#scene-third-video', videoHandler);
  useEffect(() => {
    scrollTrigger(
      '#trigger-third-scene',
      '#third-scene-title',
      [
        {
          y: '-50vh',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#third-scene-paper',
      [
        {
          y: '-50vh',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#skate-third-photo-1',
      [
        {
          y: '-50vh',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#skate-third-photo-2',
      [
        {
          y: '-50vh',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#skate-third-photo-3',
      [
        {
          y: '-50vh',
        },
      ],
      2000,
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#skate-third-photo-4',
      [
        {
          y: '-50vh',
        },
      ],
      2000,
    );
  }, []);
  return (
    <>
      <section className="scene scene__image--skate scene__third-skate">
        <div className="scene__image-container" id="scene-skate-third">
          <div className="scene__image paper">
            <span className="paper-title" id="third-scene-title">
              La fuerza de mi espíritu.
            </span>
            <img className="paper__background" src={Paper} alt="paper Note" id="third-scene-paper" />
            <div className="image image-1 image-vertical" id="skate-third-photo-1">
              <img className="marco" src={Marco_V} alt="marco about foto" />
              <img className="image" src={Foto_1} alt="marco skating" />
            </div>
            <div className="image image-2 image-horizontal" id="skate-third-photo-2">
              <img className="marco" src={Marco_V} alt="marco about foto" />
              <img className="image" src={Foto_2} alt="marco skating" />
            </div>
            <div className="image image-3 image-horizontal" id="skate-third-photo-3">
              <img className="marco" src={Marco_H} alt="marco about foto" />
              <img className="image" src={Foto_3} alt="marco skating" />
            </div>
            <div className="image image-4 image-vertical" id="skate-third-photo-4">
              <img className="marco" src={Marco_V} alt="marco about foto" />
              <img className="image" src={Foto_4} alt="marco skating" />
            </div>
          </div>
        </div>
        <div className="scene__trigger third-scene" id="trigger-third-scene"></div>
      </section>
    </>
  );
};
