import { useEffect, useMemo, useState } from "react";

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const getwindowSize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", () => setTimeout(getwindowSize, 500));

    return () => {
      window.removeEventListener("resize", () =>
        setTimeout(getwindowSize, 500)
      );
    };
  }, []);

  return windowWidth;
};

export const useMoreCards = () => {
  const windowWidth = useWindowSize();

  const getCountMoreCards = useMemo(() => {
    if (windowWidth < 633) return 2;
    if (windowWidth < 1137) return 2;
    return 3;
  }, [windowWidth]);

  return [windowWidth, getCountMoreCards];
};
