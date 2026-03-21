
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Twitter, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Ideas", href: "/ideas" },
    { name: "About", href: "/about" },
    { name: "Guestbook", href: "/guestbook" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <header className="border-b border-border/40 sticky top-0 z-50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="relative hover:scale-105 transition-all duration-300 flex items-center"
            >
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                LSC
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-foreground transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Desktop Social & Theme */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
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

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/40">
              <nav className="flex flex-col space-y-3 mt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-all duration-300 py-2 ${
                      isActive(item.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* Mobile Social */}
              <div className="flex items-center space-x-6 mt-6 pt-4 border-t border-border/40">
                <a 
                  href="https://github.com/LSC895" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/lucky-singh-chauhan-87329b255/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/Lsc8954" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 animate-fade-in">
        {children}
      </main>

      <footer className="border-t border-border/40 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 LSC. Sharing the journey of a tech entrepreneur.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
