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
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border-2 border-primary/30">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary-dark to-primary shadow-[0_0_80px_rgba(58,158,158,0.4)]">
                <svg width="70" height="70" viewBox="0 0 48 48" fill="none" aria-hidden>
                  <path
                    d="M24 6c-4 0-8 2-10 5-1.5 2-2 4-2 6 0 5 3 9 3 14 0 3 1 7 4 7s4-5 5-9c1 4 2 9 5 9s4-4 4-7c0-5 3-9 3-14 0-2-.5-4-2-6-2-3-6-5-10-5z"
                    stroke="rgba(255,255,255,.8)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
