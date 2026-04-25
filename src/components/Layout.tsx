import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Menu, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import BottomDock from "./BottomDock";
import SectionDots from "./SectionDots";
import ParticleGrid from "./ParticleGrid";
import confetti from "canvas-confetti";
import { toast } from "sonner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [gravityBroken, setGravityBroken] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let keys = "";
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keys += e.key.toLowerCase();
      if (keys.length > 20) {
        keys = keys.slice(-20);
      }
      
      if (keys.endsWith("lucky")) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#412991', '#191919', '#8E75B2', '#FF6446', '#FFD21E'],
          zIndex: 9999
        });
        keys = "";
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (gravityBroken) {
      const allElements = Array.from(document.querySelectorAll("main *"));
      const targetTags = ["H1", "H2", "H3", "H4", "P", "A", "BUTTON", "IMG", "SPAN"];
      
      const leafElements = allElements.filter(el => {
         if (targetTags.includes(el.tagName)) return true;
         if (el.classList.contains("bg-card") || el.classList.contains("border") || el.classList.contains("rounded-2xl") || el.classList.contains("glass-panel")) {
           return true; 
         }
         return false;
      });

      const targets = leafElements.filter(el => {
         let parent = el.parentElement;
         while (parent && parent.tagName !== 'MAIN') {
           if (leafElements.includes(parent)) return false;
           parent = parent.parentElement;
         }
         return true;
      });

      targets.forEach(el => {
        const htmlEl = el as HTMLElement;
        const rect = htmlEl.getBoundingClientRect();
        const maxDrop = window.innerHeight - rect.bottom - 10;
        const randomRot = (Math.random() - 0.5) * 60;
        const duration = 1 + Math.random() * 1.5;
        
        htmlEl.style.setProperty('--drop-y', `${Math.max(0, maxDrop)}px`);
        htmlEl.style.setProperty('--drop-r', `${randomRot}deg`);
        htmlEl.style.setProperty('--drop-d', `${duration}s`);
        htmlEl.classList.add("gravity-fall");
      });
    } else {
      document.querySelectorAll(".gravity-fall").forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.classList.remove("gravity-fall");
      });
    }
  }, [gravityBroken]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 relative">
      <ParticleGrid />
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

          <div className="flex items-center gap-2">
            <button
              onClick={() => setGravityBroken(!gravityBroken)}
              className={`flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${gravityBroken ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'}`}
              title="Toggle Gravity"
            >
              <ArrowDown className={`w-4 h-4 transition-transform duration-500 ${gravityBroken ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-all duration-300"
            >
              <Menu className="w-4 h-4" />
              <span className="text-sm font-medium">MENU</span>
            </button>
          </div>
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
      <footer className="border-t border-border/40 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center sm:items-start gap-4">
              <div className="flex items-center gap-4">
                <a href="https://github.com/LSC895" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/40 hover:text-foreground transition-all duration-300 hover:scale-110">
                  <Icon icon="simple-icons:github" className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/lucky-singh-chauhan-87329b255/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/40 hover:text-foreground transition-all duration-300 hover:scale-110">
                  <Icon icon="simple-icons:linkedin" className="w-5 h-5" />
                </a>
                <a href="https://x.com/Lsc8954" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/40 hover:text-foreground transition-all duration-300 hover:scale-110">
                  <Icon icon="simple-icons:x" className="w-5 h-5" />
                </a>
                <a href="https://medium.com/@luckysinghchauhan415" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/40 hover:text-foreground transition-all duration-300 hover:scale-110">
                  <Icon icon="simple-icons:medium" className="w-5 h-5" />
                </a>
              </div>
              <p className="text-muted-foreground/60 text-sm font-medium">
                Built with ❤️ by Lucky Singh Chauhan
              </p>
            </div>
            
            <div className="text-center sm:text-right">
              <p className="text-muted-foreground/40 text-xs tracking-widest uppercase">
                © 2026. Engineered with Soul.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Dock Navigation */}
      <BottomDock onMenuToggle={() => setMenuOpen(!menuOpen)} />
    </div>
  );
};

export default Layout;
