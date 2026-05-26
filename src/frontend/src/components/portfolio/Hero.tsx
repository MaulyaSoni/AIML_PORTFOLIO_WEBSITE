import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Code2, Trophy, Award } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

const ROLES = [
  "AI/ML Engineer",
  "Generative AI Developer",
  "Cloud Computing Enthusiast",
  "Multi-Agent Systems Builder",
];

export default function Hero() {
  const { isDark } = useDarkMode();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        45,
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="py-16 md:py-20 flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#09090B] transition-colors duration-300"
      style={{
        background: isDark
          ? `radial-gradient(ellipse 80% 60% at 20% 0%, rgba(99,102,241,0.22) 0%, transparent 60%),
             radial-gradient(ellipse 60% 50% at 80% 10%, rgba(139,92,246,0.18) 0%, transparent 55%),
             #09090B`
          : `radial-gradient(ellipse 80% 60% at 20% 0%, rgba(99,102,241,0.15) 0%, transparent 60%),
             radial-gradient(ellipse 60% 50% at 80% 10%, rgba(139,92,246,0.12) 0%, transparent 55%),
             #FAFAFA`
      }}
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-16 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-drift" />
        <div className="absolute bottom-1/4 -right-16 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-drift-reverse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50/80 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              Open to Internships &amp; Collaborations
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-black tracking-tight leading-none text-center"
          >
            <span
              className="block text-5xl md:text-7xl lg:text-8xl"
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Maulya Soni
            </span>
            {/* <span className="block text-3xl md:text-4xl lg:text-5xl text-zinc-400 dark:text-zinc-500 font-light tracking-widest mt-1">
              M.
            </span> */}
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-10 flex items-center justify-center"
          >
            <span className="font-display font-semibold text-xl sm:text-2xl text-zinc-500 dark:text-zinc-400">
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 align-middle animate-blink" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed"
          >
            Building intelligent systems at the intersection of AI/ML and cloud infrastructure.<br/>
            Specialized in LLMs, RAG pipelines, and agentic AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              type="button"
              onClick={scrollToProjects}
              data-ocid="hero.view_work_button"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-7 py-2.5 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              asChild
              data-ocid="hero.resume_button"
              className="border border-zinc-300 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 px-7 py-2.5 rounded-xl font-medium transition-all duration-200"
            >
              <a href="/assets/ML_RESUME.pdf" download="ML_RESUME.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <a
              href="https://github.com/MaulyaSoni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-ocid="hero.github_link"
              className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/maulya-soni-6ba03734b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-ocid="hero.linkedin_link"
              className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:maulyasoni.it@gmail.com"
              aria-label="Email"
              data-ocid="hero.email_link"
              className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-6"
          >
            {/* Location */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-400 border-0 text-sm">
              <MapPin className="w-3.5 h-3.5" />
              Nadiad, Gujarat
            </div>

            {/* Projects */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
              <Code2 className="w-3.5 h-3.5" />
              7+ Projects
            </div>

            {/* Hackathon */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-300 text-sm font-medium">
              <Trophy className="w-3.5 h-3.5" />
              2× National Hackathon Finalist
            </div>

            {/* NPTEL */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-300 text-sm font-medium">
              <Award className="w-3.5 h-3.5" />
              NPTEL Certified
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
