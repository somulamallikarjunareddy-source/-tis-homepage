import { motion } from "framer-motion";
import s from "./ui.module.css";

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === "dark";
  return (
    <button
      type="button"
      className={s.toggle}
      onClick={onToggle}
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      data-dark={dark}
    >
      <motion.span
        layout
        className={s.knob}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {dark ? "☾" : "☀"}
      </motion.span>
    </button>
  );
}
