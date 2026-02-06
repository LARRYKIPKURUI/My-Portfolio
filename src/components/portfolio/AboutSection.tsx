import { motion } from "framer-motion";
import { Award, Globe, Layers } from "lucide-react";

const achievements = [
  { icon: Award, value: "AWS", label: "Certified Cloud Practitioner" },
  { icon: Globe, value: "Global", label: "Tech4Good Finalist" },
  { icon: Layers, value: "Full Stack", label: "Development Mastery" },
];

const AboutSection = () => (
  <section id="about" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-heading">About Me</h2>
      <div className="section-heading-bar" />
    </motion.div>

    {/* Achievements banner */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="gradient-bg-subtle rounded-2xl border border-border p-8 mb-12"
    >
      <h3 className="text-xl font-semibold text-primary text-center mb-8">Key Achievements</h3>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="card-glass-hover p-6 text-center flex-1"
          >
            <a.icon className="w-8 h-8 text-accent mx-auto mb-3" />
            <span className="text-2xl font-bold gradient-text-accent block mb-1">{a.value}</span>
            <span className="text-sm text-muted-foreground">{a.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-3xl mx-auto text-center space-y-6"
    >
      <p className="text-muted-foreground leading-relaxed text-lg">
        I'm a passionate Full Stack Software Developer with expertise in modern
        web technologies and cloud computing. Currently pursuing my journey to
        become a Cloud Support Engineer, I bridge the gap between software
        development and cloud infrastructure to create scalable, secure solutions.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        My technical journey is backed by comprehensive education from The
        Co-operative University of Kenya, Moringa School, and Emobilis Software
        Institute. I'm an AWS Certified Cloud Practitioner and actively
        contribute to the tech community through various projects and volunteer
        work.
      </p>
    </motion.div>
  </section>
);

export default AboutSection;
