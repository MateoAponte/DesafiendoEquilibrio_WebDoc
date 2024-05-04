export const useDetectOrientation = () => {
  const onLoadPage = (el) => {
    const orientationSetter = () => {
      const element = document.querySelector(el);
      if (window.innerWidth < window.innerHeight) {
        console.log(el);
        element.style.display = 'flex';
      } else {
        element.style.display = 'none';
      }
    };
    window.addEventListener('orientationchange', orientationSetter);
    window.addEventListener('resize', orientationSetter);
  };
  return {
    onLoadPage,
  };
};
