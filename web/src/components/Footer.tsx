import Link from "next/link";
import { footerInfo, footerServices, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pt-16 pb-9 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M8 4v10c0 2-1 3-3 3M14 4v10c0 2-1 3-3 3"
                    stroke="rgba(58,158,158,.9)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <strong className="block font-serif text-lg">Isabel Jaramillo</strong>
                <span className="text-[0.65rem] uppercase tracking-widest text-white/40">
                  {site.tagline}
                </span>
              </div>
            </div>
            <p className="mb-7 max-w-xs text-sm leading-relaxed text-white/45">
              Ortodoncia y Odontología Integral en Cali. Transformando sonrisas con tecnología de
              punta y atención personalizada.
            </p>
            <div className="flex gap-2">
              <FooterSocial href={site.instagram} label="Instagram" />
              <FooterSocial href={site.whatsapp} label="WhatsApp" />
            </div>
          </div>

          <FooterCol title="Servicios" links={footerServices} />
          <FooterCol title="Información" links={footerInfo} />
          <div>
            <h4 className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/40">
              Ubicación
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/55">
              <span>Unicentro, Oasis 503B</span>
              <span>Cali, Colombia</span>
              <span>Lun – Sáb: 8am – 6pm</span>
            </div>
            <div className="mt-6">
              <Button href="#contacto" className="!px-5 !py-3 !text-[0.72rem]">
                Agenda tu cita
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/30 sm:flex-row">
          <p>© 2025 Dra. Isabel Jaramillo · Ortodoncia y Odontología Integral · Cali</p>
          <p>Diseñado con ❤️ para transformar sonrisas</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/40">
        {title}
      </h4>
      <div className="flex flex-col gap-2.5">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-white/55 transition-colors hover:text-primary-light"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FooterSocial({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(255,255,255,.6)" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="5" stroke="rgba(255,255,255,.6)" strokeWidth="1.5" />
      </svg>
    </Link>
  );
}
