import { Suspense } from 'react';

import { SceneIntro } from './SceneIntro';
import { SceneSecond } from './SceneSecond';
import { SceneThird } from './SceneThird';
import { SceneFour } from './SceneFour';
import { SceneFive } from './SceneFive';

export const Scene = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SceneIntro />
        <SceneSecond />
        <SceneThird />
        <SceneFour />
        <SceneFive />
      </Suspense>
    </>
  );
};
