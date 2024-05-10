export const MediaPlayer = ({ className, url }) => {
  return (
    <>
      <div className={className + ' gallery-artist__media'}>
        <iframe
          src={url}
          title="YouTube embed video about D.E"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      </div>
    </>
  );
};
