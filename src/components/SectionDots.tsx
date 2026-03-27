import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "career", label: "Career" },
  { id: "tools", label: "Tools" },
  { id: "projects", label: "Projects" },
  { id: "articles", label: "Articles" },
  { id: "contact", label: "Contact" },
];

const SectionDots = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map(({ id, label }) => (
        <div
          key={id}
          className="flex items-center gap-3 group"
          onMouseEnter={() => setHoveredSection(id)}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <button
            onClick={() => {
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeSection === id
                ? "bg-foreground scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
          <AnimatePresence>
            {(hoveredSection === id || activeSection === id) && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                className={`text-xs font-medium whitespace-nowrap ${
                  activeSection === id ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default SectionDots;
