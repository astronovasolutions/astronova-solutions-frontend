import { motion } from "framer-motion";

export default function Marquee({
  items = [],
  speed = 20,
}) {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
        className="flex gap-12 w-max"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="text-xl font-semibold text-gray-300"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}