import { motion } from "framer-motion";

const GradientText = ({
  children,
  className = "",
  size = "text-5xl",
}) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`
        ${size}
        font-extrabold
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-violet-500
        bg-clip-text
        text-transparent
        leading-tight
        tracking-tight
        ${className}
      `}
    >
      {children}
    </motion.h1>
  );
};

export default GradientText;