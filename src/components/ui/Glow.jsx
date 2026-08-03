import clsx from "clsx";

const colors = {
  blue: "from-blue-500/40 to-cyan-400/10",
  purple: "from-purple-500/40 to-pink-500/10",
  green: "from-emerald-500/40 to-lime-400/10",
  orange: "from-orange-500/40 to-yellow-300/10",
  white: "from-white/30 to-transparent",
};

const sizes = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-96 h-96",
  xl: "w-[34rem] h-[34rem]",
};

const Glow = ({
  color = "blue",
  size = "lg",
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "absolute rounded-full blur-[100px] bg-gradient-to-br pointer-events-none",
        colors[color],
        sizes[size],
        className
      )}
    />
  );
};

export default Glow;