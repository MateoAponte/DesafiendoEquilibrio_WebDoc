import Background from '../../assets/img/skate/scene_6/Background.jpeg';

import Photo_1 from '../../assets/img/skate/scene_6/Photo_1.jpeg';
import Photo_2 from '../../assets/img/skate/scene_6/Photo_2.jpeg';
import Photo_3 from '../../assets/img/skate/scene_6/Photo_3.jpeg';
import Photo_4 from '../../assets/img/skate/scene_6/Photo_4.jpeg';
import Photo_5 from '../../assets/img/skate/scene_6/Photo_5.jpeg';
import Photo_6 from '../../assets/img/skate/scene_6/Photo_6.jpeg';

import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useEffect } from 'react';
import { fixSpacing, useScrollHandler } from '../../hooks/useScrollViewport.js';

export const SceneSix = () => {
  const { scrollTrigger } = useScrollMagic();
  useScrollHandler('#scene-skate-six', fixSpacing);
  useEffect(() => {
    scrollTrigger(
      '#trigger-six-text',
      '#six-text-scene',
      [
        {
          opacity: 1,
          scale: 1,
        },
      ],
      1000,
    );
  }, []);

  return (
    <section className="scene scene__image--skate scene__six-skate">
      <div className="scene__image-container" id="scene-skate-six">
        <div className="scene__image background" id="six_background_basket">
          <img src={Background} alt="background in lake" />
        </div>
        <div className="scene__image section left-side">
          <img className="photo photo-1" src={Photo_1} alt="About Aleja 1" />
          <img className="photo photo-2" src={Photo_2} alt="About Aleja 2" />
          <img className="photo photo-3" src={Photo_5} alt="About Aleja 3" />
        </div>
        <div className="scene__image section right-side">
          <img className="photo photo-4" src={Photo_6} alt="About Aleja 4" />
          <img className="photo photo-5" src={Photo_3} alt="About Aleja 5" />
          <img className="photo photo-6" src={Photo_4} alt="About Aleja 6" />
        </div>
        <span className="scene__image text" id="six-text-scene">
          El límite esta en tus sueños
        </span>
      </div>
      <div className="scene__trigger trigger-six" id="trigger-six-scene"></div>
      <div className="scene__trigger trigger-text" id="trigger-six-text"></div>
    </section>
  );
};
