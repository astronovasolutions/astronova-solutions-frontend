import { motion } from "framer-motion";

const directions = {
  up: { y: 60, opacity: 0 },
  down: { y: -60, opacity: 0 },
  left: { x: 60, opacity: 0 },
  right: { x: -60, opacity: 0 },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
}) {
  return (
    <motion.div
      initial={directions[direction]}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}