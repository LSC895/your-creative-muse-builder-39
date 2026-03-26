import { motion } from "framer-motion";

const tools = [
  { name: "VS Code", icon: "visualstudiocode", color: "#007ACC" },
  { name: "Terminal", icon: "windowsterminal", color: "#4D4D4D" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "GitHub", icon: "github", color: "#181717" },
  { name: "Postman", icon: "postman", color: "#FF6C37" },
  { name: "Notion", icon: "notion", color: "#000000" },
  { name: "Figma", icon: "figma", color: "#F24E1E" },
  { name: "Chrome", icon: "googlechrome", color: "#4285F4" },
];

const ToolsDock = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
          whileHover={{ scale: 1.2, y: -8 }}
          className="flex flex-col items-center gap-2 cursor-default group"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent/80 border border-border/40 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300 backdrop-blur-sm group-hover:border-primary/30">
            <img
              src={`https://cdn.simpleicons.org/${tool.icon}`}
              alt={tool.name}
              className="w-7 h-7 sm:w-8 sm:h-8 dark:invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
          <span className="text-xs text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tool.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default ToolsDock;
