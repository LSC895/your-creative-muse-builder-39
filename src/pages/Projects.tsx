
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Tatav",
      description: "Cognitive Architecture Engine — The missing piece between LLMs and truly persistent digital beings.",
      technologies: ["Python", "LangChain", "ChromaDB", "FastAPI", "Claude API"],
      category: "AI/Cognitive",
      status: "In Development",
      period: "May 2025 – Present",
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: "Vaani",
      description: "Speek more! Stress less! — Built a tool for individuals with serious speech disorder to help them improve it.",
      technologies: ["Whisper", "Supabase", "STT", "Clerk"],
      category: "Health Tech",
      status: "In Development",
      period: "Nov 2025 – Present",
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: "Rezoome",
      description: "One resume for every job! — Developed an NLP-based resume analysis and generation system. Implemented text parsing, keyword extraction, and ATS-aligned formatting logic. Generated 100+ resumes with automated content optimisation.",
      technologies: ["NLP", "Python", "AI/ML", "ATS"],
      category: "AI/SaaS",
      status: "In Development",
      period: "Jul 2025 – Present",
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: "CHETNA",
      description: "Self-Learning AI Architecture — A behavioral learning system that updates agent personality from lived experience — no retraining, no human intervention.",
      technologies: ["Python", "NumPy", "SQLite", "ChromaDB"],
      category: "AI Research",
      status: "In Development",
      period: "Mar 2026 – Present",
      liveUrl: null,
      githubUrl: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800";
      case "Beta": return "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800";
      case "In Development": return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800";
      default: return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-400 dark:border-gray-800";
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-foreground mb-6">Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A collection of AI/ML products I'm building. 
          From cognitive architectures to health tech, each project pushes boundaries.
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative border-b border-border/40 pb-16 last:border-b-0 rounded-xl p-6 -m-6 transition-all duration-500 cursor-pointer hover:bg-gradient-to-br hover:from-blue-50/50 hover:via-purple-50/30 hover:to-pink-50/50 dark:hover:from-blue-950/20 dark:hover:via-purple-950/10 dark:hover:to-pink-950/20 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/5 hover:border-blue-100 dark:hover:border-blue-900/50"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="border-border/60 group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors duration-300">
                  {project.category}
                </Badge>
                <Badge className={`border transition-colors duration-300 ${getStatusColor(project.status)}`}>
                  {project.status}
                </Badge>
                <span className="text-sm text-muted-foreground">{project.period}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-3">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-muted text-muted-foreground text-xs group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {project.liveUrl && (
                  <Button size="sm" asChild className="group-hover:bg-blue-600 group-hover:hover:bg-blue-700 transition-colors duration-300">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live <ExternalLink className="ml-2 w-3 h-3" />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild className="group-hover:border-blue-300 dark:group-hover:border-blue-700 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 pt-8 border-t border-border/40">
        <p className="text-muted-foreground mb-6">Interested in collaborating or have questions about any project?</p>
        <Button asChild>
          <a href="mailto:luckysinghchauhan415@gmail.com">Get in Touch</a>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
