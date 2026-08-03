import { motion } from "framer-motion";

const AnimatedBorder = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
      relative
      rounded-3xl
      p-[2px]
      overflow-hidden
      ${className}
      `}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
        className="
          absolute
          inset-[-150%]
          bg-conic
          from-cyan-500
          via-blue-500
          via-purple-500
          to-cyan-500
        "
        style={{
          background:
            "conic-gradient(#06b6d4,#3b82f6,#8b5cf6,#06b6d4)",
        }}
      />

      <div
        className="
        relative
        rounded-[22px]
        bg-[#0F172A]
        p-8
        h-full
      "
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;