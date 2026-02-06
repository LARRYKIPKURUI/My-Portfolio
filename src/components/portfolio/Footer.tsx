import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Larry Kipkurui. Built with passion for technology.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/LARRYKIPKURUI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href="http://www.linkedin.com/in/larry-kipkurui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:larrykipkurui12@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
