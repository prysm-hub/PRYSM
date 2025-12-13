import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const scrollToCommunity = () => {
  const element = document.getElementById('community');
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: "#150d33" }}
    >
      {/* Subtle solid-color accents instead of gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-6 -right-6 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--prysm-grad-1)", opacity: 0.06 }}
        />
        <div
          className="absolute -bottom-6 -left-6 w-72 h-72 rounded-full blur-3xl"
          style={{ background: "var(--prysm-grad-2)", opacity: 0.05 }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            className="mb-8 inline-flex items-center rounded-full border backdrop-blur-sm px-4 py-2"
            style={{
              borderColor: "rgba(255, 255, 255, 0.2)", // slightly more visible
              background: "rgba(255, 255, 255, 0.05)" // subtle overlay for dark bg
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="mr-2 h-4 w-4 text-prysm-grad-1" />
            <span className="text-sm text-white/80">Building the Future Together</span>
            {/* White with 80% opacity for good contrast */}
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white font-extrabold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Where &nbsp;
            <span className="inline-block" style={{ color: "var(--prysm-grad-1)" }}> Growth</span>{" "}
            Is  Enabled  Through &nbsp;
            <span className="inline-block" style={{ color: "var(--prysm-grad-2)" }}> Guidance</span>
          </motion.h1>

          <motion.p
            className="mb-12 text-lg sm:text-xl max-w-3xl mx-auto"
            style={{ color: "var(--prysm-foreground)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Building structured bridges between where people stand today and where they aspire to be.          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.button
              onClick={scrollToCommunity}
              className="px-8 py-3 rounded-full font-semibold text-white transition-all"
              style={{
                background: "var(--prysm-grad-1)",
                boxShadow: "0 10px 30px rgba(124, 58, 237, 0.22)"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </motion.button>

            {/* <motion.button
              onClick={scrollToCommunity}
              className="px-8 py-3 rounded-full font-semibold text-white border transition-all"
              style={{ borderColor: "rgba(255, 255, 255, 0.12)", background: 'transparent' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}