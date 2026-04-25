import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const aiTools: TechItem[] = [
  { name: "GPT-4", icon: "simple-icons:openai", color: "#412991" },
  { name: "Claude", icon: "simple-icons:anthropic", color: "#191919" },
  { name: "Gemini", icon: "simple-icons:googlegemini", color: "#8E75B2" },
  { name: "LangChain", icon: "simple-icons:langchain", color: "#1C3C3C" },
  { name: "ChromaDB", icon: "simple-icons:chroma", color: "#FF6446" },
  { name: "HuggingFace", icon: "simple-icons:huggingface", color: "#FFD21E" },
  { name: "PyTorch", icon: "simple-icons:pytorch", color: "#EE4C2C" },
  { name: "Pandas", icon: "simple-icons:pandas", color: "#150458" },
];

const backendTools: TechItem[] = [
  { name: "Python", icon: "simple-icons:python", color: "#3776AB" },
  { name: "FastAPI", icon: "simple-icons:fastapi", color: "#009688" },
  { name: "Docker", icon: "simple-icons:docker", color: "#2496ED" },
  { name: "AWS", icon: "simple-icons:amazonaws", color: "#FF9900" },
  { name: "GCP", icon: "simple-icons:googlecloud", color: "#4285F4" },
  { name: "Kubernetes", icon: "simple-icons:kubernetes", color: "#326CE5" },
  { name: "PostgreSQL", icon: "simple-icons:postgresql", color: "#4169E1" },
  { name: "Redis", icon: "simple-icons:redis", color: "#DC382D" },
  { name: "Git", icon: "simple-icons:git", color: "#F05032" },
  { name: "GitHub Actions", icon: "simple-icons:githubactions", color: "#2088FF" },
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
            <Icon icon={item.icon} width={20} height={20} style={{ color: item.color }} />
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
