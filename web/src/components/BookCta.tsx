import { Button } from "@/components/ui/Button";

export function BookCta() {
  return (
    <section className="bg-primary py-20 text-center text-white">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="font-serif text-4xl font-light md:text-5xl">
          ¿Lista para tu próxima visita?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/80">
          Ya sea una consulta de valoración o el inicio de tu tratamiento de ortodoncia, estamos
          aquí para acompañarte — sin presión y con atención personalizada.
        </p>
        <div className="mt-8">
          <Button href="#contacto" variant="light" className="!bg-white !text-primary hover:!bg-cream">
            Agenda tu cita
          </Button>
        </div>
      </div>
    </section>
  );
}
