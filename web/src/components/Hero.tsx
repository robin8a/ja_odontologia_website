"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const duration = 1800;

    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
      else setValue(target);
    };

    requestAnimationFrame(step);
  }, [active, target]);

  return value.toLocaleString();
}

export function Hero() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [countActive, setCountActive] = useState(false);
  const followersStat = hero.stats.find((s) => s.count);
  const followersTarget = followersStat ? Number(followersStat.value) || 0 : 0;
  const count = useCountUp(followersTarget, countActive);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-cream pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10 lg:min-h-[calc(100vh-72px)]">
        <div>
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="mb-7 font-serif text-5xl font-light leading-[1.1] text-ink md:text-6xl lg:text-7xl">
            {hero.title}
            <br />
            <em className="text-primary not-italic">{hero.titleEm}</em>
            <br />
            {hero.titleEnd}
          </h1>

          <p className="mb-10 max-w-md text-[0.95rem] leading-relaxed text-muted">
            {hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contacto">Agenda tu cita</Button>
            <Button href="#servicios" variant="outline">
              Ver servicios
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap gap-10 border-t border-sand pt-10">
            {hero.stats.map((stat) => {
              const value =
                "count" in stat && stat.count && countActive ? count : stat.value;
              const content = (
                <>
                  <div
                    ref={"count" in stat && stat.count ? counterRef : undefined}
                    className="font-serif text-4xl font-semibold text-primary"
                  >
                    {value}
                  </div>
                  <div className="mt-1 text-[0.72rem] tracking-wide text-muted">
                    {stat.label}
                  </div>
                </>
              );

              if ("href" in stat && stat.href) {
                return (
                  <a
                    key={stat.label}
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80"
                    aria-label={`${stat.label} en Instagram`}
                  >
                    {content}
                  </a>
                );
              }

              return <div key={stat.label}>{content}</div>;
            })}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="pointer-events-none absolute h-[min(500px,90vw)] w-[min(500px,90vw)] rounded-full border border-primary/30 opacity-40"
            aria-hidden
          />
          <div className="relative w-full max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[200px_200px_40px_40px] bg-gradient-to-br from-primary-light to-primary-dark shadow-xl">
              <Image
                src="/images/hero.png"
                alt="Dra. Isabel Jaramillo"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 440px"
                priority
              />
            </div>

            <div className="absolute -left-4 bottom-10 flex items-center gap-3.5 rounded-2xl bg-white p-4 shadow-lg md:-left-10 md:p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <strong className="block text-sm font-medium text-ink">
                  {hero.badgeUniversity.title}
                </strong>
                <span className="text-xs text-muted">{hero.badgeUniversity.subtitle}</span>
              </div>
            </div>

            <div className="absolute -right-4 top-16 max-w-[11rem] rounded-2xl bg-primary px-4 py-4 text-center text-white shadow-lg md:-right-8 md:px-5">
              <strong className="block font-serif text-base font-semibold leading-snug">
                {hero.badgeSco.title}
              </strong>
              <span className="mt-1 block text-[0.65rem] uppercase tracking-wider opacity-80">
                {hero.badgeSco.subtitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
