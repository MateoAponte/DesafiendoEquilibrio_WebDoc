export const MediaPlayer = ({ className, url, poster }) => {
  return (
    <>
      <div className={className + ' gallery-artist__media'}>
        <video id="videoPlayer" src={url} controls name="media" poster={poster}>
          <source type="video/mp4" />
        </video>
      </div>
    </>
  );
};
