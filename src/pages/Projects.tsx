
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Rezoome",
      description: "Currently developing an AI-powered SaaS solution that automates resume building processes using machine learning. Built with modern tech stack focusing on scalability and user experience.",
      technologies: ["Bolt.ai", "OpenRouter", "Python", "Hugging Face"],
      category: "AI/SaaS",
      status: "In Development",
      liveUrl: "https://rezoome-ai.com",
      githubUrl: null,
    },
    {
      title: "E-commerce Analytics Tool",
      description: "A comprehensive analytics dashboard for e-commerce businesses to track sales, customer behavior, and inventory. Helped multiple small businesses optimize their operations.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Chart.js"],
      category: "Analytics",
      status: "Live",
      liveUrl: "https://ecommerce-analytics.com",
      githubUrl: "https://github.com/yourusername/ecommerce-analytics",
    },
    {
      title: "Task Management App",
      description: "A simple yet powerful task management application with team collaboration features. Designed with focus on user experience and productivity enhancement.",
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      category: "Productivity",
      status: "Live", 
      liveUrl: "https://task-manager-app.com",
      githubUrl: "https://github.com/yourusername/task-manager",
    },
    {
      title: "Local Business Directory",
      description: "A location-based business directory platform connecting local businesses with customers. Features include reviews, ratings, and business analytics.",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "Google Maps API"],
      category: "Web Platform",
      status: "Beta",
      liveUrl: "https://local-directory.com",
      githubUrl: null,
    },
    {
      title: "Personal Finance Tracker",
      description: "A secure personal finance tracking application with budget planning and expense categorization. Built with privacy and security as top priorities.",
      technologies: ["React Native", "Node.js", "MySQL", "JWT"],
      category: "Mobile App",
      status: "Live",
      liveUrl: "https://finance-tracker.app",
      githubUrl: "https://github.com/yourusername/finance-tracker",
    },
    {
      title: "Code Snippet Manager",
      description: "A developer tool for organizing and sharing code snippets with syntax highlighting and tagging system. Popular among development teams for knowledge sharing.",
      technologies: ["Angular", "Express.js", "PostgreSQL", "Prism.js"],
      category: "Developer Tool",
      status: "Live",
      liveUrl: "https://snippet-manager.dev",
      githubUrl: "https://github.com/yourusername/snippet-manager",
    }
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
          A collection of 6 products I've built over the past 2 years. 
          From simple tools to complex SaaS platforms, each project taught me something new.
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
                <Button size="sm" asChild className="group-hover:bg-blue-600 group-hover:hover:bg-blue-700 transition-colors duration-300">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live <ExternalLink className="ml-2 w-3 h-3" />
                  </a>
                </Button>
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
          <a href="mailto:hello@lsc.com">Get in Touch</a>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
