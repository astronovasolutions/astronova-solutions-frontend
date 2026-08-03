import { motion } from "framer-motion";

const BlurCircle = ({
  size = 350,
  color = "#06b6d4",
  top = "0%",
  left = "0%",
}) => {
  return (
    <motion.div
      animate={{
        x: [0, 25, -25, 0],
        y: [0, -30, 30, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut",
      }}
      className="absolute rounded-full blur-[120px] opacity-30"
      style={{
        width: size,
        height: size,
        background: color,
        top,
        left,
      }}
    />
  );
};

export default BlurCircle;