import Playa from '../../assets/img/swim/scene_3/Playa.png';
import Sky from '../../assets/img/swim/scene_3/Sky.jpg';
import Photo_1 from '../../assets/img/swim/scene_3/Photo_1.jpeg';
import Photo_2 from '../../assets/img/swim/scene_3/Photo_2.jpeg';
import Photo_4 from '../../assets/img/swim/scene_3/Photo_4.jpeg';

import Pool from '../../assets/img/swim/scene_3/Pool.jpg';
import Photo_Family_1 from '../../assets/img/swim/scene_3/Photo_Family_1.jpeg';
import Photo_Family_2 from '../../assets/img/swim/scene_3/Photo_Family_2.jpeg';
import Photo_Family_3 from '../../assets/img/swim/scene_3/Photo_Family_3.jpeg';
import Photo_Family_4 from '../../assets/img/swim/scene_3/Photo_Family_4.jpeg';
import Marco from '../../assets/img/swim/scene_3/Marco_2.png';

import { useScrollMagic } from '../../hooks/useScrollMagic.js';
import { useEffect } from 'react';

export const SceneThird = () => {
  const { scrollTrigger } = useScrollMagic();
  useEffect(() => {
    scrollTrigger(
      '#trigger-third-scene',
      '#third_beach_swim',
      [
        {
          y: '15vh',
        },
      ],
      6000,
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#third_sky_swim',
      [
        {
          y: '-40vh',
        },
      ],
      6000,
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#swim-third-text-skew-1',
      [
        {
          y: '-35vh',
          scale: 1,
          rotatex: '-10deg',
        },
      ],
      4000,
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#swim-third-text-skew-2',
      [
        {
          y: '-95vh',
          scale: 1,
          rotatex: '-10deg',
        },
      ],
      4000,
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#firts_photo_scene',
      [
        {
          y: '-35vh',
          scale: 1,
          rotatex: '-10deg',
        },
      ],
      4000,
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#second_photo_scene',
      [
        {
          y: '-35vh',
          scale: 1,
          rotatex: '-10deg',
          skewX: '9deg',
        },
      ],
      4000,
    );
    scrollTrigger(
      '#trigger-third-scene',
      '#third_photo_scene',
      [
        {
          y: '-35vh',
          scale: 1,
          rotatex: '-10deg',
          skewX: '-7deg',
        },
      ],
      4000,
    );
    scrollTrigger(
      '#trigger-third-pool',
      '#four_pool_swim',
      [
        {
          y: '-80vh',
        },
      ],
      5000,
    );
    scrollTrigger(
      '#trigger-third-pool',
      '#four_visor_swim',
      [
        {
          y: '-160vh',
        },
      ],
      5000,
    );
    scrollTrigger(
      '#trigger-third-pool',
      '#swim_four_camara_1',
      [
        {
          y: '80vh',
        },
      ],
      5000,
    );
    scrollTrigger(
      '#trigger-third-pool',
      '#swim_four_camara_2',
      [
        {
          y: '80vh',
        },
      ],
      5000,
    );
    scrollTrigger(
      '#trigger-third-pool',
      '#swim_four_camara_3',
      [
        {
          y: '80vh',
        },
      ],
      5000,
    );
    scrollTrigger(
      '#trigger-third-pool',
      '#swim_four_camara_4',
      [
        {
          y: '80vh',
        },
      ],
      5000,
    );
  }, []);

  return (
    <section className="scene scene__image--swim scene__third-swim">
      <div className="scene__image-container" id="scene_swim_third">
        <img className="scene__image beach" alt="background athlete" id="third_beach_swim" src={Playa} />
        <img className="scene__image sky" alt="background scene" id="third_sky_swim" src={Sky} />
        <span className="scene__image text text-1" id="swim-third-text-skew-1">
          En cada inmersión encuentro calma,
        </span>
        <span className="scene__image text text-2" id="swim-third-text-skew-2">
          encuentro un propósito.
        </span>
        <img className="scene__image photo photo-1" alt="background scene" id="firts_photo_scene" src={Photo_2} />
        <img className="scene__image photo photo-2" alt="background scene" id="second_photo_scene" src={Photo_1} />
        <img className="scene__image photo photo-3" alt="background scene" id="third_photo_scene" src={Photo_4} />
        <div className="scene__image visor" id="four_visor_swim">
          <img className="scene__image pool" alt="background athlete" id="four_pool_swim" src={Pool} />
          <div className="scene__image camara camara-1" id="swim_four_camara_1">
            <img className="camara__image" src={Photo_Family_1} alt="family achiviement" />
            <img className="camara__frame" src={Marco} alt="family frame" />
          </div>
          <div className="scene__image camara camara-2" id="swim_four_camara_2">
            <img className="camara__image" src={Photo_Family_2} alt="family achiviement" />
            <img className="camara__frame" src={Marco} alt="family frame" />
          </div>
          <div className="scene__image camara camara-3" id="swim_four_camara_3">
            <img className="camara__image" src={Photo_Family_3} alt="family achiviement" />
            <img className="camara__frame" src={Marco} alt="family frame" />
          </div>
          <div className="scene__image camara camara-4" id="swim_four_camara_4">
            <img className="camara__image" src={Photo_Family_4} alt="family achiviement" />
            <img className="camara__frame" src={Marco} alt="family frame" />
          </div>
        </div>
      </div>
      <div className="scene__trigger trigger-third-scene" id="trigger-third-scene"></div>
      <div className="scene__trigger trigger-third-pool" id="trigger-third-pool"></div>
    </section>
  );
};
