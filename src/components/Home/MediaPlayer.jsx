// import { useVideoLoader } from '../../hooks/useVideoLoader';
// import { useEffect, useState } from 'react';
import { ATHLETHES_VIDEO, ATHLETE } from '../../constants/pathsAthletes.ts';

export const MediaPlayer = ({ className }) => {
  // const [offset, setOffset] = useState(0);
  // const { fetchBlob } = useVideoLoader(offset, setOffset);
  // useEffect(() => {
  //   fetchBlob('Revancha');
  // }, []);
  return (
    <>
      <div className={className + ' gallery-artist__media'}>
        <video id="videoPlayer" src={ATHLETHES_VIDEO[ATHLETE.BASKET]} controls name="media">
          <source type="video/mp4" />
        </video>
      </div>
    </>
  );
};
