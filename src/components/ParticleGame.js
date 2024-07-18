import { useRef, useCallback, useState, useMemo } from 'react';
import { faMedal, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Particle from '../classes/Particle';
import useParticleGameEvents from '../hooks/useParticleGameEvents';

const ParticleGame = () => {
  const refs = useRef({
    canvas: null,
    container: null,
    particlesArray: [],
    animationFrameId: null,
    allClean: false,
    startTime: null,
    elapsedTime: 0,
    cursorInsideCanvas: false,
    isMobile: null,
  });

  const [state, setState] = useState({
    displayTime: null,
    gameInProgress: true,
    gameCompletedOnce: false,
  });

  const memoizedValues = useMemo(() => ({
    mouse: { x: null, y: null, radius: 150 },
  }), []);

  const updateCursorPosition = useCallback((clientX, clientY) => {
    const rect = refs.current.canvas.getBoundingClientRect();
    memoizedValues.mouse.x = clientX - rect.left;
    memoizedValues.mouse.y = clientY - rect.top;

    if (refs.current.startTime === null) {
      refs.current.startTime = Date.now();
    }
  }, [memoizedValues.mouse]);

  const handleInteraction = useCallback((event, isInside) => {
    if (event.type === 'mousemove' || event.type === 'touchmove') {
      const clientX = event.clientX ?? event.touches[0].clientX;
      const clientY = event.clientY ?? event.touches[0].clientY;
      updateCursorPosition(clientX, clientY);
    }
    refs.current.cursorInsideCanvas = isInside;

    if (event.type.startsWith('touch')) {
      event.preventDefault();
    }
  }, [updateCursorPosition]);

  const handleScroll = useCallback((event) => {
    if (state.gameInProgress && refs.current.cursorInsideCanvas) {
      event.preventDefault();
    }
  }, [state.gameInProgress]);

  const createParticle = useCallback((canvas) => {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 30 + 10;
    let colors = ['#A8A0D9', '#794E8D', '#ae4971'];
    let color = colors[Math.floor(Math.random() * colors.length)];
    let weight = Math.random() * 0.5 + 0.5;
    let speedFactor = refs.current.isMobile ? (window.innerHeight > 800 ? 0.3 * 0.54 : 0.3) : (window.innerHeight > 800 ? 0.8 * 0.54 : 0.9);
    speedFactor *= state.gameCompletedOnce ? 0.54 : 0.8;

    return new Particle(x, y, size, color, weight, speedFactor);
  }, [state.gameCompletedOnce]);

  const initParticles = useCallback((canvas) => {
    refs.current.particlesArray.length = 0;
    for (let i = 0; i < 50; i++) {
      refs.current.particlesArray.push(createParticle(canvas));
    }
  }, [createParticle]);

  const animateParticles = useCallback((ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let remainingParticles = false;
    refs.current.particlesArray.forEach(particle => {
      particle.update(ctx, memoizedValues.mouse, canvas);
      if (particle.inCanvas) {
        remainingParticles = true;
      }
    });

    if (!remainingParticles && !refs.current.allClean) {
      refs.current.allClean = true;
      const endTime = Date.now();
      refs.current.elapsedTime = ((endTime - refs.current.startTime) / 1000).toFixed(2);
      setState(prevState => ({
        ...prevState,
        displayTime: refs.current.elapsedTime,
        gameInProgress: false,
        gameCompletedOnce: true,
      }));
      document.getElementById('completionMessage').focus();
    }

    if (!remainingParticles && refs.current.allClean) {
      cancelAnimationFrame(refs.current.animationFrameId);
      refs.current.container.classList.add('done');
    } else {
      refs.current.animationFrameId = requestAnimationFrame(() => animateParticles(ctx, canvas));
    }
  }, [memoizedValues.mouse]);

  const initializeAnimation = useCallback(() => {
    const ctx = refs.current.canvas.getContext('2d');
    const container = refs.current.container;
    if (container.classList.contains('done')) {
      container.classList.remove('done');
    }
    const containerRect = container.getBoundingClientRect();

    refs.current.canvas.width = containerRect.width;
    refs.current.canvas.height = containerRect.height;

    refs.current.isMobile = window.innerWidth <= 768;

    initParticles(refs.current.canvas);
    animateParticles(ctx, refs.current.canvas);
  }, [initParticles, animateParticles]);

  useParticleGameEvents(refs, handleInteraction, handleScroll, initializeAnimation);

  const getMedalDetails = useCallback((displayTime) => {
    if (displayTime <= 25) {
      if (displayTime > 20) return { text: 'Bronze Medal', color: '#A2652A' };
      else if (displayTime > 15) return { text: 'Silver Medal', color: '#737373' };
      else return { text: 'Gold Medal', color: '#8A7400' };
    }
    return null;
  }, []);

  const medalDetails = useCallback(() => {
    return refs.current.allClean ? getMedalDetails(state.displayTime) : null;
  }, [getMedalDetails, state.displayTime]);

  const reloadAnimation = useCallback(() => {
    cancelAnimationFrame(refs.current.animationFrameId);
    refs.current.allClean = false;
    refs.current.startTime = null;
    refs.current.elapsedTime = 0;
    refs.current.cursorInsideCanvas = false;
    refs.current.particlesArray = [];
    refs.current.isMobile = null;
    setState(prevState => ({
      displayTime: null,
      gameInProgress: true,
      gameCompletedOnce: prevState.gameCompletedOnce,
    }));
    initializeAnimation();
  }, [initializeAnimation]);

  return (
    <div>
      <h2 className="label-text">Latest Concept</h2>
      <h3 className="text-40">Particle Cleanup Game</h3>
      <p className="text-26">How fast can you clear the board of particles?</p>
      <ol className="flex block-500 numbered-icons medal-criteria" aria-label="Medal Criteria">
        <li className="text-26"><span className="sr-only">Gold </span><FontAwesomeIcon icon={faLessThan} aria-hidden="false" aria-label="Less Than" /> 15s &nbsp;&nbsp;</li>
        <li className="text-26"><span className="sr-only">Silver </span>15s-20s &nbsp;&nbsp;</li>
        <li className="text-26"><span className="sr-only">Bronze </span>21s-25s &nbsp;&nbsp;</li>
      </ol>
      <div className="max-800px">
        <div ref={ref => refs.current.container = ref} className="width-100 particle-game overlay" role="application" aria-label="Cleanup Game">
          <canvas ref={ref => refs.current.canvas = ref} />
          <div>
            {refs.current.allClean && <div><p id="completionMessage" className="flex width-100 text-center completion-message" tabIndex="-1">All clean! <small aria-live="polite">Time taken: <span className="text-600" aria-live="polite">{state.displayTime} seconds</span></small> <span className="text-800 text-uppercase" aria-live="polite">{ medalDetails() && ( <span className="text-26" aria-live="polite"> {medalDetails().text} <br /><FontAwesomeIcon icon={faMedal} color={medalDetails().color} /> </span> )}</span></p>
            </div>}
          </div>
        </div>
        <p><button className="button" onClick={reloadAnimation}>Play Again</button></p>
      </div>
    </div>
  );
};

export default ParticleGame;
