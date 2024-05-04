import Background from '../../assets/img/swim/scene_1/Background.jpg';
import Person from '../../assets/img/swim/scene_1/Person.png';
import Swimmer_1 from '../../assets/img/swim/scene_1/Swimmer_1.png';
import Swimmer_2 from '../../assets/img/swim/scene_1/Swimmer_2.png';
import Note from '../../assets/img/skate/scene_1/Nota.png';

import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useEffect } from 'react';
import { Scrolled } from '../Scrolled.jsx';

export const SceneIntro = () => {
  const { scrollTrigger } = useScrollMagic();
  useEffect(() => {
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro_background_swim',
      [
        {
          x: '-20vw',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro_competence_2_swim',
      [
        {
          x: '-20vw',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro_competence_1_swim',
      [
        {
          y: '5vh',
          x: '3vw',
          rotate: '5deg',
          scale: '0.8',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro-swim-title',
      [
        {
          x: '-5vw',
        },
      ],
      8000,
    );
  }, []);

  return (
    <section className="scene scene__image--swim scene__intro-swim">
      <div className="scene__image-container" id="scene-swim-intro">
        <img className="scene__image background" alt="background scene" id="intro_background_swim" src={Background} />
        <img className="scene__image athlete athlete-1" alt="background athlete" id="intro_athlete_swim" src={Person} />
        <img className="scene__image athlete athlete-2" alt="background athlete" id="intro_competence_1_swim" src={Swimmer_1} />
        <img className="scene__image athlete athlete-3" alt="background athlete" id="intro_competence_2_swim" src={Swimmer_2} />
        <div className="scene__image note" id="intro_note">
          <span className="text text-1">Sin resistencia en el camino</span>
          <span className="text text-2">No hay progreso notorio</span>
          <img alt="note" src={Note} />
        </div>
        <div className="scene__image title" id="intro-swim-title">
          <span className="title-text">PROFUNDO</span>
          <span className="title-shadow">PROFUNDO</span>
        </div>
      </div>
      <Scrolled />
      <div className="scene__trigger" id="trigger-intro-scene"></div>
    </section>
  );
};
