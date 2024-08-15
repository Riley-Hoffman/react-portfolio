import useParallax from '../../../hooks/useParallax';

const CoverImage = ({srcImg, mobileImg, width, height}) => {
    
    const imageRef = useParallax();
    return (
      <img className="max-w-none w-[130vw] h-[120vh] absolute z-[-1] object-cover" src={srcImg} srcSet={`${mobileImg} 1200w, ${srcImg} 1920w`} sizes="(max-width: 768px) 100vw, 130vw" alt="" width={width} height={height} fetchpriority="high" ref={imageRef} />
    );
};

export default CoverImage;
