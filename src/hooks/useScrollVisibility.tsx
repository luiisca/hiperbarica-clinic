import { useState, useEffect } from "react";

interface UseScrollVisibilityOptions {
  showOnScrollUp?: boolean;
  showOnScrollDown?: boolean;
  onScrollDown?: () => void;
  hideOffset?: number;
  hideOnStart?: boolean;
}

export const useScrollVisibility = (
  options: UseScrollVisibilityOptions = {}
) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(!options.hideOnStart ?? true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      // scroll down
      setVisible(options.showOnScrollDown ?? false);
      options.onScrollDown && options.onScrollDown();
    } else {
      // scroll up
      if (options.hideOffset && currentScrollPos < options.hideOffset) {
        setVisible(false);
      } else {
        setVisible(options.showOnScrollUp ?? true);
      }
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return visible;
};
