import { useState } from "react";

export default function MouseGlow({
  children,
  className = "",
}) {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      onMouseMove={handleMove}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-100"
        style={{
          background: `radial-gradient(circle 220px at ${pos.x}px ${pos.y}px,
          rgba(6,182,212,.18),
          transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}