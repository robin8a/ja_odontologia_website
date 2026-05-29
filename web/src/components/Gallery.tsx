import Link from "next/link";
import { galleryLabels, site } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function Gallery() {
  const labels = [...galleryLabels, ...galleryLabels];

  return (
    <section id="galeria" className="scroll-mt-20 overflow-hidden bg-ink py-24 md:py-28">
      <div className="mx-auto mb-14 max-w-6xl px-6 text-center md:px-10">
        <SectionHeading
          tag="@ortodoncia.isajaramillo"
          title="Síguenos en"
          titleEm="Instagram"
          align="center"
          light
        />
      </div>

      <div className="overflow-hidden">
        <div className="flex w-max animate-gallery-scroll gap-4 hover:[animation-play-state:paused]">
          {labels.map((label, i) => (
            <div
              key={`${label}-${i}`}
              className={`flex h-[280px] w-[220px] shrink-0 items-center justify-center rounded-2xl text-[0.7rem] uppercase tracking-widest text-white/50 transition-transform hover:scale-[1.04] ${
                i % 4 === 0
                  ? "bg-primary"
                  : i % 3 === 0
                    ? "bg-primary-dark"
                    : i % 2 === 0
                      ? "bg-[#2a8080]"
                      : "bg-primary/80"
              }`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center px-6">
        <Link
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-md border border-white/30 px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
          </svg>
          Ver perfil en Instagram
        </Link>
      </div>
    </section>
  );
}
