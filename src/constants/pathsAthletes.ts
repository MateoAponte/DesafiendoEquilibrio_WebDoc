import PosterBasket from '../assets/img/athletes/posters/Poster-Fer.png';
import PosterSkate from '../assets/img/athletes/posters/Poster-Aleja.png';
import PosterSwim from '../assets/img/athletes/posters/Poster-Sofi.png';

export const ATHLETE = {
  BASKET: 'basket',
  SWIM: 'swim',
  SKATE: 'skate',
};
export const ATHLETHES_VIDEO = {
  [ATHLETE.BASKET]:
    'https://firebasestorage.googleapis.com/v0/b/desafiandoelequilibrio-c2086.appspot.com/o/videos%2FFernando.mp4?alt=media&token=e8995372-cba2-48e9-92f2-b2d853757ef2',
  [ATHLETE.SWIM]:
    'https://firebasestorage.googleapis.com/v0/b/desafiandoelequilibrio-c2086.appspot.com/o/videos%2FSofia.mp4?alt=media&token=bfaceea0-7506-4e00-a59f-b5f9a611b602',
  [ATHLETE.SKATE]:
    'https://firebasestorage.googleapis.com/v0/b/desafiandoelequilibrio-c2086.appspot.com/o/videos%2FAlejandra.mp4?alt=media&token=118bcc68-7015-4e01-a16f-d70572b4b133',
};
export const ATHLETHES_SOUND = {
  [ATHLETE.BASKET]:
    'https://firebasestorage.googleapis.com/v0/b/desafiandoelequilibrio-c2086.appspot.com/o/sound%2FBasket.mp3?alt=media&token=5d9da630-b5ff-4c94-8df7-07e30cd96d5c',
  [ATHLETE.SWIM]:
    'https://firebasestorage.googleapis.com/v0/b/desafiandoelequilibrio-c2086.appspot.com/o/sound%2FSwim.mp3?alt=media&token=4cf9bf41-b2c1-4cc6-84c7-caaa33482f8e',
  [ATHLETE.SKATE]:
    'https://firebasestorage.googleapis.com/v0/b/desafiandoelequilibrio-c2086.appspot.com/o/sound%2FSkate.mp3?alt=media&token=abd87211-9560-41f3-a39c-826584865be1',
};

export const ATHLETHES_POSTER = {
  [ATHLETE.BASKET]: PosterBasket,
  [ATHLETE.SWIM]: PosterSwim,
  [ATHLETE.SKATE]: PosterSkate,
};

export const AMBIEND_SOUND =
  'https://firebasestorage.googleapis.com/v0/b/desafiandoelequilibrio-c2086.appspot.com/o/sound%2FAmbient.mp3?alt=media&token=e6b93d71-9655-42ba-ab37-773845222afd';
