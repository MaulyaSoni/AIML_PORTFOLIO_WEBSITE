import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer id="footer" className="py-10 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-display font-bold text-foreground flex items-center gap-1">
              Maulya Soni
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            </span>
            <p className="text-xs text-muted-foreground">
              Maulya Soni &copy; {year} | Built with React &amp; Tailwind
            </p>
            <p className="text-xs text-muted-foreground/60">
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                Built with love using caffeine.ai
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MaulyaSoni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-ocid="footer.github_link"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/maulya-soni-6ba03734b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-ocid="footer.linkedin_link"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:maulyasoni.it@gmail.com"
              aria-label="Email"
              data-ocid="footer.email_link"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
