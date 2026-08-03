import { useRef } from "react";
import { motion } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
}) {
  const ref = useRef(null);

  function handleMove(e) {
    const card = ref.current;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = -((y / rect.height) - 0.5) * 20;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  }

  function reset() {
    ref.current.style.transform =
      "perspective(900px) rotateX(0) rotateY(0) scale(1)";
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      transition={{ duration: 0.2 }}
      className={`
        rounded-3xl
        bg-slate-900
        border
        border-white/10
        p-8
        transition-transform
        duration-150
        will-change-transform
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}