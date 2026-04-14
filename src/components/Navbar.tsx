import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <a
          href="#"
          className={`font-heading text-xl md:text-2xl tracking-[0.2em] transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]"
          }`}
        >
          STUDIO FORM
        </a>
        <div className="hidden md:flex items-center gap-10">
          {["Collection", "Archive", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm tracking-[0.15em] uppercase transition-colors duration-500 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/90 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
