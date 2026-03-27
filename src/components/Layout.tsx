import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomDock from "./BottomDock";
import SectionDots from "./SectionDots";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Top Header Bar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "top-3 sm:top-4" : ""
        }`}
      >
        <div className={`flex items-center gap-4 px-5 py-2.5 rounded-2xl border backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "bg-background/80 border-border/60 shadow-lg shadow-black/10"
            : "bg-background/60 border-border/30 shadow-md shadow-black/5"
        }`}>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-all duration-300"
          >
            <Menu className="w-4 h-4" />
            <span className="text-sm font-medium">MENU</span>
          </button>
        </div>

        {/* Dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 left-0 right-0 rounded-2xl border border-border/40 bg-background/90 backdrop-blur-xl shadow-xl overflow-hidden"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-5 py-3 text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Left Sidebar Section Dots */}
      {location.pathname === "/" && <SectionDots />}

      <main className="flex-1 pb-24">
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

      {/* Footer */}
      <footer className="border-t border-border/40 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground/60 text-sm">
              Built with ❤️ by Lucky Singh Chauhan
            </p>
            <p className="text-muted-foreground/40 text-xs">
              © 2026. Engineered with Soul.
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom Dock Navigation */}
      <BottomDock />
    </div>
  );
};

export default Layout;
