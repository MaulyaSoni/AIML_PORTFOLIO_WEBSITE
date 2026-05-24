import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface SkillItem {
  name: string;
  slug?: string;
  lightColor?: string;
  darkColor?: string;
  emoji?: string;
  useGithubAvatar?: boolean;
}

interface SkillGroupData {
  group: string;
  tags: string[];
  skills: SkillItem[];
}

const SKILL_GROUPS: SkillGroupData[] = [
  {
    group: "AI & Agent Systems",
    tags: ["Multi-Agent Systems", "RAG Pipelines", "Agentic AI"],
    skills: [
      {
        name: "LangChain",
        slug: "langchain",
        lightColor: "1C3C3C",
        darkColor: "7AC7A4",
      },
      {
        name: "LangGraph",
        slug: "langchain",
        lightColor: "1C3C3C",
        darkColor: "7AC7A4",
      },
      {
        name: "LangSmith",
        slug: "langchain",
        lightColor: "1C3C3C",
        darkColor: "7AC7A4",
      },
      {
        name: "Hugging Face",
        slug: "huggingface",
        lightColor: "FFD21E",
        darkColor: "FFD21E",
      },
      {
        name: "Groq API",
        useGithubAvatar: true,
      },
      {
        name: "FastAPI",
        slug: "fastapi",
        lightColor: "009688",
        darkColor: "009688",
      },
      {
        name: "OpenAI",
        slug: "openai",
        lightColor: "000000",
        darkColor: "FFFFFF",
      },
    ],
  },
  {
    group: "ML / Deep Learning",
    tags: ["Feature Engineering", "Model Evaluation", "NLP"],
    skills: [
      {
        name: "Scikit-learn",
        slug: "scikitlearn",
        lightColor: "F7931E",
        darkColor: "F7931E",
      },
      {
        name: "TensorFlow",
        slug: "tensorflow",
        lightColor: "FF6F00",
        darkColor: "FF6F00",
      },
      { name: "Random Forest" },
      { name: "Logistic Regression" },
      { name: "CNNs" },
      { name: "RNNs" },
      { name: "NLP" },
    ],
  },
  {
    group: "Data & Analysis",
    tags: ["Data Preprocessing", "Visualization"],
    skills: [
      {
        name: "Pandas",
        slug: "pandas",
        lightColor: "150458",
        darkColor: "150458",
      },
      {
        name: "NumPy",
        slug: "numpy",
        lightColor: "013243",
        darkColor: "013243",
      },
      {
        name: "Matplotlib",
        slug: "matplotlib",
        lightColor: "11557c",
        darkColor: "11557c",
      },
      {
        name: "Seaborn",
        slug: "python",
        lightColor: "3776AB",
        darkColor: "3776AB",
      },
      { name: "Feature Engineering" },
    ],
  },
  {
    group: "Programming & Backend",
    tags: ["REST APIs", "Core Foundations"],
    skills: [
      {
        name: "Python",
        slug: "python",
        lightColor: "3776AB",
        darkColor: "3776AB",
      },
      {
        name: "C++",
        slug: "cplusplus",
        lightColor: "00599C",
        darkColor: "00599C",
      },
      {
        name: "SQL",
        slug: "postgresql",
        lightColor: "336791",
        darkColor: "336791",
      },
    ],
  },
  {
    group: "Dev Tools",
    tags: ["Version Control", "Deployment"],
    skills: [
      { name: "Git", slug: "git", lightColor: "F05032", darkColor: "F05032" },
      {
        name: "GitHub",
        slug: "github",
        lightColor: "181717",
        darkColor: "FFFFFF",
      },
      {
        name: "Docker",
        slug: "docker",
        lightColor: "2496ED",
        darkColor: "2496ED",
      },
      {
        name: "Jupyter",
        slug: "jupyter",
        lightColor: "F37626",
        darkColor: "F37626",
      },
      {
        name: "Google Colab",
        slug: "googlecolab",
        lightColor: "F9AB00",
        darkColor: "F9AB00",
      },
    ],
  },
  {
    group: "Generative AI",
    tags: ["Prompt Engineering", "LLMs", "Orchestration"],
    skills: [
      { name: "Generative AI", emoji: "✦" },
      { name: "RAG", emoji: "⬡" },
      { name: "Agentic AI", emoji: "◈" },
      { name: "Multi-Agent Orchestration", emoji: "⊕" },
      { name: "Prompt Engineering", emoji: "◉" },
      { name: "LLMs", emoji: "⬟" },
    ],
  },
];

