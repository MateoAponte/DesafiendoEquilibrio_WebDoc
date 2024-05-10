import PosterBasket from '../assets/img/athletes/posters/Poster-Fer.png';
import PosterSkate from '../assets/img/athletes/posters/Poster-Aleja.png';
import PosterSwim from '../assets/img/athletes/posters/Poster-Sofi.png';

export const ATHLETE = {
  BASKET: 'basket',
  SWIM: 'swim',
  SKATE: 'skate',
};
export const ATHLETHES_VIDEO = {
  [ATHLETE.BASKET]: 'https://www.youtube.com/embed/A9hgn-8TB3s?si=iAdVLG-tM2DBLKtS',
  [ATHLETE.SWIM]: 'https://www.youtube.com/embed/Moe1eazwuX4?si=QqH3nr-Slt-pal4X',
  [ATHLETE.SKATE]: 'https://www.youtube.com/embed/IS4MjdMzC2E?si=tX3YMKm7AiFt-DJu',
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
