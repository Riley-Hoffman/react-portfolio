import { useEffect, useRef } from 'react';

const useTriggerOnScroll = (force = 0) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const updateTriggerOnScroll = () => {
      const elements = document.querySelectorAll('.trigger-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distance = element.dataset.distance ?? 900;
        const isActive = rect.top < distance;
        element.dataset.active = isActive || force ? "true" : "false";

        if (element.dataset.repeat && !isActive && !force) {
          element.dataset.active = "false";
        }
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
