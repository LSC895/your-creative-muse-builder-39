import { motion } from "framer-motion";
import { Search } from "lucide-react";

const SearchPalette = () => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/40 bg-background/80 backdrop-blur-xl shadow-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
    >
      <Search className="w-4 h-4" />
      <span className="text-sm font-medium hidden sm:inline">Search</span>
      <kbd className="hidden sm:inline text-xs px-1.5 py-0.5 rounded bg-accent/80 border border-border/40 font-mono">
        ⌘K
      </kbd>
    </motion.button>
  );
};

export default SearchPalette;
