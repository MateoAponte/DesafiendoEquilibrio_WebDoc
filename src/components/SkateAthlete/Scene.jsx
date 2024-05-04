import React from 'react';

import { SceneIntro } from './SceneIntro';
import { SceneSecond } from './SceneSecond';
import { SceneThird } from './SceneThird';
import { SceneFour } from './SceneFour';
import { SceneFive } from './SceneFive';
import { SceneSix } from './SceneSix';

export const Scene = () => {
  return (
    <>
      <SceneIntro />
      <SceneSecond />
      <SceneThird />
      <SceneFour />
      <SceneFive />
      <SceneSix />
    </>
  );
};
