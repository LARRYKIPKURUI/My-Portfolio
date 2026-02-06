import { motion } from "framer-motion";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Programming & Frameworks",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind", "Python", "Flask", "Django", "SQL"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MS SQL Server", "SQLite", "MongoDB", "PostgreSQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    skills: ["AWS Cloud Practitioner", "Render", "Vercel", "cPanel"],
  },
  {
    icon: Wrench,
    title: "Other Technologies",
    skills: ["Networking", "Troubleshooting", "System Setups", "Integrations", "Docker", "Kubernetes"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-heading font-bold gradient-text-accent">Core Competencies</h2>
      <div className="section-heading-bar" />
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="card-glass-hover p-7 group"
        >
          {/* Top bar animation */}
          <div className="absolute top-0 left-0 right-0 h-1 gradient-bg-primary rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl gradient-bg-subtle flex items-center justify-center border border-primary/10">
              <cat.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-primary">{cat.title}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
