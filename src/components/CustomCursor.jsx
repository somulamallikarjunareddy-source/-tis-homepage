import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import s from "./ui.module.css";

const HOVERABLE = "a, button, [data-cursor]";
const spring = { stiffness: 500, damping: 40, mass: 0.4 };

export default function CustomCursor() {
  const [enabled] = useState(() => matchMedia("(pointer: fine)").matches);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(Boolean(e.target.closest?.(HOVERABLE)));
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      className={s.cursor}
      style={{ x: smoothX, y: smoothY }}
      animate={{ scale: hovering ? 1.9 : 1, opacity: hovering ? 0.6 : 1 }}
      transition={{ duration: 0.2 }}
      aria-hidden="true"
    />
  );
}
