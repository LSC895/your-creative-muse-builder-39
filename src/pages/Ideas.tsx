
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Zap, Brain, Mic } from "lucide-react";

const Ideas = () => {
  const ideas = [
    {
      title: "TATAV – Cognitive Architecture Engine",
      description: "The missing piece between LLMs and truly persistent digital beings. Building cognitive memory layers that allow AI agents to maintain context, personality, and evolving knowledge across sessions.",
      category: "AI Research",
      stage: "In Development",
      impact: "High",
      icon: <Brain className="w-5 h-5" />,
      tags: ["LLM", "Cognitive Architecture", "Memory Systems"],
      thoughts: "Current LLMs lack true persistence. TATAV aims to bridge the gap between stateless models and genuinely evolving digital beings."
    },
    {
      title: "CHETNA – Self-Learning AI Architecture",
      description: "A behavioural learning system that updates agent personality from lived experience — no retraining, no human intervention. Agents that grow and adapt organically.",
      category: "AI Research",
      stage: "In Development",
      impact: "High",
      icon: <Zap className="w-5 h-5" />,
      tags: ["Self-Learning", "Agent Personality", "Behavioral AI"],
      thoughts: "What if AI agents could learn from their experiences the way humans do — without expensive retraining cycles?"
    },
    {
      title: "Vaani – Speek more! Stress less!",
      description: "A tool for individuals with serious speech disorders to help them improve it. Using speech-to-text and AI-driven feedback loops to make speech therapy more accessible.",
      category: "Health Tech",
      stage: "In Development",
      impact: "High",
      icon: <Mic className="w-5 h-5" />,
      tags: ["Speech Therapy", "Accessibility", "STT"],
      thoughts: "Speech disorders affect millions. Technology can make therapy more accessible, personalized, and effective."
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Concept": return "text-muted-foreground bg-muted dark:bg-gray-800 dark:text-gray-300";
      case "Research": return "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950";
      case "In Development": return "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-950";
      case "Prototype": return "text-yellow-600 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-950";
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
          Raw thoughts and concepts that are shaping the future of AI. 
          From cognitive architectures to accessible health tech.
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
