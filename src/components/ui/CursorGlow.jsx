import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x - 120,
        y: mouse.y - 120,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 250,
      }}
      className="
        fixed
        top-0
        left-0
        w-60
        h-60
        rounded-full
        pointer-events-none
        blur-[110px]
        bg-cyan-500/30
        z-0
      "
    />
  );
}