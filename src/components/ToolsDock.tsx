import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const tools = [
  { name: "VS Code", icon: "simple-icons:visualstudiocode", color: "#007ACC" },
  { name: "Terminal", icon: "simple-icons:windowsterminal", color: "#4D4D4D" },
  { name: "Docker", icon: "simple-icons:docker", color: "#2496ED" },
  { name: "GitHub", icon: "simple-icons:github", color: "#181717" },
  { name: "Google Colab", icon: "simple-icons:googlecolab", color: "#F9AB00" },
  { name: "Brave", icon: "simple-icons:brave", color: "#FB542B" },
  { name: "Hugging Face", icon: "simple-icons:huggingface", color: "#FFD21E" },
  { name: "Eraser", icon: "simple-icons:eraser", color: "#1F2937" },
];

const ToolsDock = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
          whileHover={{ scale: 1.15, y: -6 }}
          className="flex flex-col items-center gap-2.5 cursor-default group"
        >
          <div
            className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl"
            style={{ backgroundColor: tool.color + "20", borderColor: tool.color + "40", borderWidth: 1 }}
          >
            <Icon
              icon={tool.icon}
              width={32}
              height={32}
              className="sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110"
              style={{ color: tool.color }}
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
