import { useState } from "react";

export default function Spotlight({
  children,
  className = "",
}) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      onMouseMove={handleMove}
      className={`
        relative
        overflow-hidden
        ${className}
      `}
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          transition-all
          duration-100
        "
        style={{
          background: `
          radial-gradient(
            250px circle at ${position.x}px ${position.y}px,
            rgba(6,182,212,0.18),
            transparent 70%
          )
          `,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}