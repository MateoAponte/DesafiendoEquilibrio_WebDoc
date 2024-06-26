import Background from '../../assets/img/skate/scene_6/Background.jpeg';

import Photo_1 from '../../assets/img/skate/scene_6/Photo_1.jpeg';
import Photo_2 from '../../assets/img/skate/scene_6/Photo_2.jpeg';
import Photo_3 from '../../assets/img/skate/scene_6/Photo_3.jpeg';
import Photo_4 from '../../assets/img/skate/scene_6/Photo_4.jpeg';
import Photo_5 from '../../assets/img/skate/scene_6/Photo_5.jpeg';
import Photo_6 from '../../assets/img/skate/scene_6/Photo_6.jpeg';

import Marco from '../../assets/img/skate/scene_6/Marco_2.png';

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
    scrollTrigger(
      '#trigger-six-photo-1',
      '#skate-six-photo-athlete-1',
      [
        {
          opacity: 1,
          scale: 1,
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-six-photo-2',
      '#skate-six-photo-athlete-2',
      [
        {
          opacity: 1,
          scale: 1,
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-six-photo-3',
      '#skate-six-photo-athlete-3',
      [
        {
          opacity: 1,
          scale: 1,
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-six-photo-4',
      '#skate-six-photo-athlete-4',
      [
        {
          opacity: 1,
          scale: 1,
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-six-photo-5',
      '#skate-six-photo-athlete-5',
      [
        {
          opacity: 1,
          scale: 1,
        },
      ],
      1000,
    );
    scrollTrigger(
      '#trigger-six-photo-6',
      '#skate-six-photo-athlete-6',
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
        <div className="scene__image image-container">
          <div className="scene__image section left-side">
            <div className="photo photo-1" id="skate-six-photo-athlete-1">
              <img className="content" src={Photo_3} alt="About Aleja 1" />
              <img className="marco" src={Marco} alt="About aleja 1 Marco" />
            </div>
            <div className="photo photo-2" id="skate-six-photo-athlete-2">
              <img className="content" src={Photo_2} alt="About Aleja 2" />
              <img className="marco" src={Marco} alt="About aleja 2 Marco" />
            </div>
            <div className="photo photo-3" id="skate-six-photo-athlete-3">
              <img className="content" src={Photo_1} alt="About Aleja 3" />
              <img className="marco" src={Marco} alt="About aleja 3 Marco" />
            </div>
          </div>
          <div className="scene__image section right-side">
            <div className="photo photo-6" id="skate-six-photo-athlete-4">
              <img className="content" src={Photo_6} alt="About Aleja 6" />
              <img className="marco" src={Marco} alt="About aleja 6 Marco" />
            </div>
            <div className="photo photo-5" id="skate-six-photo-athlete-5">
              <img className="content" src={Photo_5} alt="About Aleja 5" />
              <img className="marco" src={Marco} alt="About aleja 5 Marco" />
            </div>
            <div className="photo photo-4" id="skate-six-photo-athlete-6">
              <img className="content" src={Photo_4} alt="About Aleja 4" />
              <img className="marco" src={Marco} alt="About aleja 4 Marco" />
            </div>
          </div>
        </div>
        <span className="scene__image text" id="six-text-scene">
          El verdadero desafío es romper tus límites
        </span>
      </div>
      <div className="scene__trigger trigger-six" id="trigger-six-scene"></div>
      <div className="scene__trigger trigger-text" id="trigger-six-text"></div>
      <div className="scene__trigger trigger-photo-1" id="trigger-six-photo-1"></div>
      <div className="scene__trigger trigger-photo-2" id="trigger-six-photo-2"></div>
      <div className="scene__trigger trigger-photo-3" id="trigger-six-photo-3"></div>
      <div className="scene__trigger trigger-photo-4" id="trigger-six-photo-4"></div>
      <div className="scene__trigger trigger-photo-5" id="trigger-six-photo-5"></div>
      <div className="scene__trigger trigger-photo-6" id="trigger-six-photo-6"></div>
    </section>
  );
};
