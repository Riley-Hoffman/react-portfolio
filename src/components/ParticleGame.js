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
    time: null,
    gameInProgress: true,
    gameCompletedOnce: false,
    cursorMessage: '',
    messageVisible: true,
  });

  const mouse = useMemo(() => ({ x: null, y: null, radius: 150 }), []);

  const updateCursorPosition = useCallback((clientX, clientY) => {
    const rect = refs.current.canvas.getBoundingClientRect();
    mouse.x = clientX - rect.left;
    mouse.y = clientY - rect.top;
    if (refs.current.startTime === null) {
      refs.current.startTime = Date.now();
    }
  }, [mouse]);

  const showMessageTemporarily = useCallback((message) => {
    setState(prevState => ({
      ...prevState,
      cursorMessage: message,
      messageVisible: false,
    }));
    setTimeout(() => {
      setState(prevState => ({ ...prevState, messageVisible: true }));
    }, 10);
  }, []);

  const handleInteraction = useCallback((event, isInside) => {
    const isTouchEvent = event.type.startsWith('touch');
    const clientX = event.clientX ?? event.touches[0]?.clientX;
    const clientY = event.clientY ?? event.touches[0]?.clientY;
  
    if (['mousemove', 'touchmove'].includes(event.type)) {
      updateCursorPosition(clientX, clientY);
    }
  
    if (refs.current.cursorInsideCanvas !== isInside) {
      refs.current.cursorInsideCanvas = isInside;
      if (isInside) {
        setTimeout(() => {
          refs.current.container.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }, 100);
      }
      
      if (state.gameInProgress) {
        showMessageTemporarily(`Your cursor has ${isInside ? 'entered' : 'exited'} Particle Cleanup Game play area`);
      }
    }
  
    if (isTouchEvent) {
      event.preventDefault();
    }
  }, [updateCursorPosition, state.gameInProgress, showMessageTemporarily]);

  const handleScroll = useCallback((event) => {
    if (state.gameInProgress && refs.current.cursorInsideCanvas) {
      event.preventDefault();
    }
  }, [state.gameInProgress]);

  const createParticle = useCallback((canvas) => {
    const { width, height } = canvas;
    const size = Math.random() * 30 + 10;
    const colors = ['#A8A0D9', '#794E8D', '#ae4971'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const weight = Math.random() * 0.5 + 0.5;
    const isMobile = refs.current.isMobile;
    const isTallScreen = window.innerHeight > 800;
    const speedFactor = (isMobile ? 0.4 : 0.8) * (isTallScreen ? 0.54 : 1) * (state.gameCompletedOnce ? 0.4 : 0.8);

    return new Particle(Math.random() * width, Math.random() * height, size, color, weight, speedFactor);
  }, [state.gameCompletedOnce]);

  const initParticles = useCallback((canvas) => {
    refs.current.particlesArray = Array.from({ length: 150 }, () => createParticle(canvas));
  }, [createParticle]);

  const animateParticles = useCallback((ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let remainingParticles = false;

    refs.current.particlesArray.forEach(particle => {
      particle.update(ctx, mouse, canvas);
      if (particle.inCanvas) remainingParticles = true;
    });

    if (!remainingParticles) {
      if (!refs.current.allClean) {
        refs.current.allClean = true;
        refs.current.elapsedTime = ((Date.now() - refs.current.startTime) / 1000).toFixed(1);
        setState(prevState => ({
          ...prevState,
          time: refs.current.elapsedTime,
          gameInProgress: false,
          gameCompletedOnce: true,
        }));
        document.getElementById('completionMessage').focus();
        refs.current.container.classList.add('done');
      } else {
        cancelAnimationFrame(refs.current.animationFrameId);
      }
    } else {
      refs.current.animationFrameId = requestAnimationFrame(() => animateParticles(ctx, canvas));
    }
  }, [mouse]);

  const initializeAnimation = useCallback(() => {
    const ctx = refs.current.canvas.getContext('2d');
    const container = refs.current.container;

    if (container.classList.contains('done')) container.classList.remove('done');

    const { width, height } = container.getBoundingClientRect();
    refs.current.canvas.width = width;
    refs.current.canvas.height = height;
    refs.current.isMobile = window.innerWidth <= 768;

    initParticles(refs.current.canvas);
    animateParticles(ctx, refs.current.canvas);
  }, [initParticles, animateParticles]);

  useParticleGameEvents(refs, handleInteraction, handleScroll, initializeAnimation);

  const getMedalDetails = useCallback((time) => {
    if (time <= 25) {
      if (time > 20) return { text: 'Bronze Medal', color: '#A2652A' };
      if (time > 15) return { text: 'Silver Medal', color: '#737373' };
      return { text: 'Gold Medal', color: '#8A7400' };
    }
    return null;
  }, []);

  const medalDetails = useMemo(() => refs.current.allClean ? getMedalDetails(state.time) : null, [getMedalDetails, state.time]);

  const reloadAnimation = useCallback(() => {
    cancelAnimationFrame(refs.current.animationFrameId);
    Object.assign(refs.current, {
      allClean: false,
      startTime: null,
      elapsedTime: 0,
      cursorInsideCanvas: false,
      particlesArray: [],
      isMobile: null,
    });
    setState(prevState => ({
      time: null,
      gameInProgress: true,
      gameCompletedOnce: prevState.gameCompletedOnce,
      cursorMessage: '',
      messageVisible: true,
    }));
    initializeAnimation();
  }, [initializeAnimation]);

  return (
    <div>
      <h2 className="label-text">Latest Concept</h2>
      <h3 className="text-40">Particle Cleanup Game</h3>
      <p className="text-26">How quickly can you clear all the particles from the board using your cursor or finger?</p>
      <ol className="flex block-500 numbered-icons medal-criteria" aria-label="Medal Criteria">
        <li className="text-26"><span className="sr-only">Gold, Less Than 15 seconds.</span><span aria-hidden="true"><FontAwesomeIcon icon={faLessThan} /> 15s &nbsp;&nbsp;</span></li>
        <li className="text-26"><span className="sr-only">Silver, 15 to 20 seconds.</span><span aria-hidden="true">15s-20s &nbsp;&nbsp;</span></li>
        <li className="text-26"><span className="sr-only">Bronze, 21 to 25 seconds.</span><span aria-hidden="true">21s-25s &nbsp;&nbsp;</span></li>
      </ol>
      <div className="max-800px">
        <div ref={ref => refs.current.container = ref} className="width-100 particle-game overlay" role="application" aria-label="Cleanup Game" tabIndex="-1">
          <canvas className="width-100" ref={ref => refs.current.canvas = ref} />
          <div className="width-100">
            {refs.current.allClean && (
              <div>
                <p id="completionMessage" className="flex width-100 text-center completion-message" tabIndex="-1">
                  All clean! <small aria-live="polite">Time taken: <span className="text-600" aria-live="polite">{state.time} seconds</span></small>
                  <span className="text-800 text-uppercase" aria-live="polite">
                    {medalDetails && (
                      <span className="text-26" aria-live="polite">
                        {medalDetails.text} <br />
                        <FontAwesomeIcon icon={faMedal} color={medalDetails.color} />
                      </span>
                    )}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
        {state.gameInProgress && !refs.current.allClean && (
            <p className={`sr-only ${state.messageVisible ? '' : 'hidden'}`} aria-live="polite">
              {state.cursorMessage}
            </p>
          )}
          <p><button className="button" onClick={reloadAnimation}>Play Again</button></p>
        </div>
      </div>
    );
  };

  export default ParticleGame;
