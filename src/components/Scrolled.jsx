import React from 'react';

import { useScrollMagic } from '../hooks/useScrollMagic';
import { useEffect } from 'react';

export const Scrolled = () => {
  const { scrollTrigger } = useScrollMagic();
  useEffect(() => {
    scrollTrigger(
      '#trigger-scrolled',
      '#scrolled-el',
      [
        {
          opacity: '0',
        },
      ],
      1000,
      {
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    );
  }, []);

  return (
    <>
      <div className="scrolled" id="scrolled-el">
        <div className="scrolled__content">
          <div className="scrolled-text">
            <span className="scrolled-text__icon">↓</span>
            <span className="scrolled-text__text">Haz scroll para interactuar</span>
            <span className="scrolled-text__icon">↓</span>
          </div>
        </div>
        <div className="trigger-scrolled" id="trigger-scrolled"></div>
      </div>
    </>
  );
};
