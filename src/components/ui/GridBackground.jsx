const GridBackground = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
    >
      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
        bg-[size:48px_48px]
        dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]
        "
      />

      {/* Fade */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white dark:via-black/20 dark:to-black" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;