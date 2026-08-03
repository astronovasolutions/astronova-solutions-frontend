const Section = ({
  children,
  className = "",
  id = "",
  background = "bg-white",
}) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${background} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;