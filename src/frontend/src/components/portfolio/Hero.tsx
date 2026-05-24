import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ROLES = [
  "AI/ML Engineer",
  "Generative AI Developer",
  "Full Stack Builder",
  "Multi-Agent Systems",
];

const STATS = [
  {
    value: 7,
    suffix: "+",
    decimals: 0,
    label: "Projects Built",
    color: "from-indigo-500 to-violet-500",
  },
  {
    value: 96.5,
    suffix: "%",
    decimals: 1,
    label: "Best Model Accuracy",
    color: "from-violet-500 to-purple-600",
  },
  {
    value: 3,
    suffix: "",
    decimals: 0,
    label: "Certifications",
    color: "from-blue-500 to-indigo-500",
  },
  {
    value: 2,
    suffix: "x",
    decimals: 0,
    label: "Hackathon Finalist",
    color: "from-purple-500 to-pink-500",
  },
];

function StatCard({
  value,
  suffix,
  decimals,
  label,
  color,
  index,
}: {
  value: number;
  suffix: string;
  decimals: number;
  label: string;
  color: string;
  index: number;
}) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      data-ocid={`hero.stat.${index + 1}`}
      className="flex flex-col items-center gap-1 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <CountUp
        target={value}
        suffix={suffix}
        run={inView}
        onUpdate={setCount}
      />
      <span
        className={`font-display font-black text-3xl bg-gradient-to-r ${color} bg-clip-text text-transparent`}
      >
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </span>
      <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
        {label}
      </span>
    </motion.div>
  );
}

function CountUp({
  target,
  run,
  onUpdate,
}: {
  target: number;
  suffix: string;
  run: boolean;
  onUpdate: (v: number) => void;
}) {
  useEffect(() => {
    if (!run) return;
    const duration = 1500;
    const start = performance.now();
    let raf: number;
    function tick(now: number) {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - elapsed) ** 3;
      onUpdate(eased * target);
      if (elapsed < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, onUpdate]);
  return null;
}

export default function Hero() {
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 0%, rgba(99,102,241,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 10%, rgba(139,92,246,0.15) 0%, transparent 55%),
          radial-gradient(ellipse 40% 30% at 50% 80%, rgba(59,130,246,0.10) 0%, transparent 50%),
          #FAFAFA
        `,
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50 dark:bg-indigo-950/30 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
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
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-none tracking-tighter"
            style={{
              background:
                "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #2563EB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SONI MAULYA M
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-10 flex items-center justify-center"
          >
            <span className="font-display font-semibold text-xl sm:text-2xl text-muted-foreground">
              {displayed}
              <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 align-middle animate-blink" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed"
          >
            Building intelligent systems that bridge AI research and real-world
            impact.
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
              className="border-border hover:border-primary/50 hover:bg-primary/5 px-7 py-2.5 rounded-xl font-medium transition-all duration-200"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
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
              className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted border border-border hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/maulya-soni-6ba03734b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-ocid="hero.linkedin_link"
              className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted border border-border hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:maulyasoni.it@gmail.com"
              aria-label="Email"
              data-ocid="hero.email_link"
              className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted border border-border hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full max-w-2xl"
          >
            {STATS.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
                label={stat.label}
                color={stat.color}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
