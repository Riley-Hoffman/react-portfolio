import { useEffect } from 'react';

const useParticleGameEvents = (refs, handleInteraction, handleScroll, initializeAnimation) => {
  useEffect(() => {
    const localRefs = { ...refs.current };
    const events = ['mousemove', 'mouseleave', 'touchmove', 'touchend', 'touchstart'];
  
    const handleEvent = (event) => {
      const isInside = event.type !== 'mouseleave' && event.type !== 'touchend';
      handleInteraction(event, isInside);
    };
  
    events.forEach(eventType => localRefs.container.addEventListener(eventType, handleEvent, { passive: false }));
    window.addEventListener('wheel', handleScroll, { passive: false });
  
    initializeAnimation();
  
    const handleResize = () => {
      const containerRect = localRefs.container.getBoundingClientRect();
      localRefs.canvas.width = containerRect.width;
      localRefs.canvas.height = containerRect.height;
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      events.forEach(eventType => localRefs.container.removeEventListener(eventType, handleEvent));
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(localRefs.animationFrameId);
    };
  }, [refs, handleInteraction, handleScroll, initializeAnimation]);
};

export default useParticleGameEvents;
