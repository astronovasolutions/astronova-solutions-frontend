const variants = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",

  secondary:
    "border border-blue-600 text-blue-600 hover:bg-blue-50",

  dark:
    "bg-gray-900 text-white hover:bg-black",

  outline:
    "border border-gray-300 hover:border-blue-600 hover:text-blue-600",

  ghost:
    "hover:bg-gray-100 text-gray-700",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;