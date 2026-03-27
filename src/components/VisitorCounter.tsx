import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("lsc-visitor-count");
    const current = stored ? parseInt(stored) + 1 : Math.floor(Math.random() * 500) + 100;
    localStorage.setItem("lsc-visitor-count", current.toString());
    setCount(current);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/40 bg-yellow-500/5 text-yellow-600 dark:text-yellow-400"
    >
      <Eye className="w-4 h-4" />
      <span className="text-sm font-medium">
        You are visitor #{count.toLocaleString()}
      </span>
    </motion.div>
  );
};

export default VisitorCounter;
