import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import { faMedal, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background from '../assets/wood-background-grayscale.jpg';

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
  });

  const [state, setState] = useState({
    displayTime: null,
    gameInProgress: true,
  });

  const memoizedValues = useMemo(() => ({
    mouse: { x: null, y: null, radius: 150 },
    isMobile: window.innerWidth <= 768,
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

  const Particle = useMemo(() => {
    return class {
      constructor(x, y, size, color, weight) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.weight = weight;
        this.directionX = 0;
        this.directionY = 0;
        this.vertices = this.generateVertices();
        this.inCanvas = true;
      }

      generateVertices() {
        const vertices = [];
        const numVertices = Math.floor(Math.random() * 5) + 3;
        for (let i = 0; i < numVertices; i++) {
          const angle = (i / numVertices) * Math.PI * 2;
          const radius = this.size * (Math.random() * 0.5 + 0.5);
          vertices.push({
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
          });
        }
        return vertices;
      }

      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x + this.vertices[0].x, this.y + this.vertices[0].y);
        for (let i = 1; i < this.vertices.length; i++) {
          ctx.lineTo(this.x + this.vertices[i].x, this.y + this.vertices[i].y);
        }
        ctx.closePath();
        ctx.fill();
      }

      update(ctx, mouse, canvas) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        const speedFactor = memoizedValues.isMobile ? 0.4 : 1;
        if (distance < mouse.radius) {
          if (distance < 50) distance = 50;
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance + 0.5;
          let directionX = forceDirectionX * force * this.weight * 5 * speedFactor;
          let directionY = forceDirectionY * force * this.weight * 5 * speedFactor;
          this.x -= directionX;
          this.y -= directionY;

          this.directionX = (Math.random() - 0.5) * 2 * speedFactor;
          this.directionY = (Math.random() - 0.5) * 2 * speedFactor;
        } else {
          this.directionX *= 0.95 * speedFactor;
          this.directionY *= 0.95 * speedFactor;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        if (this.x < -7 || this.x > canvas.width - 7 || this.y < -7 || this.y > canvas.height - 7) {
          this.inCanvas = false;
        }

        this.draw(ctx);
      }
    };
  }, [memoizedValues.isMobile]);

  const createParticle = useCallback((canvas) => {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 30 + 10;
    let colors = ['#A8A0D9', '#794E8D', '#ae4971'];
    let color = colors[Math.floor(Math.random() * colors.length)];
    let weight = Math.random() * 0.5 + 0.5;
    return new Particle(x, y, size, color, weight);
  }, [Particle]);

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
      }));
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

    initParticles(refs.current.canvas);
    animateParticles(ctx, refs.current.canvas);
  }, [initParticles, animateParticles]);

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
  }, [handleInteraction, handleScroll, initializeAnimation]);

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
    refs.current.allClean = false;
    refs.current.startTime = null;
    refs.current.elapsedTime = 0;
    setState(prevState => ({
      ...prevState,
      displayTime: null,
      gameInProgress: true,
    }));
    initializeAnimation();
  }, [initializeAnimation]);

  return (
    <div>
      <h2 style={{ display: 'inline-block', backgroundImage: 'linear-gradient(90deg, #7868BF 0%, #ae4971 50%, #794e8e 70%)', color: 'white', padding: '0 5px', margin: '0 20px', fontFamily: '"Inconsolata", monospace' }}>Fun With Particles</h2>
      <h3 className="text-40">Particle Animation Cleanup Game</h3>
      <p className="text-26">How fast can you clear the board of particles?</p>
      <ol className="flex block-500 numbered-icons medals">
        <li className="text-26"><FontAwesomeIcon icon={faLessThan} /> 15s &nbsp;&nbsp;</li>
        <li className="text-26">15s-20s &nbsp;&nbsp;</li>
        <li className="text-26">21s-25s &nbsp;&nbsp;</li>
      </ol>
      <div className="max-800px" style={{ marginLeft: 0 }}>
        <div ref={ref => refs.current.container = ref} className="width-100 particle-game overlay" style={{ height: '500px', position: 'relative', border: '11px solid #12121c', boxShadow: '2px 2px 0.5em rgba(122, 122, 122, 0.55), inset 1px 1px 0 rgba(255, 255, 255, 0.9), inset -1px -1px 0 rgba(0, 0, 0, 0.5)', overflow: 'hidden', backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'right', maxWidth: 'calc(100% - 40px)', margin: '0 auto' }}>
          <canvas ref={ref => refs.current.canvas = ref} style={{ display: 'block', position: 'absolute', top: 0, left: 0, filter: 'drop-shadow(1px 1px 0px #00000061)' }} />
          <div style={{ height: '100%' }}>
            {refs.current.allClean && <div><p className="flex width-100 text-center" style={{ position: 'absolute', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontFamily: '"Source Sans Pro 3", sans-serif', margin: 0, backgroundColor: 'white', padding: 0, flexDirection: 'column'}}>All clean! <small>Time taken: <span className="text-halfbold">{state.displayTime} seconds</span></small> <span className="text-bold text-uppercase">{ medalDetails() && ( <span className="text-26"> {medalDetails().text} <br /><div style={{ animation: 'spin 2.4s infinite'}}><FontAwesomeIcon icon={faMedal} color={medalDetails().color} style={{ fontSize: '60px'}} /></div> </span> )}</span></p>
            </div>}
          </div>
        </div>
        <p><button className="button" onClick={reloadAnimation} style={{ position: 'relative', zIndex: 1 }}>Play Again</button></p>
      </div>
    </div>
  );
};

export default ParticleGame;
