import { Briefcase } from "lucide-react";
import { motion } from "motion/react";
import type { ExperienceItem } from "../../types/portfolio";

const EXPERIENCE: ExperienceItem[] = [
  {
    id: "codsoft",
    role: "Web Development Intern",
    company: "CODSOFT",
    type: "Remote",
    period: "May 2025 – June 2025",
    bullets: [
      "Developed and deployed 4+ responsive web applications achieving 95+ Google Lighthouse scores and reducing load times by 35%.",
      "Improved UI/UX navigation flows using agile methodologies and Git-based version control, resulting in a 30% increase in simulated user engagement.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-4xl text-foreground mb-3">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              data-ocid={`experience.item.${i + 1}`}
              className="relative pl-16 sm:pl-20 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 sm:left-[18px] top-2 w-5 h-5 rounded-full bg-primary shadow-[0_0_0_4px] shadow-primary/20 flex items-center justify-center">
                <Briefcase className="w-2.5 h-2.5 text-primary-foreground" />
              </div>

              {/* Card */}
              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-semibold text-sm mt-0.5">
                      {exp.company}
                      <span className="text-muted-foreground font-normal ml-1.5">
                        · {exp.type}
                      </span>
                    </p>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full shrink-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-2 space-y-2">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
