import { useEffect } from 'react';
import useParallax from '../../../hooks/useParallax';

const CoverImage = ({srcImg, mobileImg, width, height}) => {
    
    const imageRef = useParallax();
    useEffect(() => {
        const preloadImage = () => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.as = 'image';
            preloadLink.href = isMobile ? mobileImg : srcImg;
            preloadLink.fetchPriority = "high";
            document.head.insertBefore(preloadLink, document.head.firstChild.nextSibling.nextSibling);
            return () => {
                document.head.removeChild(preloadLink);
            };
        };
        preloadImage();
    }, [mobileImg, srcImg]);
    
    return (
      <img className="max-w-none w-[130vw] h-[120vh] absolute z-[-1] object-cover" src={srcImg} srcSet={`${mobileImg} 1200w, ${srcImg} 1920w`} sizes="(max-width: 768px) 100vw, 130vw" alt="" width={width} height={height} fetchpriority="high" ref={imageRef} />
    );
};

export default CoverImage;
