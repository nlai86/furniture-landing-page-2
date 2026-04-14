import ScrollReveal from "./ScrollReveal";
import archive1 from "@/assets/archive-1.jpg";
import archive2 from "@/assets/archive-2.jpg";
import archive3 from "@/assets/archive-3.jpg";
import archive4 from "@/assets/archive-4.jpg";

const works = [
  { img: archive1, title: "Obsidian Stool", year: "2023" },
  { img: archive2, title: "Staircase Shelf", year: "2022" },
  { img: archive3, title: "Geo Coffee Table", year: "2022" },
  { img: archive4, title: "Drift Console", year: "2021" },
];

const ArchiveSection = () => (
  <section id="archive" className="py-32 px-6 md:px-12 bg-secondary">
    <div className="max-w-[1400px] mx-auto">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-16 tracking-wide">
          Archive
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {works.map((w, i) => (
          <ScrollReveal key={w.title} delay={i * 0.1}>
            <div className="group">
              <div className="overflow-hidden">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-[280px] md:h-[380px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-heading text-base mt-3">{w.title}</p>
              <p className="text-xs text-muted-foreground tracking-wider">{w.year}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ArchiveSection;
