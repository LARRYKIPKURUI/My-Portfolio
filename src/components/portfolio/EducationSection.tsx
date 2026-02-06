import { motion } from "framer-motion";

const education = [
  {
    title: "Software Engineering",
    institution: "Moringa School, Kenya",
    date: "January 2025 – June 2025",
    detail: "Mastery in Full Stack Software Development",
  },
  {
    title: "Diploma in Computer Programming",
    institution: "The Co-operative University of Kenya",
    date: "2022 – 2025",
    detail: "Distinction in Computer Programming",
  },
  {
    title: "AWS Cloud Computing",
    institution: "Emobilis Software Institute, Kenya",
    date: "October 2024 – December 2024",
    detail: "Certified Cloud Practitioner (Silver Category)",
  },
  {
    title: "Backend Specialization with Python",
    institution: "Emobilis Software Institute, Kenya",
    date: "July 2024 – October 2024",
    detail: "Python backend development, Flask, Django, and database management",
  },
];

const EducationSection = () => (
  <section id="education" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-heading font-bold gradient-text-accent">Education</h2>
      <div className="section-heading-bar" />
    </motion.div>

    <div className="relative pl-8 ml-2 max-w-3xl mx-auto">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 gradient-bg-primary rounded-full" />

      {education.map((edu, i) => (
        <motion.div
          key={edu.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          className="relative mb-6 last:mb-0"
        >
          <div className="timeline-dot" />
          <div className="card-glass-hover p-6 ml-4">
            <h3 className="text-lg font-semibold text-primary mb-1">{edu.title}</h3>
            <span className="inline-block text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-md mb-3">
              {edu.institution} • {edu.date}
            </span>
            <p className="text-sm text-muted-foreground">{edu.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationSection;
