export const MediaPlayer = ({ className, url }) => {
  return (
    <>
      <div className={className + ' gallery-artist__media'}>
        <video id="videoPlayer" src={url} controls name="media">
          <source type="video/mp4" />
        </video>
      </div>
    </>
  );
};
