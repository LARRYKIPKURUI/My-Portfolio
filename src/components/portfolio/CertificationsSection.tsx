import { motion } from "framer-motion";
import { Award, Bot, Globe, TrendingUp } from "lucide-react";

const certs = [
  { icon: Award, title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services" },
  { icon: Bot, title: "AI Career Essentials", org: "ALX Kenya" },
  { icon: Globe, title: "Global Finalist – Tech4Good Competition", org: "Seeds for the Future by Huawei", highlight: true },
  { icon: TrendingUp, title: "Personal Productivity & Goal Setting", org: "Africa Management Institute" },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-heading">Certifications & Awards</h2>
      <div className="section-heading-bar" />
    </motion.div>

    <div className="max-w-3xl mx-auto space-y-4">
      {certs.map((cert, i) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="card-glass-hover flex items-center gap-5 p-5 border-l-4 border-l-primary"
        >
          <div className="w-14 h-14 rounded-xl gradient-bg-subtle flex items-center justify-center border border-primary/10 shrink-0">
            <cert.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{cert.title}</h3>
            <p className={`text-sm ${cert.highlight ? "text-accent font-medium" : "text-muted-foreground"}`}>
              {cert.org}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CertificationsSection;
