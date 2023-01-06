import { useEffect, useMemo, useState } from "react";

export const useWindowSize = () => {
  
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const getwindowSize = () => {
      setWindowWidth(window.innerWidth)
      // console.log(window.innerWidth)
    };

    getwindowSize();

    window.addEventListener('resize', () => setTimeout(getwindowSize, 500));

    return () => {
      window.removeEventListener('resize', () => setTimeout(getwindowSize, 500));
    };
  }, []);

  return windowWidth;
}

export const useMoreCards = () => {

  const windowWidth = useWindowSize();

  const getMoreCardsCount = useMemo(() => {
    if (windowWidth < 633) return 1;
    if (windowWidth < 1137) return 2;
    return 3;
  }, [windowWidth]);

  return getMoreCardsCount;
}