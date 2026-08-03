const Card = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <div
      className={`
      bg-white
      rounded-2xl
      border
      border-gray-200
      p-8
      shadow-sm
      ${
        hover
          ? "hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          : ""
      }
      ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;