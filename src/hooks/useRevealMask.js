import CanchaBasket from '../assets/img/backgrounds/Cancha_Basket.png';
import CanchaUltimate from '../assets/img/backgrounds/Cancha_Ultimate.png';
import CanchaAtl from '../assets/img/backgrounds/Pista_Atl.png';

const Backgrounds = [CanchaBasket, CanchaUltimate, CanchaAtl];

export const useRevealMask = () => {
  let backgroundPos = 0;
  const backgroundSetter = () => {
    const revealImg = document.querySelector('.home__mask');
    if (backgroundPos < Backgrounds.length - 1) {
      revealImg.style.backgroundImage = `url(${Backgrounds[backgroundPos]}`;
      backgroundPos += 1;
    } else {
      backgroundPos = 0;
    }
  };
  const timerBackground = () => {
    backgroundSetter();
    setInterval(() => {
      backgroundSetter();
    }, 15000);
  };
  const onMouseMove = () => {
    const container = document.querySelector('.home');
    const revealImg = document.querySelector('.home__mask');
    let isHovering = false;

    container.addEventListener(
      'mousemove',
      throttle(function (e) {
        if (isHovering) {
          const rect = container.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          revealImg.style.clipPath = 'circle(200px at ' + mouseX + 'px ' + mouseY + 'px)';
          revealImg.style.boxShadow = '0 0 10px 10px rgba(0, 0, 0, 0.5)';
        }
      }, 16),
    );

    container.addEventListener('mouseenter', function () {
      isHovering = true;
      revealImg.style.opacity = '1';
    });

    container.addEventListener('mouseleave', function () {
      isHovering = false;
      revealImg.style.opacity = '0';
    });

    // Función para limitar la frecuencia de ejecución de una función
    function throttle(func, limit) {
      var lastFunc;
      var lastRan;
      return function () {
        var context = this;
        var args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(function () {
            if (Date.now() - lastRan >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    }
  };
  return {
    onMouseMove,
    timerBackground,
  };
};
