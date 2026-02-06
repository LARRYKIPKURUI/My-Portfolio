import { motion } from "framer-motion";

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${10 + i * 10}%`,
  size: 3 + Math.random() * 3,
  duration: 14 + Math.random() * 10,
  delay: i * 2,
}));

const BackgroundParticles = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
    {/* Radial glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/3 blur-3xl" />

    {/* Floating particles */}
    {particles.map((p) => (
      <div
        key={p.id}
        className="floating-particle"
        style={{
          left: p.left,
          width: p.size,
          height: p.size,
          ["--duration" as string]: `${p.duration}s`,
          ["--delay" as string]: `${p.delay}s`,
        }}
      />
    ))}
  </div>
);

export default BackgroundParticles;
