import ScrollReveal from "./ScrollReveal";
import wood from "@/assets/material-wood.jpg";
import metal from "@/assets/material-metal.jpg";
import concrete from "@/assets/material-concrete.jpg";
import fabric from "@/assets/material-fabric.jpg";

const materials = [
  { img: wood, name: "White Oak" },
  { img: metal, name: "Brushed Bronze" },
  { img: concrete, name: "Cast Concrete" },
  { img: fabric, name: "Belgian Linen" },
];

const MaterialsSection = () => (
  <section className="py-32 px-6 md:px-12 bg-secondary">
    <div className="max-w-[1400px] mx-auto">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-4 tracking-wide">
          Material & Craft
        </h2>
        <p className="text-center text-muted-foreground text-sm tracking-[0.15em] uppercase mb-16">
          Honest materials, shaped by hand
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {materials.map((m, i) => (
          <ScrollReveal key={m.name} delay={i * 0.1}>
            <div className="group overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-4 text-center">
                {m.name}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default MaterialsSection;
