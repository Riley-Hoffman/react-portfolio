import { useEffect, useRef } from 'react';

const useTriggerOnScroll = (force = 0) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const updateElementActivation = (element, rect, distance) => {
      const isActive = rect.top < distance;
      element.dataset.active = isActive || force ? "true" : "false";

      if (element.dataset.repeat && !isActive && !force) {
        element.dataset.active = "false";
      }
    };

    const updateTriggerOnScroll = () => {
      requestAnimationFrame(() => {
        elementsRef.current.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const distance = parseInt(element.dataset.distance ?? "800", 10);
          updateElementActivation(element, rect, distance);
        });
      });
    };

    setTimeout(updateTriggerOnScroll, 100);
    window.addEventListener('scroll', updateTriggerOnScroll);

    return () => {
      window.removeEventListener('scroll', updateTriggerOnScroll);
    };
  }, [force]);

  return elementsRef;
};

export default useTriggerOnScroll;
