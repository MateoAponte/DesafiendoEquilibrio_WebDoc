import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useEffect } from 'react';
import { fixSpacing, useScrollHandler, videoHandler } from '../../hooks/useScrollViewport.js';
import BackgroundAthlete from '../../assets/img/swim/scene_4/Background-Athlete.png';
import Winners from '../../assets/img/swim/scene_4/Ganadores.png';
import Winners_2 from '../../assets/img/swim/scene_4/Ganadores_2.png';
import Winners_3 from '../../assets/img/swim/scene_4/Celebrando.png';
import SwimVideo from '../../assets/img/swim/scene_4/Background_Video.mp4';
import Paper from '../../assets/img/swim/scene_4/Nota.png';

export const SceneFour = () => {
  const { scrollTrigger } = useScrollMagic();
  useScrollHandler('#scene_swim_four', fixSpacing);
  useScrollHandler('#four_scene_swimming', videoHandler);
  useEffect(() => {
    scrollTrigger(
      '#trigger-four-scene',
      '#winner_swim_1',
      [
        {
          y: '-10vh',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-four-scene',
      '#winner_swim_2',
      [
        {
          y: '5vh',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-four-scene',
      '#winner_swim_3',
      [
        {
          y: '5vh',
        },
      ],
      8000,
    );
    scrollTrigger(
      '#trigger-four-scene',
      '#paper_swim',
      [
        {
          y: '-5vh',
          opacity: 1,
          scale: 1,
        },
      ],
      4000,
    );
  }, []);

  return (
    <section className="scene scene__image--swim scene__four-swim">
      <div className="scene__image-container" id="scene_swim_four">
        <img className="scene__image background" src={BackgroundAthlete} alt="background stadium" />
        <img className="scene__image winner-1" src={Winners} alt="background stadium" id="winner_swim_1" />
        <img className="scene__image winner-2" src={Winners_2} alt="background stadium" id="winner_swim_2" />
        <img className="scene__image winner-3" src={Winners_3} alt="background stadium" id="winner_swim_3" />
        <div className="scene__image paper" id="paper_swim">
          <img className="paper__image" src={Paper} alt="background stadium" />
          <span className="paper__text text-1">Quiero poder mirar hacia atrás y decir:</span>
          <span className="paper__text text-2">'Hice todo lo que pude y tuve éxito'.</span>
        </div>
        <div className="scene__image video_scene" id="four_competence">
          <video className="scene__image video" id="four_scene_swimming" loop muted>
            <source src={SwimVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="scene__trigger trigger-four-scene" id="trigger-four-scene"></div>
      <div className="scene__trigger trigger-four-paper" id="trigger-four-scene"></div>
    </section>
  );
};
