import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: { url: string; label: string; icon: "web" | "code" };
}

const projects: Project[] = [
  {
    title: "Otiende Photography",
    subtitle: "Professional Portfolio Platform",
    description:
      "A professional portfolio website showcasing Otiende Photography's legacy, creative work, and visual storytelling for client engagement and brand visibility.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: { url: "https://otiendephotography.co.ke/", label: "Live Site", icon: "web" },
  },
  {
    title: "Willsoft Ltd Website",
    subtitle: "Corporate Website Redesign",
    description:
      "Rebuilt the Willsoft Ltd website to present their business solutions, job openings, and contact information, enhancing their online presence.",
    tech: ["React", "Bootstrap", "Responsive Design", "SEO"],
    link: { url: "https://willsoft-ltd.com/", label: "Live Site", icon: "web" },
  },
  {
    title: "React Shopping Store",
    subtitle: "E-commerce Platform",
    description:
      "A collaborative React shopping store showcasing advanced front-end skills with product catalog, user-facing pages, and administrative dashboard.",
    tech: ["React", "JavaScript", "CSS", "API Integration"],
    link: { url: "https://shopping-store-szp7.onrender.com/", label: "Live Demo", icon: "web" },
  },
  {
    title: "Agriventure",
    subtitle: "Tech4Good Global Competition",
    description:
      "Co-developed a platform empowering small-scale farmers with unified pricing, collaboration, and resource sharing during Huawei Tech4Good 2024.",
    tech: ["Python", "Flask", "Database Design", "API Development"],
    link: { url: "https://github.com/LARRYKIPKURUI", label: "View Code", icon: "code" },
  },
  {
    title: "Freelance SDG Projects",
    subtitle: "SDG-Aligned Solutions",
    description:
      "Various coding projects using APIs and CRUD functionalities to address real-world problems aligned with the Sustainable Development Goals.",
    tech: ["Python", "Flask", "Django", "API Integration"],
    link: { url: "https://github.com/LARRYKIPKURUI", label: "GitHub Profile", icon: "code" },
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-heading">Featured Projects</h2>
      <div className="section-heading-bar" />
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="card-glass-hover group flex flex-col overflow-hidden"
        >
          {/* Top bar */}
          <div className="h-1 gradient-bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

          <div className="gradient-bg-subtle p-6 border-b border-border">
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>

            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-primary/30 text-primary bg-primary/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-fit"
            >
              {project.link.icon === "web" ? <ExternalLink size={15} /> : <Github size={15} />}
              {project.link.label}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
