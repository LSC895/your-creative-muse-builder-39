import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
}

const aiTools: TechItem[] = [
  { name: "GPT-4", icon: "openai" },
  { name: "Claude", icon: "anthropic" },
  { name: "LangChain", icon: "langchain" },
  { name: "ChromaDB", icon: "chroma" },
  { name: "HuggingFace", icon: "huggingface" },
  { name: "PyTorch", icon: "pytorch" },
  { name: "NumPy", icon: "numpy" },
  { name: "Pandas", icon: "pandas" },
];

const backendTools: TechItem[] = [
  { name: "Python", icon: "python" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "amazonaws" },
  { name: "GCP", icon: "googlecloud" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Redis", icon: "redis" },
  { name: "Git", icon: "git" },
  { name: "GitHub Actions", icon: "githubactions" },
];

const MarqueeRow = ({ items, reverse = false }: { items: TechItem[]; reverse?: boolean }) => {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-accent/60 border border-border/40 hover:border-primary/30 hover:bg-accent transition-all duration-300 hover:scale-105 cursor-default backdrop-blur-sm"
          >
            <img
              src={`https://cdn.simpleicons.org/${item.icon}`}
              alt={item.name}
              className="w-5 h-5 dark:invert opacity-70"
              loading="lazy"
            />
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TechMarquee = () => {
  return (
    <div className="space-y-2">
      <MarqueeRow items={aiTools} />
      <MarqueeRow items={backendTools} reverse />
    </div>
  );
};

export default TechMarquee;
