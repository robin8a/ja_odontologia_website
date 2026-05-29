import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "outline" | "light";
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  fullWidth?: boolean;
};

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-primary/30",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
  light: "bg-primary-light text-ink hover:bg-white",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
  onClick,
  fullWidth,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-md px-8 py-3.5 text-xs font-medium uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5";
  const classes = `${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
