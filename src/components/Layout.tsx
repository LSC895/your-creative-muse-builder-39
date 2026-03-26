import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Twitter, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Floating Pill Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "top-3 sm:top-4" : ""
        }`}
      >
        <nav className={`flex items-center gap-1 px-2 py-2 rounded-2xl border backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "bg-background/80 border-border/60 shadow-lg shadow-primary/5"
            : "bg-background/60 border-border/30 shadow-md shadow-primary/5"
        }`}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                isActive(item.href)
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div className="w-px h-5 bg-border/60 mx-1" />

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-all duration-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t border-border/40 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-center mb-8">
            <p className="text-muted-foreground/60 italic text-sm mb-8">
              "The best way to predict the future is to build it."
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 mb-8">
            <a
              href="https://github.com/LSC895"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucky-singh-chauhan-87329b255/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/Lsc8954"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-center text-muted-foreground/50 text-xs">
            © 2025 Lucky Singh Chauhan · Engineered with soul
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
