import { motion } from "framer-motion";

export default function FloatingCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        rounded-3xl
        bg-slate-900/80
        border
        border-cyan-500/20
        backdrop-blur-xl
        p-8
        shadow-2xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}