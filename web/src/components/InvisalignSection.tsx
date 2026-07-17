import Image from "next/image";
import { invisalign } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";

export function InvisalignSection() {
  return (
    <section
      id="invisalign"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 md:py-28"
    >
      <div
        className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              tag={invisalign.tag}
              title={invisalign.title}
              titleEm={invisalign.titleEm}
              titleEnd={invisalign.titleEnd}
              light
            />
            <p className="mt-6 text-[0.9rem] leading-relaxed text-white/60">{invisalign.desc}</p>
            <ul className="my-9 flex flex-col gap-4">
              {invisalign.features.map((feat) => (
                <li key={feat} className="flex items-center gap-3.5 text-sm text-white/80">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/25">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#a8d8d8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {feat}
                </li>
              ))}
            </ul>
            <Button href="#contacto" variant="light">
              Quiero mi diagnóstico
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl bg-primary/20">
              <Image
                src="/images/invisalign.png"
                alt="Alineadores Invisalign"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
