export const useDetectOrientation = () => {
  const onLoadPage = (el) => {
    const orientationSetter = () => {
      const element = document.querySelector(el);
      if (window.innerWidth < window.innerHeight) {
        element.style.display = 'flex';
      } else {
        element.style.display = 'none';
      }
    };
    window.addEventListener('load', orientationSetter);
    window.addEventListener('orientationchange', orientationSetter);
    window.addEventListener('resize', orientationSetter);
  };
  return {
    onLoadPage,
  };
};
