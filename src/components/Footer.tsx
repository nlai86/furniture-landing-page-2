const Footer = () => (
  <footer className="border-t border-border py-16 px-6 md:px-12">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <p className="font-heading text-lg tracking-[0.2em] mb-4">STUDIO FORM</p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
          Sculptural furniture for modern living. Based in Los Angeles.
        </p>
      </div>

      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Navigate</p>
        <div className="flex flex-col gap-2">
          {["Collection", "Archive", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Follow</p>
        <div className="flex flex-col gap-2">
          <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Pinterest</a>
        </div>
        <div className="mt-8">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Newsletter</p>
          <div className="flex border border-border">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground/50"
            />
            <button className="px-4 py-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors border-l border-border">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-border">
      <p className="text-xs text-muted-foreground/60 text-center tracking-wider">
        © 2026 Studio Form. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
