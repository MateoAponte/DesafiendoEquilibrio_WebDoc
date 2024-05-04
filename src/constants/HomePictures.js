import BASKET_IMAGE from '../assets/img/athletes/Default-Fer.png';
import SWIM_IMAGE from '../assets/img/athletes/Default-Sofi.png';
import SKATING_IMAGE from '../assets/img/athletes/Default-Aleja.png';

import { Scene as BasketScene } from '../components/BasketAthlete/Scene';
import { Scene as SkateScene } from '../components/SkateAthlete/Scene';
import { Scene as SwimScene } from '../components/SwimAthlete/Scene';
import { ATHLETE, ATHLETHES_SOUND, ATHLETHES_VIDEO } from './pathsAthletes.ts';

export const HOME_PICTURES = [
  {
    name: 'Hola',
    picture: SKATING_IMAGE,
    scenes: <SkateScene />,
    url: ATHLETHES_VIDEO[ATHLETE.SKATE],
    sound: ATHLETHES_SOUND[ATHLETE.SKATE],
  },
  {
    name: 'Hola',
    picture: BASKET_IMAGE,
    scenes: <BasketScene />,
    url: ATHLETHES_VIDEO[ATHLETE.BASKET],
    sound: ATHLETHES_SOUND[ATHLETE.BASKET],
  },
  {
    name: 'Hola',
    picture: SWIM_IMAGE,
    scenes: <SwimScene />,
    url: ATHLETHES_VIDEO[ATHLETE.SWIM],
    sound: ATHLETHES_SOUND[ATHLETE.SWIM],
  },
];
