import { useLocation } from 'react-router-dom';
import { useRevealMask } from '../../hooks/useRevealMask';
import { useEffect } from 'react';

export const MaskHandler = () => {
  const { onMouseMove, timerBackground } = useRevealMask();
  const location = useLocation();

  useEffect(() => {
    onMouseMove();
    timerBackground();
  }, [location.pathname]);
  return <></>;
};
