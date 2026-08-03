import Badge from "./Badge";

const Heading = ({
  badge,
  title,
  subtitle,
  align = "center",
}) => {
  const alignment = {
    center: "text-center",
    left: "text-left",
  };

  return (
    <div className={`mb-14 ${alignment[align]}`}>
      {badge && (
        <div className="mb-5">
          <Badge>{badge}</Badge>
        </div>
      )}

      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;