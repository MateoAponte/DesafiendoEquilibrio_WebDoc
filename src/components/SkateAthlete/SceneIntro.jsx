import Background from '../../assets/img/skate/scene_1/Background_1.jpg';
import Athlete from '../../assets/img/skate/scene_1/Atleta.png';
import Competence_1 from '../../assets/img/skate/scene_1/Competencia_1.png';
import Competence_2 from '../../assets/img/skate/scene_1/Competencia_2.png';
import Note from '../../assets/img/skate/scene_1/Nota.png';

import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useEffect } from 'react';
import { Scrolled } from '../Scrolled.jsx';

export const SceneIntro = () => {
  const { scrollTrigger } = useScrollMagic();
  useEffect(() => {
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro_athlete_skate',
      [
        {
          x: '2vw',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro_competence_1_skate',
      [
        {
          x: '15vw',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro_competence_2_skate',
      [
        {
          x: '-20vw',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro_background_skate',
      [
        {
          x: '-80vw',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro_note',
      [
        {
          x: '-85vw',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-intro-scene',
      '#intro-skate-title',
      [
        {
          x: '-7vw',
        },
      ],
      8000,
    );
  }, []);

  return (
    <section className="scene scene__image--skate scene__intro-skate">
      <div className="scene__image-container" id="scene-skate-intro">
        {/* <img className="scene__image background-parallax" alt="background scene" id="intro_background_parallax" src={Buildings} /> */}
        <img className="scene__image background" alt="background scene" id="intro_background_skate" src={Background} />
        <img className="scene__image athlete athlete-1" alt="background athlete" id="intro_athlete_skate" src={Athlete} />
        <img className="scene__image athlete athlete-2" alt="background athlete" id="intro_competence_1_skate" src={Competence_1} />
        <img className="scene__image athlete athlete-3" alt="background athlete" id="intro_competence_2_skate" src={Competence_2} />
        <div className="scene__image note" id="intro_note">
          <span className="text text-1">Sin resistencia en el camino</span>
          <span className="text text-2">No hay progreso notorio</span>
          <img alt="note" src={Note} />
        </div>
        <div className="scene__image title" id="intro-skate-title">
          <span className="title-text">REVANCHA</span>
          <span className="title-shadow">REVANCHA</span>
        </div>
      </div>
      <Scrolled />
      <div className="scene__trigger" id="trigger-intro-scene"></div>
    </section>
  );
};
