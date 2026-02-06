import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "5+", label: "Major Projects" },
  { value: "AWS", label: "Cloud Certified" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="section-container text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-mono font-medium text-primary tracking-widest uppercase mb-4">
            Full Stack Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 gradient-text leading-tight">
            Larry Kipkurui
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-medium">
            Full Stack Software Developer &amp; Cloud Support Engineer Aspirant
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable web applications with React, Flask & Django. AWS
          Certified Cloud Practitioner bridging software development and cloud
          infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="gradient-bg-primary text-primary-foreground px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-[0_0_30px_hsl(172_66%_45%/0.3)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("#projects")}
            className="px-8 py-6 text-base font-semibold rounded-xl border-primary/30 text-primary hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            View Projects
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="card-glass-hover px-8 py-5 text-center min-w-[160px]"
            >
              <span className="text-3xl font-bold gradient-text block mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <button
            onClick={() => scrollTo("#about")}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
