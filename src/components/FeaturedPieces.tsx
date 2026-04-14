import ScrollReveal from "./ScrollReveal";
import piece1 from "@/assets/piece-1.jpg";
import piece2 from "@/assets/piece-2.jpg";
import piece3 from "@/assets/piece-3.jpg";
import piece4 from "@/assets/piece-4.jpg";

const pieces = [
  { img: piece1, name: "Eroded Side Table", material: "Cast Stone", w: 800, h: 1000 },
  { img: piece2, name: "Monolith Dining Table", material: "Oak & Concrete", w: 1000, h: 800 },
  { img: piece3, name: "Arc Floor Lamp", material: "Brushed Bronze & Travertine", w: 800, h: 1000 },
  { img: piece4, name: "Wave Bench", material: "Molded Concrete", w: 1000, h: 800 },
];

const FeaturedPieces = () => (
  <section id="collection" className="px-6 md:px-12 pb-32">
    <ScrollReveal>
      <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-20 tracking-wide">
        Selected Works
      </h2>
    </ScrollReveal>

    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
      {/* Large left */}
      <ScrollReveal className="md:col-span-7 group relative overflow-hidden">
        <img src={pieces[0].img} alt={pieces[0].name} loading="lazy" width={pieces[0].w} height={pieces[0].h}
          className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500 flex items-end p-8">
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="font-heading text-xl text-primary-foreground">{pieces[0].name}</p>
            <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70 mt-1">{pieces[0].material}</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Right column stacked */}
      <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
        <ScrollReveal delay={0.15} className="group relative overflow-hidden">
          <img src={pieces[1].img} alt={pieces[1].name} loading="lazy" width={pieces[1].w} height={pieces[1].h}
            className="w-full h-[300px] md:h-[310px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500 flex items-end p-6">
            <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="font-heading text-xl text-primary-foreground">{pieces[1].name}</p>
              <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70 mt-1">{pieces[1].material}</p>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3} className="group relative overflow-hidden">
          <img src={pieces[2].img} alt={pieces[2].name} loading="lazy" width={pieces[2].w} height={pieces[2].h}
            className="w-full h-[300px] md:h-[310px] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500 flex items-end p-6">
            <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="font-heading text-xl text-primary-foreground">{pieces[2].name}</p>
              <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70 mt-1">{pieces[2].material}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Full width bottom */}
      <ScrollReveal delay={0.15} className="md:col-span-12 group relative overflow-hidden">
        <img src={pieces[3].img} alt={pieces[3].name} loading="lazy" width={pieces[3].w} height={pieces[3].h}
          className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500 flex items-end p-8">
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="font-heading text-xl text-primary-foreground">{pieces[3].name}</p>
            <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70 mt-1">{pieces[3].material}</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FeaturedPieces;
