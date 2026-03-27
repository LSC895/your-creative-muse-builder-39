import { motion } from "framer-motion";
import { Home, FolderOpen, BookOpen, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Link, useLocation } from "react-router-dom";

const BottomDock = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const items = [
    { icon: Home, label: "Home", href: "/" },
    { icon: FolderOpen, label: "Projects", href: "/projects" },
    { icon: BookOpen, label: "Blog", href: "/blog" },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "X",
      href: "https://x.com/Lsc8954",
      external: true,
    },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-3 py-2.5 rounded-2xl border border-border/40 bg-background/80 backdrop-blur-xl shadow-2xl shadow-black/20">
        {items.map((item) => {
          const isActive = !item.external && location.pathname === item.href;
          const Icon = item.icon;

          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-all duration-300"
              >
                <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Icon />
                </motion.div>
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.href!}
              className={`relative p-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-foreground bg-accent/80"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
              }`}
            >
              <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Icon className="w-5 h-5" />
              </motion.div>
              {isActive && (
                <motion.div
                  layoutId="dock-indicator"
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                />
              )}
            </Link>
          );
        })}

        <div className="w-px h-6 bg-border/40 mx-1" />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-all duration-300"
        >
          <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}>
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
};

export default BottomDock;
