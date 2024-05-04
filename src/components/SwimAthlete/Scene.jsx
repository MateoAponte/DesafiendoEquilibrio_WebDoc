import React from 'react';

import { SceneIntro } from './SceneIntro';
import { SceneSecond } from './SceneSecond';
import { SceneThird } from './SceneThird';
import { SceneFour } from './SceneFour';

export const Scene = () => {
  return (
    <>
      <SceneIntro />
      <SceneSecond />
      <SceneThird />
      <SceneFour />
    </>
  );
};
