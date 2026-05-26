import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
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
    id: "insureiq",
    title: "InsureIQ",
    description: "Production-grade insurance intelligence platform combining XGBoost claim prediction, SHAP explainability, and a 4-node LangGraph multi-agent pipeline. Underwriters get automated risk scoring, plain-language explanations, premium advisory, and a PDF report — all in seconds.",
    tags: ["Generative AI"],
    techPills: ["LangGraph", "XGBoost", "SHAP", "Groq API", "FastAPI", "React", "Python"],
    category: "genai",
    githubUrl: "https://github.com/MaulyaSoni/InsureIQ",
    liveUrl: "https://insure-iq-com.vercel.app/",
    badge: "AUC 0.74",
  },
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
                  ? "bg-indigo-600 dark:bg-indigo-500 text-white"
                  : "border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                data-ocid={`projects.item.${i + 1}`}
                className={`group flex flex-col p-6 rounded-2xl bg-white dark:bg-zinc-900 border transition-all duration-300 ${
                project.id === "insureiq"
                  ? "border-emerald-200 dark:border-emerald-800/50 hover:shadow-[0_8px_30px_rgba(16,185,129,0.10)] dark:hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1 md:col-span-1"
                  : "border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-none hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${
                    project.id === "insureiq" 
                      ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
                      : "bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                  }`}>
                    {project.badge}
                  </span>
                )}
              </div>

              {project.id === "insureiq" && (
                <p className="text-xs text-zinc-500 dark:text-zinc-500 mb-3 font-medium">
                  AI-Powered Vehicle Insurance Risk Analytics
                </p>
              )}

              {/* Category tag */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => {
                  let tagColor = "bg-secondary/10 text-secondary";
                  if (tag === 'Machine Learning') tagColor = "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400";
                  if (tag === 'Generative AI') tagColor = "bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400";
                  if (tag === 'Web Dev') tagColor = "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400";
                  
                  return (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${tagColor}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techPills.map((pill) => (
                  <span
                    key={pill}
                    className="font-mono text-xs px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              {/* Action links */}
              <div className="flex items-center gap-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub: ${project.title}`}
                    data-ocid={`projects.github.${i + 1}`}
                    className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    <Github className="w-4 h-4" />
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
                    className="flex items-center gap-1.5 text-sm text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {project.liveUrl ? "Live Demo" : "View Demo"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
