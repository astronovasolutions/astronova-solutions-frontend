import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const scroll =
        (window.scrollY / totalHeight) * 100;

      setProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 z-[9999] bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 transition-all duration-150"
      style={{
        width: `${progress}%`,
      }}
    />
  );
};

export default ScrollProgress;