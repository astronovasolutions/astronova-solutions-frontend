import { motion } from "framer-motion";

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.5 + 0.2,
}));

export default function ParticleBackground({
  className = "",
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            y: 0,
            x: 0,
            opacity: particle.opacity,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            opacity: [
              particle.opacity,
              particle.opacity * 0.5,
              particle.opacity,
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}