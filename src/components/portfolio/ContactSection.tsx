import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "larrykipkurui12@gmail.com",
    href: "mailto:larrykipkurui12@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 742 009 797",
    href: "tel:+254742009797",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "http://www.linkedin.com/in/larry-kipkurui",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/LARRYKIPKURUI",
    external: true,
  },
];

const ContactSection = () => (
  <section id="contact" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-heading">Get In Touch</h2>
      <div className="section-heading-bar" />
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-center text-muted-foreground max-w-lg mx-auto mb-10"
    >
      I'm always open to discussing new projects, full-stack development
      opportunities, or cloud computing challenges. Feel free to reach out!
    </motion.p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
      {contacts.map((c, i) => (
        <motion.a
          key={c.label}
          href={c.href}
          target={c.external ? "_blank" : undefined}
          rel={c.external ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
          className="card-glass-hover p-6 flex flex-col items-center text-center group"
        >
          <div className="w-14 h-14 rounded-xl gradient-bg-subtle flex items-center justify-center border border-primary/10 mb-3 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
            <c.icon className="w-6 h-6 text-primary" />
          </div>
          <span className="font-semibold text-foreground mb-1">{c.label}</span>
          <span className="text-sm text-muted-foreground">{c.value}</span>
        </motion.a>
      ))}
    </div>
  </section>
);

export default ContactSection;
