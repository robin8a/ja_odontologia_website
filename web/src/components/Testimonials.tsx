import { testimonials } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

const avatarStyles = {
  teal: "bg-primary",
  gold: "bg-accent",
  "teal-dark": "bg-primary-dark",
};

export function Testimonials() {
  return (
    <section id="testimonios" className="scroll-mt-20 bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <SectionHeading
            tag="Pacientes IJ"
            title="Lo que dicen"
            titleEm="nuestros pacientes"
            align="center"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-cream p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="font-serif text-6xl leading-none text-primary-light italic">
                &ldquo;
              </span>
              <p className="mb-7 text-sm leading-relaxed text-muted italic">{t.text}</p>
              <div className="flex items-center gap-3.5">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-serif text-xl font-semibold text-white ${avatarStyles[t.accent]}`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="mb-1 text-accent text-sm tracking-wide">★★★★★</div>
                  <div className="text-sm font-medium text-ink">{t.name}</div>
                  <div className="text-xs text-primary">{t.service}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
