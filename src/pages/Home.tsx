import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Calendar, Github, ExternalLink, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import GreetingAnimation from "../components/GreetingAnimation";
import ScrollReveal from "../components/ScrollReveal";
import TechMarquee from "../components/TechMarquee";
import ToolsDock from "../components/ToolsDock";
import CareerTimeline from "../components/CareerTimeline";
import ContactCTA from "../components/ContactCTA";
import TypewriterEffect from "../components/TypewriterEffect";
import SearchPalette from "../components/SearchPalette";
import AskLucky from "../components/AskLucky";
import TestimonialMarquee from "../components/TestimonialMarquee";
import ParticleGrid from "../components/ParticleGrid";
import profileAvatar from "@/assets/profile-avatar.png";

const Home = () => {
  const [showGreeting, setShowGreeting] = useState(true);

  const projects = [
    {
      title: "Tatav",
      tagline: "Cognitive Architecture Engine",
      description: "The missing piece between LLMs and truly persistent digital beings.",
      tech: ["Python", "LangChain", "ChromaDB", "FastAPI", "Claude API"],
      period: "May 2025 – Present",
      github: "https://github.com/LSC895",
    },
    {
      title: "Vaani",
      tagline: "Speek more! Stress less!",
      description: "Built a tool for individuals with serious speech disorder to help them improve it.",
      tech: ["Whisper", "Supabase", "STT", "Clerk"],
      period: "Nov 2025 – Present",
      github: "https://github.com/LSC895",
    },
    {
      title: "Rezoome",
      tagline: "One resume for every job!",
      description: "NLP-based resume analysis and generation system. Generated 100+ resumes with automated content optimisation.",
      tech: ["NLP", "Python", "AI/ML", "ATS"],
      period: "Jul 2025 – Present",
      github: "https://github.com/LSC895",
    },
    {
      title: "CHETNA",
      tagline: "Self-Learning AI Architecture",
      description: "A behavioral learning system that updates agent personality from lived experience — no retraining, no human intervention.",
      tech: ["Python", "NumPy", "SQLite", "ChromaDB"],
      period: "Mar 2026 – Present",
      github: "https://github.com/LSC895",
    },
  ];

  const articles = [
    {
      title: "Building SaaS in 2025? Read This Before You Launch (No BS)",
      date: "Jul 2, 2024",
      link: "https://medium.com/@luckysinghchauhan415/building-saas-in-2025-read-this-before-you-launch-no-bs-e7bb481c8a50",
    },
    {
      title: "Can You Build AGI on a $10 Million Budget? A Realistic Look",
      date: "Jun 20, 2025",
      link: "https://medium.com/@luckysinghchauhan415/can-you-build-agi-on-a-10-million-budget-a-realistic-look-4f91d8bee133",
    },
    {
      title: "Y Combinator's 30 Tips to 10x Your AI Coding",
      date: "May 26, 2025",
      link: "https://medium.com/@luckysinghchauhan415/y-combinators-30-tips-to-10x-your-ai-coding-the-ultimate-hack-for-developers-23be129bc2dc",
    },
  ];

  if (showGreeting) {
    return <GreetingAnimation onComplete={() => setShowGreeting(false)} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <section id="hero" className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-md shadow-green-500/50"
                />
                <span className="text-sm font-medium text-green-500">
                  Available for new projects
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight leading-[1.1]">
                Hi, I'm Lucky
                <BadgeCheck className="inline-block w-7 h-7 ml-2 text-blue-500 align-middle" />
                <br />
                <span className="text-muted-foreground">Singh Chauhan</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6 h-8">
                <TypewriterEffect />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
                I build AI that works in the real world — RAG pipelines, LLM integrations, and cognitive architectures that go from idea to deployed product. I've helped startups go from zero to funded. Now I'm building my own.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-accent/80">
                  🧠 AI/ML Engineer
                </Badge>
                <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-accent/80">
                  ⚡ Founding Engineer
                </Badge>
                <Badge variant="secondary" className="px-3 py-1.5 text-sm bg-accent/80">
                  🚀 Builder
                </Badge>
              </div>
            </ScrollReveal>
          </div>

          {/* Profile Photo Card */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl border-2 border-border/40 bg-accent/30 overflow-hidden shadow-2xl shadow-primary/5">
                <img src={profileAvatar} alt="Lucky Singh Chauhan" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-500 text-xs font-medium">
                ✦ Open to work
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section id="tech-stack" className="py-12 sm:py-16">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-lg font-semibold text-foreground whitespace-nowrap">Tech Stack</h2>
            <div className="flex-1 h-px bg-border/40" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <TechMarquee />
        </ScrollReveal>
      </section>

      {/* Career Timeline */}
      <section id="career" className="py-12 sm:py-16">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-lg font-semibold text-foreground whitespace-nowrap">Career Path</h2>
            <div className="flex-1 h-px bg-border/40" />
          </div>
        </ScrollReveal>
        <CareerTimeline />
      </section>

      {/* Tools Dock */}
      <section id="tools" className="py-12 sm:py-16">
        <ScrollReveal>
          <h2 className="text-center text-lg font-mono text-muted-foreground mb-10">
            {"{ "}The Tool Kit{" }"}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ToolsDock />
        </ScrollReveal>
      </section>

      {/* Selected Projects */}
      <section id="projects" className="py-12 sm:py-16">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-lg font-semibold text-foreground whitespace-nowrap">Selected Projects</h2>
            <div className="flex-1 h-px bg-border/40" />
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full overflow-hidden"
              >
                {/* Project preview image area */}
                <div className="h-36 sm:h-40 bg-accent/30 border-b border-border/20 flex items-center justify-center">
                  <span className="text-4xl opacity-60">
                    {project.title === "Tatav" && "🧠"}
                    {project.title === "Vaani" && "🗣️"}
                    {project.title === "Rezoome" && "📄"}
                    {project.title === "CHETNA" && "🤖"}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-muted-foreground/60">
                      {project.period}
                    </span>
                    <div className="flex items-center gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                      <ExternalLink className="w-4 h-4 text-muted-foreground/40" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs px-2 py-0.5 bg-transparent border-border/40"
                      >
                        {t}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="text-xs px-2 py-0.5 bg-transparent border-border/40">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center mt-8">
            <a
              href="https://github.com/LSC895?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/40 bg-accent/50 text-foreground font-medium hover:border-primary/30 hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ASK LUCKY Chatbot Widget */}
      <section className="py-12 sm:py-16">
        <ScrollReveal>
          <AskLucky />
        </ScrollReveal>
      </section>

      {/* Recent Articles */}
      <section id="articles" className="py-12 sm:py-16">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-lg font-semibold text-foreground whitespace-nowrap">Recent Writing</h2>
            <div className="flex-1 h-px bg-border/40" />
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
            >
              All articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {articles.map((article, index) => (
            <ScrollReveal key={article.title} delay={index * 0.1}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 sm:p-5 rounded-xl border border-border/40 hover:border-primary/20 hover:bg-accent/30 transition-all duration-300"
              >
                <div className="flex-1 min-w-0 mr-4">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground shrink-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact">
        <ContactCTA />
      </section>

      {/* Search Palette */}
      <SearchPalette />
    </div>
  );
};

export default Home;
