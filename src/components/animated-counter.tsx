"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type Props = {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export function AnimatedCounter({
  value,
  duration = 1.4,
  suffix = "",
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return () => unsub();
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
