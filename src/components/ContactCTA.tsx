import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import VisitorCounter from "./VisitorCounter";

const socials = [
  {
    name: "X",
    href: "https://x.com/Lsc8954",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lucky-singh-chauhan-87329b255/",
    icon: Linkedin,
  },
  {
    name: "Gmail",
    href: "mailto:luckysinghchauhan415@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    href: "https://github.com/LSC895",
    icon: Github,
  },
];

const ContactCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center py-16 sm:py-24"
    >
      <Badge variant="outline" className="mb-6 px-4 py-1.5 text-xs uppercase tracking-widest border-border/60">
        Socials
      </Badge>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight">
        Let's build something
        <br />
        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          extraordinary.
        </span>
      </h2>

      <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed italic">
        DM me on X or Drop a Mail
      </p>

      <div className="flex items-center justify-center gap-4 mb-10">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl border border-border/40 bg-accent/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>

      <VisitorCounter />
    </motion.div>
  );
};

export default ContactCTA;
