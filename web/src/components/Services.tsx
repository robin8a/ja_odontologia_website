import { services, servicesHeading } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 grid gap-10 md:grid-cols-2 md:items-end">
          <SectionHeading
            tag={servicesHeading.tag}
            title={servicesHeading.title}
            titleEm={servicesHeading.titleEm}
          />
          <p className="max-w-md text-[0.9rem] leading-relaxed text-muted">
            {servicesHeading.intro}
          </p>
        </div>

        <div className="grid gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.num}
              className="group bg-cream p-9 transition-all duration-300 hover:-translate-y-1 hover:bg-ink md:p-10"
            >
              <div className="mb-6 font-serif text-5xl font-light text-sand transition-colors group-hover:text-white/15">
                {service.num}
              </div>
              <h3 className="mb-3 font-serif text-2xl text-ink transition-colors group-hover:text-white">
                {service.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted transition-colors group-hover:text-white/60">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
