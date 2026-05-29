"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";

function LogoMark() {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 4v10c0 2-1 3-3 3M14 4v10c0 2-1 3-3 3"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[90] flex flex-col items-center justify-center gap-8 bg-cream/98 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          className="absolute right-6 top-6 text-2xl text-ink"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          ×
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-serif text-2xl text-ink"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-[100] flex h-[72px] items-center justify-between px-6 transition-all duration-300 md:px-10 ${
          scrolled ? "bg-cream/95 shadow-sm backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Link href="#" className="flex items-center gap-3">
          <LogoMark />
          <div>
            <strong className="block font-serif text-lg font-semibold text-ink">
              {site.name.replace("Dra. ", "")}
            </strong>
            <span className="text-[0.65rem] uppercase tracking-widest text-muted">
              {site.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.78rem] font-medium text-ink transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button href="#contacto" className="!px-5 !py-2.5 !text-[0.75rem]">
            Agenda tu cita
          </Button>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <span className="block h-0.5 w-6 rounded bg-ink" />
          <span className="block h-0.5 w-6 rounded bg-ink" />
          <span className="block h-0.5 w-6 rounded bg-ink" />
        </button>
      </header>
    </>
  );
}
