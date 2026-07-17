import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { InvisalignSection } from "@/components/InvisalignSection";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { BookCta } from "@/components/BookCta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <InvisalignSection />
        <Testimonials />
        <Gallery />
        <BookCta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
