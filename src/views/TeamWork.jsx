import { useEffect, useState } from 'react';
import { Item } from '../components/TeamWork/Item';
import { TEAM_WORK } from '../constants/TeamWorkInfo';
import Arrow from '../assets/img/icons/Arrow-icon.png';
export const TeamWork = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3);
  const [teamPagination, setTeamPagination] = useState([]);

  const handlePagination = (direction) => {
    if (direction === 'prev' && min >= 3) {
      setMin(min - 3);
      setMax(max - 3);
    } else if (direction === 'next' && max < TEAM_WORK.length) {
      setMin(min + 3);
      setMax(max + 3);
    }
  };
  useEffect(() => {
    const teamCopy = [...TEAM_WORK];
    const teamSliced = teamCopy.slice(min, max);
    setTeamPagination(teamSliced);
  }, [min, max]);
  return (
    <div className="generic-container">
      {min >= 3 && <img className="team-work__arrow team-work__arrow--left" src={Arrow} alt="" onClick={() => handlePagination('prev')} />}
      <div className="team-work">
        <div className="team-work__title">
          <h1 className="team-work__title-text">EQUIPO</h1>
          <h1 className="team-work__title-shadow">EQUIPO</h1>
        </div>
        {teamPagination.map((item) => (
          <Item image={item.image} name={item.name} text={item.text} />
        ))}
      </div>
      {max < TEAM_WORK.length && <img className="team-work__arrow team-work__arrow--right" src={Arrow} alt="" onClick={() => handlePagination('next')} />}
    </div>
  );
};
