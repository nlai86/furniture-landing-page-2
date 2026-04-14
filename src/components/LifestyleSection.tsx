import ScrollReveal from "./ScrollReveal";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import lifestyle3 from "@/assets/lifestyle-3.jpg";

const LifestyleSection = () => (
  <section className="py-32 px-6 md:px-12">
    <div className="max-w-[1400px] mx-auto">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-4 tracking-wide">
          In Your Space
        </h2>
        <p className="text-center text-muted-foreground text-sm tracking-[0.15em] uppercase mb-16">
          Designed to be lived in
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <ScrollReveal className="md:col-span-8">
          <img src={lifestyle1} alt="Living room with sculptural furniture" loading="lazy" width={1200} height={800}
            className="w-full h-[400px] md:h-[550px] object-cover" />
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="md:col-span-4">
          <img src={lifestyle2} alt="Bedroom with architectural furniture" loading="lazy" width={800} height={1000}
            className="w-full h-[400px] md:h-[550px] object-cover" />
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="md:col-span-12">
          <img src={lifestyle3} alt="Dining space with sculptural table" loading="lazy" width={1200} height={800}
            className="w-full h-[350px] md:h-[500px] object-cover" />
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default LifestyleSection;
