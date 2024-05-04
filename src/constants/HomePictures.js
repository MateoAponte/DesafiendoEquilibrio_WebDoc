import BASKET_IMAGE from '../assets/img/athletes/Default-Fer.png';
import SWIM_IMAGE from '../assets/img/athletes/Default-Sofi.png';
import SKATING_IMAGE from '../assets/img/athletes/Default-Aleja.png';

import { Scene as BasketScene } from '../components/BasketAthlete/Scene';
import { Scene as SkateScene } from '../components/SkateAthlete/Scene';
import { Scene as SwimScene } from '../components/SwimAthlete/Scene';

export const HOME_PICTURES = [
  {
    name: 'Hola',
    picture: SKATING_IMAGE,
    scenes: <SkateScene />,
  },
  {
    name: 'Hola',
    picture: BASKET_IMAGE,
    scenes: <BasketScene />,
  },
  {
    name: 'Hola',
    picture: SWIM_IMAGE,
    scenes: <SwimScene />,
  },
];
