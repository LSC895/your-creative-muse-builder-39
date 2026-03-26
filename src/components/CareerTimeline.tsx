import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Founding Engineer – AI/ML & Backend",
    company: "Freelance / Contract",
    period: "Mar 2025 – Present",
    location: "Remote",
    bullets: [
      "Architected production-grade LLM applications using RAG, reducing manual data analysis time for clients.",
      "Deployed scalable AI APIs via FastAPI and Docker, ensuring 99.9% uptime for automated workflows.",
    ],
    tags: ["RAG", "FastAPI", "Docker", "LLM"],
    current: true,
  },
  {
    role: "Technical Co-Founder",
    company: "Xtrapp",
    period: "Nov 2024 – Mar 2025",
    location: "Gurgaon, India",
    bullets: [
      "Designed a scalable backend for creator monetization, integrating AI-driven content moderation.",
      "Led technical strategy and infrastructure deployment on GCP, enabling rapid MVP iteration.",
    ],
    tags: ["GCP", "AI/ML", "System Design"],
    current: false,
  },
  {
    role: "Engineer Trainee",
    company: "Go Earner",
    period: "Jul 2023 – Sep 2023",
    location: "New Delhi, India",
    bullets: [
      "Automated CI/CD pipelines using GitHub Actions, reducing deployment errors by 40%.",
      "Optimized cloud resource allocation, cutting infrastructure costs for ML services.",
    ],
    tags: ["CI/CD", "GitHub Actions", "Cloud"],
    current: false,
  },
];

const CareerTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border/60" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="relative pl-12 sm:pl-16 group"
          >
            {/* Timeline dot */}
            <div className={`absolute left-2.5 sm:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
              exp.current
                ? "bg-primary border-primary shadow-md shadow-primary/30"
                : "bg-background border-muted-foreground/40 group-hover:border-primary"
            }`} />

            <div className="rounded-xl border border-border/40 p-5 sm:p-6 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 group-hover:-translate-y-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">{exp.company}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-medium">{exp.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-1.5 mb-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary/60 mt-1.5 shrink-0">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs px-2 py-0.5 bg-accent/80 text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
