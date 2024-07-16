import { useEffect, useRef } from 'react';

const useTriggerOnScroll = (force = 0) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const updateParallax = () => {
      let classes = ["trigger-on-scroll"];
      classes.forEach((cls) => {
        const elements = document.getElementsByClassName(cls);
        if (elements.length) {
          Object.keys(elements).forEach((key) => {
            const rect = elements[key].getBoundingClientRect();
            if (force || rect.top < (elements[key].dataset.distance ?? 800)) {
              elements[key].dataset.active = "true";
            }
            if (
              elements[key].dataset.repeat &&
              rect.top > (elements[key].dataset.distance ?? 800)
            ) {
              elements[key].dataset.active = "false";
            }
          });
        }
      });
    };

    setTimeout(() => {
      updateParallax();
    }, 100);

    window.onscroll = updateParallax;

    return () => {
      window.onscroll = null;
    };
  }, [force]);

  return elementsRef;
};

export default useTriggerOnScroll;
