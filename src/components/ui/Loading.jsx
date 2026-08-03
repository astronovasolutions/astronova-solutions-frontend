const Loading = ({
  text = "Loading...",
  fullscreen = false,
}) => {
  return (
    <div
      className={`
      flex
      flex-col
      items-center
      justify-center
      gap-6
      ${
        fullscreen
          ? "fixed inset-0 bg-white z-50"
          : "py-20"
      }
      `}
    >
      <div className="relative">

        <div className="w-16 h-16 rounded-full border-4 border-blue-100"></div>

        <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>

      </div>

      <p className="text-gray-500">
        {text}
      </p>
    </div>
  );
};

export default Loading;