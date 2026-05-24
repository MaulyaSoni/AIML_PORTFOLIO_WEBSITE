import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import type { EducationItem } from "../../types/portfolio";

const EDUCATION: EducationItem[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology in Information Technology",
    institution: "Devang Patel Institute of Advanced Technology and Research",
    location: "Gujarat, India",
    period: "Aug 2023 – Present",
    grade: "8.14 / 10",
    gradeLabel: "CGPA",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Education (HSC)",
    institution: "Knowledge High School, Nadiad",
    location: "Gujarat, India",
    period: "June 2021 – March 2023",
    grade: "79.36 PR",
    gradeLabel: "Percentile",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-4xl text-foreground mb-3">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              data-ocid={`education.item.${i + 1}`}
              className="group relative p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Colored left accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${
                  i === 0
                    ? "bg-gradient-to-b from-primary to-secondary"
                    : "bg-gradient-to-b from-secondary to-primary/50"
                }`}
              />

              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-foreground leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium text-sm mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5 flex items-center gap-1">
                    <span>📍</span> {edu.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground bg-muted border border-border px-2.5 py-1 rounded-full">
                  {edu.period}
                </span>
                <div className="text-right">
                  <div className="text-base font-bold text-foreground">
                    {edu.grade}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {edu.gradeLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
