import ScrollReveal from "./ScrollReveal";

const BrandStatement = () => (
  <section className="py-32 md:py-44 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-foreground">
          We believe furniture should be lived with, not just looked at. Each piece begins as a
          conversation between material and form — raw concrete softened by hand, wood shaped by
          intuition.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="w-12 h-px bg-warm-gray mx-auto mt-16" />
      </ScrollReveal>
    </div>
  </section>
);

export default BrandStatement;
