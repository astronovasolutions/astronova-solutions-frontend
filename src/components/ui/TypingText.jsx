import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 80,
  className = "",
  loop = false,
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;

    function startTyping() {
      const timer = setInterval(() => {
        index++;

        setDisplay(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(timer);

          if (loop) {
            setTimeout(() => {
              setDisplay("");
              index = 0;
              startTyping();
            }, 1200);
          }
        }
      }, speed);
    }

    startTyping();
  }, [text, speed, loop]);

  return (
    <h2 className={`font-bold ${className}`}>
      {display}
      <span className="animate-pulse text-cyan-400">|</span>
    </h2>
  );
}