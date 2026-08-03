import { motion } from "framer-motion";

const TechBadge = ({
  icon,
  text,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-500/30
        bg-white/5
        px-5
        py-2
        backdrop-blur-xl
        shadow-lg
        cursor-pointer
      "
    >
      <span className="text-cyan-400 text-xl">
        {icon}
      </span>

      <span className="text-gray-200 font-medium">
        {text}
      </span>
    </motion.div>
  );
};

export default TechBadge;