interface MarqueeIcon {
  slug: string;
  light: string;
  dark: string;
  alt: string;
  glowColor: string;
}

const MARQUEE_ICONS: MarqueeIcon[] = [
  {
    slug: "langchain",
    light: "1C3C3C",
    dark: "7AC7A4",
    alt: "LangChain",
    glowColor: "#1C3C3C",
  },
  {
    slug: "python",
    light: "3776AB",
    dark: "3776AB",
    alt: "Python",
    glowColor: "#3776AB",
  },
  {
    slug: "huggingface",
    light: "FFD21E",
    dark: "FFD21E",
    alt: "HuggingFace",
    glowColor: "#FFD21E",
  },
  {
    slug: "docker",
    light: "2496ED",
    dark: "2496ED",
    alt: "Docker",
    glowColor: "#2496ED",
  },
  {
    slug: "fastapi",
    light: "009688",
    dark: "009688",
    alt: "FastAPI",
    glowColor: "#009688",
  },
  {
    slug: "tensorflow",
    light: "FF6F00",
    dark: "FF6F00",
    alt: "TensorFlow",
    glowColor: "#FF6F00",
  },
  {
    slug: "git",
    light: "F05032",
    dark: "F05032",
    alt: "Git",
    glowColor: "#F05032",
  },
  {
    slug: "scikitlearn",
    light: "F7931E",
    dark: "F7931E",
    alt: "Scikit-learn",
    glowColor: "#F7931E",
  },
  {
    slug: "jupyter",
    light: "F37626",
    dark: "F37626",
    alt: "Jupyter",
    glowColor: "#F37626",
  },
  {
    slug: "github",
    light: "181717",
    dark: "FFFFFF",
    alt: "GitHub",
    glowColor: "#818CF8",
  },
];

function useIsDark() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

function getIconUrl(
  slug: string,
  light: string,
  dark: string,
  isDark: boolean,
): string {
  const color = isDark ? dark : light;
  return `https://cdn.simpleicons.org/${slug}/${color}`;
}

const GROQ_AVATAR =
  "https://avatars.githubusercontent.com/u/105184281?s=200&v=4";

export default function Skills() {
  const isDark = useIsDark();

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            Tech Stack
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-2">
            Stack & Toolkit.
          </h2>
          <p className="text-zinc-500 mt-3 max-w-xl">
            Tools I use to build intelligent AI systems and scalable
            applications.
          </p>
        </motion.div>

        {/* Marquee strip */}
        <div className="overflow-hidden py-6 mb-6" data-ocid="skills.marquee">
          <div className="flex animate-marquee">
            {[...MARQUEE_ICONS, ...MARQUEE_ICONS].map((icon, i) => (
              <div
                key={`${icon.alt}-${i}`}
                className="relative flex items-center justify-center w-12 h-12 mx-6 flex-shrink-0"
              >
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-30"
                  style={{ backgroundColor: icon.glowColor }}
                />
                <img
                  src={getIconUrl(icon.slug, icon.light, icon.dark, isDark)}
                  alt={icon.alt}
                  className="relative w-8 h-8 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Skill group cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
              data-ocid={`skills.group.${gi + 1}`}
              className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(99,102,241,0.10)] dark:hover:shadow-[0_8px_24px_rgba(99,102,241,0.15)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <h3 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:border-indigo-200 dark:hover:border-indigo-800 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200 cursor-default group"
                  >
                    {skill.useGithubAvatar ? (
                      <img
                        src={GROQ_AVATAR}
                        alt={skill.name}
                        className="w-4 h-4 rounded-sm object-contain"
                        loading="lazy"
                      />
                    ) : skill.slug ? (
                      <img
                        src={getIconUrl(
                          skill.slug,
                          skill.lightColor!,
                          skill.darkColor!,
                          isDark,
                        )}
                        alt={skill.name}
                        className="w-4 h-4"
                        loading="lazy"
                      />
                    ) : skill.emoji ? (
                      <span className="text-indigo-500 text-xs font-bold w-4 text-center leading-none">
                        {skill.emoji}
                      </span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    )}
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
