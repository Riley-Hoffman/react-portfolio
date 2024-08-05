import { useEffect } from 'react';

const useParticleCleanupEvents = (refs, handleInteraction, handleScroll, initializeAnimation) => {
  useEffect(() => {
    const localRefs = { ...refs.current };
    const events = ['mousemove', 'mouseleave', 'touchmove', 'touchend', 'touchstart'];
  
    const handleEvent = (event) => {
      const isInside = event.type !== 'mouseleave' && event.type !== 'touchend';
      handleInteraction(event, isInside);
    };

    const manageEventListeners = (action, element, eventTypes, handler, options) => {
      eventTypes.forEach(eventType => element[`${action}EventListener`](eventType, handler, options));
    };
  
    manageEventListeners('add', localRefs.container, events, handleEvent, { passive: false });
    window.addEventListener('wheel', handleScroll, { passive: false });
  
    initializeAnimation();
  
    const handleResize = () => {
      const containerRect = localRefs.container.getBoundingClientRect();
      localRefs.canvas.width = containerRect.width;
      localRefs.canvas.height = containerRect.height;
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      manageEventListeners('remove', localRefs.container, events, handleEvent);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(localRefs.animationFrameId);
    };
  }, [refs, handleInteraction, handleScroll, initializeAnimation]);
};

export default useParticleCleanupEvents;
