import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const aiTools: TechItem[] = [
  { name: "GPT-4", icon: "openai", color: "412991" },
  { name: "Claude", icon: "anthropic", color: "191919" },
  { name: "LangChain", icon: "langchain", color: "1C3C3C" },
  { name: "ChromaDB", icon: "chroma", color: "FF6446" },
  { name: "HuggingFace", icon: "huggingface", color: "FFD21E" },
  { name: "PyTorch", icon: "pytorch", color: "EE4C2C" },
  { name: "NumPy", icon: "numpy", color: "013243" },
  { name: "Pandas", icon: "pandas", color: "150458" },
];

const backendTools: TechItem[] = [
  { name: "Python", icon: "python", color: "3776AB" },
  { name: "FastAPI", icon: "fastapi", color: "009688" },
  { name: "Docker", icon: "docker", color: "2496ED" },
  { name: "AWS", icon: "amazonaws", color: "FF9900" },
  { name: "GCP", icon: "googlecloud", color: "4285F4" },
  { name: "Kubernetes", icon: "kubernetes", color: "326CE5" },
  { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
  { name: "Redis", icon: "redis", color: "DC382D" },
  { name: "Git", icon: "git", color: "F05032" },
  { name: "GitHub Actions", icon: "githubactions", color: "2088FF" },
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
              src={`https://cdn.simpleicons.org/${item.icon}/${item.color}`}
              alt={item.name}
              className="w-5 h-5"
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
