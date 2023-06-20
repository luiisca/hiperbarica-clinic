import { useState, useEffect } from "react";

export default function useFullscreenStatus(
  elRef: React.RefObject<HTMLDivElement>
): [isFullscreen: boolean, setFullscreen: () => void] {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const setFullscreen = () => {
    if (elRef.current == null) return;

    if (document.fullscreenElement) {
      return document.exitFullscreen();
    } else {
      elRef.current
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true);
        })
        .catch(() => {
          setIsFullscreen(false);
        });
    }
  };

  useEffect(() => {
    const onFullscreenChange = () =>
      setIsFullscreen(document.fullscreenElement !== null);

    document.onfullscreenchange = onFullscreenChange;

    return document.removeEventListener(
      "onfullscreenchange",
      onFullscreenChange
    );
  });

  return [isFullscreen, setFullscreen];
}
