"use client";

import { useState, useEffect } from "react";
import BaseCountUp, { CountUpProps } from "react-countup";

export default function CountUp(props: CountUpProps) {
  const [isClientRendered, setIsClientRendered] = useState(false);

  useEffect(() => {
    setIsClientRendered(true);
  }, []);

  return (
    <>
      {!isClientRendered && <span>0</span>}
      {isClientRendered && (
        <BaseCountUp
          duration={2.5}
          enableScrollSpy={true}
          scrollSpyOnce={true}
          {...props}
        />
      )}
    </>
  );
}
