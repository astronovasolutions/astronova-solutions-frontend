import { motion } from "framer-motion";

export default function HoverCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:border-cyan-400/50
        hover:shadow-[0_0_40px_rgba(6,182,212,0.35)]
        ${className}
      `}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}