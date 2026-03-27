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
            <img
              src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color.replace("#", "")}`}
              alt={tool.name}
              className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110"
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
