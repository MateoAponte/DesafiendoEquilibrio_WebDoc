import Transition from '../../assets/img/swim/scene_2/Transition.png';
import Background from '../../assets/img/swim/scene_2/Background.jpg';
import Team from '../../assets/img/swim/scene_2/Team.png';
import Swimming from '../../assets/img/swim/scene_2/Swimming.mp4';

import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useEffect } from 'react';
import { useScrollHandler, videoHandler } from '../../hooks/useScrollViewport.js';

export const SceneSecond = () => {
  const { scrollTrigger } = useScrollMagic();
  useScrollHandler('#second_scene_swimming', videoHandler);
  useEffect(() => {
    scrollTrigger(
      '#trigger-second-scene',
      '#scene_swim_second',
      [
        {
          x: '-175vw',
        },
      ],
      6000,
    );
    scrollTrigger(
      '#trigger-swim-second-background',
      '#second_background_swim',
      [
        {
          y: '-30vh',
        },
      ],
      10000,
    );
    scrollTrigger(
      '#trigger-second-video',
      '#second_swimming',
      [
        {
          x: '-128vw',
        },
      ],
      7000,
    );
  }, []);

  return (
    <section className="scene scene__image--swim scene__second-swim">
      <div className="scene__image-container" id="scene_swim_second">
        <img className="scene__image transition" alt="background athlete" id="second_athlete_swim" src={Transition} />
        <img className="scene__image background" alt="background scene" id="second_background_swim" src={Background} />
        <img className="scene__image team" alt="background athlete" id="second_team_swim" src={Team} />
        <div className="scene__image video_scene" id="second_swimming">
          <video className="scene__image video" id="second_scene_swimming" loop muted>
            <source src={Swimming} type="video/mp4" />
          </video>
        </div>
        <span className="scene__image text">Respira, relajate y fluye</span>
      </div>
      <div className="scene__trigger trigger-second-scene" id="trigger-second-scene"></div>
      <div className="scene__trigger trigger-background" id="trigger-swim-second-background"></div>
      <div className="scene__trigger trigger-video" id="trigger-second-video"></div>
    </section>
  );
};
