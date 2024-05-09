import { useState, useEffect } from 'react';
import Atras from '../../assets/img/icons/atras-icon.png';
import { Link, useLocation } from 'react-router-dom';

export const GoToBack = () => {
  const [canInteract, setCanInteract] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') {
      setCanInteract(true);
    }
  }, [location.pathname]);

  return (
    <>
      {canInteract && (
        <Link to="/">
          <img className="back-icon" src={Atras} alt="Get to home view" />
        </Link>
      )}
    </>
  );
};
