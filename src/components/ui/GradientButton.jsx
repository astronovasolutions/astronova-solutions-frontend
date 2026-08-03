import { motion } from "framer-motion";

const GradientButton = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      type={type}
      onClick={onClick}
      className={`
      relative
      overflow-hidden
      rounded-xl
      px-7
      py-3
      font-semibold
      text-white
      bg-gradient-to-r
      from-cyan-500
      via-blue-500
      to-purple-600
      shadow-lg
      transition-all
      duration-300
      hover:shadow-cyan-500/40
      ${className}
      `}
    >
      <span className="relative z-10">{children}</span>

      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-white/20 skew-x-12"
      />
    </motion.button>
  );
};

export default GradientButton;