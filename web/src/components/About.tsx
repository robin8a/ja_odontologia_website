import Image from "next/image";
import { about } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 bg-cream py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[120px_120px_40px_40px] bg-primary-light shadow-lg">
              <Image
                src="/images/about.jpg"
                alt="Dra. Isabel Jaramillo en consultorio"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary-dark px-8 py-7 text-white shadow-xl md:-right-8">
              <strong className="block font-serif text-5xl font-light leading-none">
                {about.years}
              </strong>
              <span className="text-xs uppercase tracking-widest opacity-70">Años de experiencia</span>
            </div>
          </div>

          <div className="lg:pl-5">
            <SectionHeading tag={about.tag} title="Pasión por la" titleEm="ortodoncia" />
            <div className="mt-6 space-y-5">
              {about.bio.map((p) => (
                <p key={p.slice(0, 40)} className="text-[0.95rem] leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
            <ul className="my-9 flex flex-col gap-3">
              {about.credentials.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-lg border-l-[3px] border-primary bg-white px-5 py-3.5 text-sm text-ink"
                >
                  <svg
                    className="shrink-0 text-primary"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="#contacto">Agenda una consulta</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
