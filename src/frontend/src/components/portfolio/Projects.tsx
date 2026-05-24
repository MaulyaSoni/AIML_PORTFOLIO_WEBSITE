import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { Project } from "../../types/portfolio";

type FilterTab = "all" | "ml" | "genai" | "webdev";

const FILTER_TABS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ml", label: "Machine Learning" },
  { key: "genai", label: "Gen AI" },
  { key: "webdev", label: "Web Dev" },
];

const PROJECTS: Project[] = [
  {
    id: "phishing",
    title: "Phishing Email Detection System",
    description:
      "A phishing email classifier built using Random Forest and Logistic Regression. Applies the complete supervised ML pipeline achieving 96.5% accuracy and 96% precision.",
    tags: ["Machine Learning"],
    techPills: ["Python", "Scikit-learn", "Random Forest", "NLP"],
    category: "ml",
    githubUrl: "https://github.com/MaulyaSoni/Phising-Email-Detection",
    badge: "96.5% Accuracy",
  },
  {
    id: "vishleshak",
    title: "VISHLESHAK.AI",
    description:
      "Agentic AI financial assistant using LangGraph. Enables stateful multi-step reasoning over 10,000+ row datasets with automated anomaly detection and visual business insights.",
    tags: ["Gen AI"],
    techPills: ["LangGraph", "RAG", "Python", "LangChain"],
    category: "genai",
    githubUrl: "https://github.com/MaulyaSoni/VISHLESHAK.AI",
    liveUrl: "https://vishleshak-ai.streamlit.app/",
  },
  {
    id: "linkedin-studio",
    title: "LinkedIn AI Auto-Publishing System",
    description:
      "End-to-end LLM-powered platform for one-click generation and deployment of LinkedIn content. Reduced manual effort by 80% and increased engagement by 40%.",
    tags: ["Gen AI"],
    techPills: ["LangChain", "LinkedIn API", "Python", "Automation"],
    category: "genai",
    githubUrl: "https://github.com/MaulyaSoni/Linked_Content_Studio",
    demoUrl:
      "https://www.linkedin.com/posts/maulya-soni-6ba03734b_showcasing-innovation-my-journey-with-ai-powered-activity-7431441041448259584-w2_u/",
  },
  {
    id: "bhaav",
    title: "BHAAV AI — Emotion Detection",
    description:
      "Real-time CNN-based facial emotion recognition system using OpenCV. Optimized for low-latency inference with DirectShow backend and Streamlit UI.",
    tags: ["Machine Learning"],
    techPills: ["Python", "OpenCV", "CNNs", "Streamlit"],
    category: "ml",
    githubUrl: "https://github.com/MaulyaSoni/Bhaav.AI",
  },
  {
    id: "drowsiness",
    title: "Driver Drowsiness Detection",
    description:
      "Computer vision system detecting driver drowsiness in real-time using eye tracking and alert mechanisms to improve road safety.",
    tags: ["Machine Learning"],
    techPills: ["Python", "OpenCV", "Computer Vision"],
    category: "ml",
    githubUrl: "https://github.com/MaulyaSoni/Driver_Drowsiness_detection",
  },
  {
    id: "airbnb",
    title: "Airbnb Clone",
    description:
      "Full-stack hotel booking platform with optimistic UI, authentication, and payment integration built with modern web technologies.",
    tags: ["Web Dev"],
    techPills: ["React", "Express", "MongoDB"],
    category: "webdev",
    githubUrl: "https://github.com/MaulyaSoni/AIrbnb-clone",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-4xl text-foreground mb-3">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A selection of AI/ML and full-stack projects showcasing practical
            impact.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveFilter(tab.key)}
              data-ocid={`projects.filter_${tab.key}`}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === tab.key
                  ? "bg-primary text-primary-foreground shadow-subtle"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              data-ocid={`projects.item.${i + 1}`}
              className="group flex flex-col p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                {project.badge && (
                  <Badge className="shrink-0 bg-primary/10 text-primary border-primary/20 text-xs whitespace-nowrap">
                    {project.badge}
                  </Badge>
                )}
              </div>

              {/* Category tag */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techPills.map((pill) => (
                  <span
                    key={pill}
                    className="font-mono text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/60"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Action links */}
              <div className="flex items-center gap-4 pt-3 border-t border-border/60">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub: ${project.title}`}
                    data-ocid={`projects.github.${i + 1}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                )}
                {(project.liveUrl || project.demoUrl) && (
                  <a
                    href={project.liveUrl ?? project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo: ${project.title}`}
                    data-ocid={`projects.live.${i + 1}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {project.liveUrl ? "Live Demo" : "View Demo"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
