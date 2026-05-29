type SectionHeadingProps = {
  tag: string;
  title: string;
  titleEm?: string;
  titleEnd?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  tag,
  title,
  titleEm,
  titleEnd,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "";

  return (
    <div className={alignClass + " " + className}>
      <span
        className={`mb-4 inline-block text-[0.65rem] font-medium uppercase tracking-[0.18em] ${
          light ? "text-primary-light" : "text-primary"
        }`}
      >
        {tag}
      </span>
      <h2
        className={`font-serif text-4xl font-light leading-tight md:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
        {titleEm && (
          <>
            <br />
            <em className={`not-italic ${light ? "text-primary-light" : "text-primary"}`}>
              {titleEm}
            </em>
          </>
        )}
        {titleEnd && (
          <>
            <br />
            {titleEnd}
          </>
        )}
      </h2>
    </div>
  );
}
