import { useEffect, useState, RefObject } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setIsOnScreen(true)
    );
    ref.current && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return isOnScreen;
}
