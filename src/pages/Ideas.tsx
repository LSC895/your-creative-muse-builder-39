
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp, Users, Zap } from "lucide-react";

const Ideas = () => {
  const ideas = [
    {
      title: "AI-Powered Code Review Assistant",
      description: "An intelligent code review tool that not only catches bugs but also suggests performance optimizations and security improvements using machine learning.",
      category: "Developer Tools",
      stage: "Concept",
      impact: "High",
      icon: <Zap className="w-5 h-5" />,
      tags: ["AI", "DevTools", "Machine Learning"],
      thoughts: "Could integrate with GitHub/GitLab and provide real-time feedback during development."
    },
    {
      title: "Micro-SaaS Marketplace",
      description: "A platform where developers can sell small, focused SaaS tools. Think of it as an app store for business software with revenue sharing.",
      category: "Marketplace",
      stage: "Research",
      impact: "Medium",
      icon: <Users className="w-5 h-5" />,
      tags: ["Marketplace", "SaaS", "Revenue Model"],
      thoughts: "Could help indie developers monetize niche tools while solving specific business problems."
    },
    {
      title: "Climate Impact Calculator for Startups",
      description: "A tool that helps startups measure and track their environmental impact, with suggestions for offsetting and reducing carbon footprint.",
      category: "Sustainability",
      stage: "Validation",
      impact: "High",
      icon: <TrendingUp className="w-5 h-5" />,
      tags: ["Climate", "ESG", "Analytics"],
      thoughts: "Growing demand for ESG reporting. Could partner with carbon offset providers."
    },
    {
      title: "Remote Team Culture Builder",
      description: "A platform that helps remote teams build stronger culture through virtual activities, async check-ins, and team bonding exercises.",
      category: "HR Tech",
      stage: "Prototype",
      impact: "Medium",
      icon: <Users className="w-5 h-5" />,
      tags: ["Remote Work", "Culture", "Team Building"],
      thoughts: "Post-pandemic shift to hybrid work creates opportunity for better remote culture tools."
    },
    {
      title: "No-Code API Builder",
      description: "Visual tool for creating REST APIs without writing code. Drag-and-drop interface for database operations, authentication, and business logic.",
      category: "No-Code",
      stage: "Concept",
      impact: "High",
      icon: <Lightbulb className="w-5 h-5" />,
      tags: ["No-Code", "APIs", "Backend"],
      thoughts: "Could democratize backend development for frontend developers and designers."
    },
    {
      title: "Startup Mental Health Platform",
      description: "Mental health support specifically designed for entrepreneurs and startup teams, with peer support groups and founder-focused therapy.",
      category: "Health Tech",
      stage: "Research",
      impact: "High", 
      icon: <Users className="w-5 h-5" />,
      tags: ["Mental Health", "Startups", "Community"],
      thoughts: "Founder burnout is a real problem. Specialized support could make a big difference."
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Concept": return "text-muted-foreground bg-muted dark:bg-gray-800 dark:text-gray-300";
      case "Research": return "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950";
      case "Validation": return "text-yellow-600 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-950";
      case "Prototype": return "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-950";
      default: return "text-muted-foreground bg-muted dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-950";
      case "Medium": return "text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-950";
      case "Low": return "text-yellow-600 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-950";
      default: return "text-muted-foreground bg-muted dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-up">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-foreground mb-6 tracking-tight">Ideas</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Raw thoughts and concepts that could shape the future of technology. 
          From early-stage ideas to validated concepts ready for development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {ideas.map((idea, index) => (
          <Card 
            key={index} 
            className="group relative transition-all duration-500 border-border/40 animate-fade-up cursor-pointer hover:bg-gradient-to-br hover:from-emerald-50/50 hover:via-teal-50/30 hover:to-cyan-50/50 dark:hover:from-emerald-950/20 dark:hover:via-teal-950/10 dark:hover:to-cyan-950/20 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/5 hover:border-emerald-200 dark:hover:border-emerald-800/50 hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 bg-accent/50 rounded-lg text-foreground group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-all duration-300">
                  {idea.icon}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge className={`text-xs font-medium border-0 transition-colors duration-300 ${getStageColor(idea.stage)}`}>
                    {idea.stage}
                  </Badge>
                  <Badge className={`text-xs font-medium border-0 transition-colors duration-300 ${getImpactColor(idea.impact)}`}>
                    {idea.impact}
                  </Badge>
                </div>
              </div>
              <CardTitle className="text-xl font-semibold leading-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
                {idea.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                {idea.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 relative z-10">
              <div className="mb-4">
                <Badge variant="outline" className="text-xs mb-3 border-border/40 group-hover:border-emerald-200 dark:group-hover:border-emerald-800 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
                  {idea.category}
                </Badge>
                <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-muted text-muted-foreground group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/40 group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-colors duration-300">
                <p className="text-xs font-medium text-foreground mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">Initial Thoughts</p>
                <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {idea.thoughts}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center p-8 bg-accent/30 rounded-2xl border border-border/20 backdrop-blur-sm hover:bg-accent/40 transition-all duration-500 animate-fade-up" style={{ animationDelay: '600ms' }}>
        <Lightbulb className="w-12 h-12 mx-auto text-foreground mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-3">Have an idea or feedback?</h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          I'd love to hear your thoughts on these ideas or discuss potential collaborations.
        </p>
        <a 
          href="mailto:luckysinghchauhan415@gmail.com" 
          className="inline-flex items-center text-foreground hover:text-foreground/80 font-medium transition-colors duration-300"
        >
          Let's brainstorm together →
        </a>
      </div>
    </div>
  );
};

export default Ideas;
