import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";

const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <motion.div
      className="absolute inset-0"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <img
        src={heroImg}
        alt="Sculptural furniture in a bright modern interior"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
    </motion.div>

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <motion.h1
        className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.05em] mb-6 [text-shadow:0_2px_20px_rgba(0,0,0,0.4)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Where Art Meets Living
      </motion.h1>
      <motion.p
        className="font-body text-sm md:text-base tracking-[0.2em] uppercase text-white/90 mb-10 [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Sculptural furniture designed for modern spaces
      </motion.p>
      <motion.a
        href="#collection"
        className="border border-white text-white px-10 py-3 text-sm tracking-[0.2em] uppercase backdrop-blur-sm bg-white/5 hover:bg-white hover:text-foreground transition-all duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        View Collection
      </motion.a>
    </div>
  </section>
);

export default Hero;
