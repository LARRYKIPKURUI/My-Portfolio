import { motion } from "framer-motion";
import { Users, Cloud } from "lucide-react";

const volunteer = [
  {
    icon: Users,
    title: "President, Robotics Club",
    org: "University • 2022 – 2024",
    description:
      "Led the Robotics team in developing EV3 Lego robots and represented the team in competitions up to Regional Level, fostering innovation and technical excellence.",
  },
  {
    icon: Cloud,
    title: "AWS User Community Member",
    org: "2024 – Present",
    description:
      "Active member of the AWS User community, helping cloud enthusiasts grow through knowledge sharing, mentorship, and collaborative learning.",
  },
];

const VolunteerSection = () => (
  <section id="volunteer" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-heading">Volunteer Experience</h2>
      <div className="section-heading-bar" />
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {volunteer.map((v, i) => (
        <motion.div
          key={v.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="card-glass-hover p-7"
        >
          <div className="w-12 h-12 rounded-xl gradient-bg-subtle flex items-center justify-center border border-primary/10 mb-4">
            <v.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-1">{v.title}</h3>
          <span className="text-sm font-medium text-accent mb-3 block">{v.org}</span>
          <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default VolunteerSection;
