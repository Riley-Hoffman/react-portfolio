import { useEffect } from 'react';

const useIntersectionObserver = (selector, className) => {
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log(entry);
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: '100px'
      });

      const elements = document.querySelectorAll(selector);
      elements.forEach(element => observer.observe(element));

      return () => {
        elements.forEach(element => observer.unobserve(element));
      };
    } else {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => element.classList.add(className));
    }
  }, [selector, className]);
};

export default useIntersectionObserver;
