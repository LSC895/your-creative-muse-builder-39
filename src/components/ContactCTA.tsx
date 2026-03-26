import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const ContactCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center py-16 sm:py-24"
    >
      <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
        What's next?
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
        Let's build something
        <br />
        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          extraordinary.
        </span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
        I'm always open to interesting conversations about AI, tech, 
        or collaboration opportunities.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="mailto:luckysinghchauhan415@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
        >
          <Mail className="w-4 h-4" />
          Say Hello
        </a>
        <a
          href="https://x.com/Lsc8954"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 border border-border rounded-xl font-medium text-foreground hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
        >
          DM on X
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ContactCTA;
