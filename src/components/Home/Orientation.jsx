import { useEffect } from 'react';
import { useDetectOrientation } from '../../hooks/useOrientation';
import GIRAR from '../../assets/img/icons/girar-smartphone_icon.png';

export const OrientationSetter = () => {
  const { onLoadPage } = useDetectOrientation();
  useEffect(() => {
    onLoadPage('#orientationElement');
  }, []);
  return (
    <div className="orientation-element" id="orientationElement">
      <img className="orientation-icon" src={GIRAR} alt="Girar celular a landscape" />
      <span className="orientation-text">Para disfrutar de la experiencia, gira el dispositivo</span>
    </div>
  );
};
