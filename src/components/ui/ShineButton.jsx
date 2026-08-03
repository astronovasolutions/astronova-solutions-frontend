import { motion } from "framer-motion";

export default function ShineButton({
  children,
  className = "",
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      className={`
        relative
        overflow-hidden
        rounded-xl
        px-8
        py-4
        font-semibold
        text-white
        bg-gradient-to-r
        from-cyan-500
        via-blue-500
        to-violet-600
        shadow-lg
        ${className}
      `}
    >
      <motion.div
        animate={{
          x: ["-150%", "250%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          w-20
          bg-white/40
          skew-x-[-25deg]
          blur-sm
        "
      />

      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  );
}