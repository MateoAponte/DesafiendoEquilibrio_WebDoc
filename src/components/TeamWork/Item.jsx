export const Item = ({ image, text, name }) => {
  return (
    <div className="team-work__item">
      <div className="team-work__item-image">
        <img src={image} alt={text} />
        <span className="team-work__item-name">{name}</span>
      </div>
      <div className="team-work__item-text">
        <span>{text}</span>
      </div>
    </div>
  );
};
