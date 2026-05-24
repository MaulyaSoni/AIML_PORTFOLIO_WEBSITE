import { Award, ExternalLink, Trophy } from "lucide-react";
import { motion } from "motion/react";
import type { Achievement, Certification } from "../../types/portfolio";

const CERTS: Certification[] = [
  {
    id: "nptel",
    title: "NPTEL Silver Elite Certificate: Cloud Computing",
    issuer: "IIT Kharagpur",
    score: "75%",
    date: "Top Performers",
  },
  {
    id: "ibm-ml",
    title: "IBM Machine Learning Professional Certificate",
    issuer: "Coursera",
    date: "6-Course Specialization",
    certificateUrl: "/IBM-Machine-Learning-Professional-Certificate.pdf",
  },
  {
    id: "ibm-da",
    title: "IBM Data Analyst Professional Certificate",
    issuer: "Coursera",
    certificateUrl: "/DATA_ANALYST_Professional_certi.pdf",
  },
  {
    id: "aws",
    title: "AWS Academy Graduate: Cloud Developing Trainee",
    issuer: "Amazon Web Services",
  },
];

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "hackathon-decode",
    title: "2x Hackathon Finalist",
    description:
      "DECODE-X 2026 (National-Level Data Analytics) & Odoo x Gujarat Vidyapith Hackathon 2026",
  },
];

const BORDER_COLORS = [
  "border-l-primary",
  "border-l-secondary",
  "border-l-primary",
  "border-l-secondary",
];

export default function Certifications() {
  const ALL_ITEMS = [
    ...CERTS.map((c, i) => ({
      type: "cert" as const,
      data: c,
      borderClass: BORDER_COLORS[i % BORDER_COLORS.length],
    })),
    ...ACHIEVEMENTS.map((a) => ({
      type: "achievement" as const,
      data: a,
      borderClass: "border-l-secondary",
    })),
  ];

  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-4xl text-foreground mb-3">
            Certifications &amp; Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {ALL_ITEMS.map((item, i) => (
            <motion.div
              key={item.type === "cert" ? item.data.id : item.data.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              data-ocid={`certifications.item.${i + 1}`}
              className={`flex items-start gap-4 p-5 rounded-2xl bg-card border border-border border-l-4 ${
                item.borderClass
              } shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all duration-300`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                  item.type === "achievement"
                    ? "bg-gradient-to-br from-primary to-secondary"
                    : "bg-primary/10"
                }`}
              >
                {item.type === "achievement" ? (
                  <Trophy
                    className="text-white"
                    style={{ width: "18px", height: "18px" }}
                  />
                ) : (
                  <Award
                    className="text-primary"
                    style={{ width: "18px", height: "18px" }}
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                {item.type === "cert" ? (
                  <>
                    <h3 className="font-semibold text-sm text-foreground leading-snug">
                      {item.data.title}
                    </h3>
                    <p className="text-xs text-primary mt-0.5">
                      {item.data.issuer}
                    </p>
                    {(item.data.score || item.data.date) && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {[item.data.score, item.data.date]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    )}
                    {item.data.certificateUrl ? (
                      <a
                        href={item.data.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid={`certifications.view.${i + 1}`}
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 mt-1.5 transition-colors duration-200"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Certificate
                      </a>
                    ) : item.data.id === "nptel" ? (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground mt-1.5">
                        <ExternalLink className="w-3 h-3" />
                        View Certificate
                      </span>
                    ) : null}
                  </>
                ) : (
                  <>
                    <h3 className="font-semibold text-sm text-foreground leading-snug">
                      {item.data.title}
                    </h3>
                    {(item.data as Achievement).description && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {(item.data as Achievement).description}
                      </p>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
