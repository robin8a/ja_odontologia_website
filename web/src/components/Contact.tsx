import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

const details = [
  {
    label: "Ubicación",
    value: "Unicentro, Oasis 503B — Cali",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: site.phone,
    href: site.whatsapp,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.2 0h3a2 2 0 012 1.72 19.79 19.79 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.08 6.08l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"
          stroke="white"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="white"
          strokeWidth="1.8"
        />
        <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Horario",
    value: site.hours,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.8" />
        <polyline points="12,6 12,12 16,14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-cream py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <SectionHeading tag="Agenda tu cita" title="Empieza tu" titleEm="transformación" align="center" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            {details.map((d) => (
              <div
                key={d.label}
                className="mb-5 flex gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary">
                  {d.icon}
                </div>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-widest text-muted">{d.label}</div>
                  {d.href ? (
                    <Link href={d.href} className="font-medium text-ink hover:text-primary">
                      {d.value}
                    </Link>
                  ) : (
                    <div className="whitespace-pre-line font-medium text-ink">{d.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-8 flex gap-3">
              <SocialLink href={site.instagram} label="Instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#5a5a5a" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="5" stroke="#5a5a5a" strokeWidth="1.5" />
              </SocialLink>
              <SocialLink href={site.whatsapp} label="WhatsApp">
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  stroke="#5a5a5a"
                  strokeWidth="1.5"
                />
              </SocialLink>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-sand transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary [&_svg_path]:hover:stroke-white [&_svg_rect]:hover:stroke-white [&_svg_circle]:hover:stroke-white"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        {children}
      </svg>
    </Link>
  );
}
