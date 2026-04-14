import ScrollReveal from "./ScrollReveal";

const FinalCTA = () => (
  <section id="contact" className="py-32 md:py-44 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide">
          Start a Conversation
        </h2>
        <p className="text-muted-foreground text-sm md:text-base tracking-wide mb-12 max-w-md mx-auto">
          Every space tells a story. Let us help shape yours with pieces that balance art and warmth.
        </p>
        <a
          href="mailto:hello@studioform.co"
          className="inline-block border border-foreground text-foreground px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-foreground hover:text-primary-foreground transition-all duration-500"
        >
          Inquire
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
