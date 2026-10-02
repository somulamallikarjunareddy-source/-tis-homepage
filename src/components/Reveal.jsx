import { motion } from "framer-motion";

const group = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function RevealGroup({ children, className }) {
  return (
    <motion.div
      className={className}
      variants={group}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
