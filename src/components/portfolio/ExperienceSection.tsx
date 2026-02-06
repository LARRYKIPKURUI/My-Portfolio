import { motion } from "framer-motion";

interface TimelineEntry {
  title: string;
  organization: string;
  date: string;
  items: string[];
}

const experiences: TimelineEntry[] = [
  {
    title: "Full Stack Developer",
    organization: "Willsoft Limited",
    date: "July 2024 – November 2024",
    items: [
      "Developed scalable full-stack apps using React (frontend) and Flask/Django (backend)",
      "Designed and integrated RESTful APIs for dynamic client-server communication",
      "Collaborated with cross-functional teams to deliver features aligned with business goals",
      "Implemented secure authentication, database management, and CRUD functionalities",
      "Leveraged Docker and Kubernetes for containerization and deployments",
    ],
  },
  {
    title: "Network Operations Center Intern",
    organization: "ICT Authority Kenya",
    date: "January 2024 – August 2024",
    items: [
      "Monitored network performance and identified issues to prevent downtime",
      "Created detailed reports and escalated complex failures to specialized teams",
      "Diagnosed and fixed hardware and software problems on user devices",
      "Assisted with configurations of PEMINT messages for standalone TPH",
    ],
  },
  {
    title: "Tech Support Specialist",
    organization: "Freelancer",
    date: "November 2022 – June 2023",
    items: [
      "Performed hardware maintenance including RAM switching and installation",
      "Executed fresh OS installations and system migrations",
      "Conducted BIOS upgrades and configuration for hardware compatibility",
      "Utilized bootable drive tools like Rufus and Ventoy for system maintenance",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-heading">Professional Experience</h2>
      <div className="section-heading-bar" />
    </motion.div>

    <div className="relative pl-8 ml-2">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 gradient-bg-primary rounded-full" />

      {experiences.map((exp, i) => (
        <motion.div
          key={exp.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="relative mb-8 last:mb-0"
        >
          <div className="timeline-dot" />
          <div className="card-glass-hover p-7 ml-4">
            <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
            <span className="inline-block text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-md mb-4">
              {exp.organization} • {exp.date}
            </span>
            <ul className="space-y-2.5">
              {exp.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                  <span className="text-primary mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
