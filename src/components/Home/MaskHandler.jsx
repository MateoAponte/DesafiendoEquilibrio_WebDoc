import { useLocation } from 'react-router-dom';
import { useRevealMask } from '../../hooks/useRevealMask';
import { useEffect, useState } from 'react';
import CanchaBasket from '../../assets/img/backgrounds/Cancha_Basket.png';
import CanchaUltimate from '../../assets/img/backgrounds/Cancha_Ultimate.png';
import CanchaAtl from '../../assets/img/backgrounds/Pista_Atl.png';
import TeamWork from '../../assets/img/backgrounds/TeamWork.png';
import Contact from '../../assets/img/backgrounds/Contact.png';
import PQ from '../../assets/img/backgrounds/PQ.png';

export const MaskHandler = () => {
  const [currentBackgrounds, setCurrentBackgrounds] = useState([]);
  const { onMouseMove, timerBackground } = useRevealMask(currentBackgrounds);
  const location = useLocation();
  const HomeBackgrounds = [CanchaBasket, CanchaUltimate, CanchaAtl];
  const TeamWorkBackgrounds = [TeamWork];
  const ContactBackgrounds = [Contact];
  const PQBackgrounds = [PQ];

  const evalPathToBackground = () => {
    switch (location.pathname) {
      case '/':
        setCurrentBackgrounds(HomeBackgrounds);
        break;
      case '/equipo':
        setCurrentBackgrounds(TeamWorkBackgrounds);
        break;
      case '/proyecto':
        setCurrentBackgrounds(PQBackgrounds);
        break;
      case '/contactanos':
        setCurrentBackgrounds(ContactBackgrounds);
        break;
      default:
        setCurrentBackgrounds(HomeBackgrounds);
    }
  };
  useEffect(() => {
    evalPathToBackground();
  }, [location.pathname]);
  useEffect(() => {
    onMouseMove();
    timerBackground();
  }, [currentBackgrounds]);
  return <></>;
};
