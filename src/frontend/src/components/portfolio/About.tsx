import { Brain, Code2, Rocket } from "lucide-react";
import { motion } from "motion/react";

const HIGHLIGHTS = [
  {
    icon: Brain,
    label: "AI/ML Focus",
    desc: "LLMs, RAG, multi-agent orchestration",
  },
  { icon: Code2, label: "Full Stack", desc: "React, FastAPI, Python, SQL" },
  {
    icon: Rocket,
    label: "Builder",
    desc: "Practical AI tools deployed in the real world",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-4xl text-foreground mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-4 border-primary p-1 shadow-lift">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <span className="font-display font-bold text-5xl text-primary">
                    MS
                  </span>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-primary/20 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-card">
                <Brain className="w-6 h-6 text-primary" />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                I am an Information Technology undergraduate at{" "}
                <span className="text-primary font-semibold">
                  Devang Patel Institute of Advanced Technology and Research
                </span>
                , Gujarat, specializing in Artificial Intelligence and Machine
                Learning. I have hands-on experience building LLM-powered
                applications, RAG systems, and multi-agent orchestration
                pipelines using LangChain and LangGraph.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy turning complex AI concepts into practical, deployable
                tools — from phishing detection classifiers to agentic financial
                assistants. I am actively looking for internship and project
                opportunities where I can contribute and grow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  data-ocid={`about.highlight.${i + 1}`}
                  className="p-4 rounded-2xl bg-card border border-border shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-semibold text-sm text-foreground">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
