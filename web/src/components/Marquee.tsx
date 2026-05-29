import { marqueeItems } from "@/lib/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden bg-primary py-4">
      <div className="flex w-max animate-marquee">
        {items.map((text, i) => (
          <div
            key={`${text}-${i}`}
            className="flex shrink-0 items-center gap-4 px-8 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            {text}
            <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
