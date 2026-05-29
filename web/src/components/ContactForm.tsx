"use client";

import { useState } from "react";
import { formServices } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!String(fd.get("nombre")).trim() || !String(fd.get("telefono")).trim()) {
      alert("Por favor completa tu nombre y teléfono.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-sm md:p-12">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 13l4 4L19 7"
              stroke="#3a9e9e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-primary">¡Solicitud enviada!</h3>
        <p className="mt-3 text-sm text-muted">
          Gracias por contactarnos. Te escribiremos pronto para confirmar tu cita.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-10 shadow-sm md:p-12">
      <h3 className="font-serif text-3xl text-ink">Solicita tu cita</h3>
      <p className="mb-8 mt-2 text-sm text-muted">Te contactamos en menos de 24 horas para confirmar.</p>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Nombre" name="nombre" placeholder="Tu nombre" required />
          <FormField label="Apellido" name="apellido" placeholder="Tu apellido" />
        </div>
        <FormField
          label="WhatsApp / Teléfono"
          name="telefono"
          type="tel"
          placeholder="+57 300 000 0000"
          required
        />
        <FormField
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="tu@correo.com"
        />
        <div>
          <label className="mb-2 block text-[0.7rem] font-medium uppercase tracking-widest text-muted">
            Servicio de interés
          </label>
          <select
            name="servicio"
            className="w-full rounded-lg border border-transparent bg-cream px-4 py-3.5 text-sm text-ink outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
            defaultValue=""
          >
            <option value="">Selecciona un servicio…</option>
            {formServices.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-[0.7rem] font-medium uppercase tracking-widest text-muted">
            Nota adicional
          </label>
          <textarea
            name="nota"
            rows={4}
            placeholder="Cuéntanos brevemente tu caso…"
            className="w-full resize-none rounded-lg border border-transparent bg-cream px-4 py-3.5 text-sm text-ink outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>
        <Button type="submit" fullWidth>
          Enviar solicitud
        </Button>
        <p className="text-center text-xs text-muted">🔒 Tus datos son confidenciales.</p>
      </form>
    </div>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[0.7rem] font-medium uppercase tracking-widest text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-transparent bg-cream px-4 py-3.5 text-sm text-ink outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}
