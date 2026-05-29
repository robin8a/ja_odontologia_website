import { whyChooseUs } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              tag={whyChooseUs.tag}
              title={whyChooseUs.title}
              titleEm={whyChooseUs.titleEm}
            />
            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-muted">
              {whyChooseUs.intro}
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {whyChooseUs.points.map((point) => (
              <li
                key={point}
                className="flex gap-4 rounded-xl border border-sand bg-cream px-6 py-5 text-sm text-ink"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
