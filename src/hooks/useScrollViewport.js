import { useEffect, useState } from 'react';

export const videoHandler = (el) => () => {
  if (!!el) {
    const rect = el.getBoundingClientRect();
    const clientHeight = window.innerHeight || document.documentElement.clientHeight;
    const clientWidth = window.innerWidth || document.documentElement.clientWidth;
    const clientWidthOffset = clientWidth * 0.5;
    const clientHeightOffset = clientHeight * 0.5;
    const isWatched =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= clientHeight + clientHeightOffset &&
      rect.right <= clientWidth + clientWidthOffset &&
      getPageHeight() - window.scrollY >= window.innerHeight;
    if (el === '#scene-basket-tv') {
      console.log(getPageHeight() - window.scrollY >= window.innerHeight, rect.bottom <= clientHeight + clientHeightOffset);
    }
    isWatched ? el.play() : el.pause();
  }
};

const getPageHeight = () => {
  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  return height;
};

export const fixSpacing = (el, position) => () => {
  if (!!el && position) {
    const rect = el.getBoundingClientRect();
    const yPos = rect.top;
    const isInOriginalPos = window.scrollY >= position;
    yPos <= 0 && isInOriginalPos ? (el.style.position = 'fixed') : (el.style.position = 'sticky');
  }
};

export const useScrollHandler = (query, fn) => {
  const [element, setElement] = useState(null);
  const [position, setPosition] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      const updatedElement = document.querySelector(query);
      setElement(updatedElement);

      if (updatedElement) {
        clearInterval(interval);
      }

      const rect = updatedElement?.getBoundingClientRect() || {};
      setPosition(rect.top);

      window.addEventListener('scroll', fn(updatedElement, position), { passive: true });
    }, 500);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', fn(query));
    };
  }, [element]);
  // returns true or false based on whether or not the element is in viewport
};
