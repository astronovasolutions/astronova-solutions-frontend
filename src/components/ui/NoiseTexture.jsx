import { motion } from "framer-motion";

export default function NoiseTexture({
  opacity = 0.05,
  className = "",
}) {
  return (
    <motion.div
      animate={{
        backgroundPosition: [
          "0px 0px",
          "120px 60px",
          "60px 120px",
          "0px 0px",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "linear",
      }}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        opacity,
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 1px, transparent 1px),
          radial-gradient(circle at 80% 40%, rgba(255,255,255,0.12) 1px, transparent 1px),
          radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 1px, transparent 1px),
          radial-gradient(circle at 60% 60%, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
        mixBlendMode: "soft-light",
      }}
    />
  );
}