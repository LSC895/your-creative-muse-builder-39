import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ExternalLink, Award, Users, Rocket } from "lucide-react";

const About = () => {
  const experiences = [
    {
      role: "Founding Engineer – AI/ML & Backend",
      company: "Freelance / Contract",
      period: "Mar 2025 – Present",
      location: "Remote",
      description: "Architected production-grade LLM applications using RAG, reducing manual data analysis time for clients. Deployed scalable AI APIs via FastAPI and Docker, ensuring 99.9% uptime for automated workflows.",
      achievements: ["RAG", "FastAPI", "Docker", "LLM"]
    },
    {
      role: "Technical Co-Founder",
      company: "Xtrapp",
      period: "Nov 2024 – Mar 2025",
      location: "Gurgaon, India",
      description: "Designed a scalable backend for creator monetization, integrating AI-driven content moderation and recommendation logic. Led technical strategy and infrastructure deployment on GCP, enabling rapid MVP iteration.",
      achievements: ["GCP", "AI/ML", "System Design", "MVP"]
    },
    {
      role: "Engineer Trainee",
      company: "Go Earner",
      period: "Jul 2023 – Sep 2023",
      location: "New Delhi, India",
      description: "Automated CI/CD pipelines using GitHub Actions, reducing deployment errors by 40%. Optimized cloud resource allocation, cutting infrastructure costs for ML services.",
      achievements: ["CI/CD", "GitHub Actions", "Cloud", "ML"]
    }
  ];

  const skillCategories = [
    {
      category: "AI/LLM",
      skills: ["GPT-4, Claude", "Fine-tuning", "RAG", "Prompt Engineering", "Vector DBs"]
    },
    {
      category: "Backend",
      skills: ["Python", "FastAPI", "WebSockets", "Asyncio", "REST APIs", "System Architecture & Scaling"]
    },
    {
      category: "MLOps",
      skills: ["Docker & Containerization", "CI/CD", "AWS, GCP", "Kubernetes", "Monitoring & Observability"]
    }
  ];

  const stats = [
    { label: "Startups Empowered", value: "10", icon: <Rocket className="w-5 h-5" /> },
    { label: "Teams Led", value: "5+", icon: <Users className="w-5 h-5" /> },
    { label: "Years in Tech", value: "2", icon: <Calendar className="w-5 h-5" /> },
    { label: "Products Launched", value: "2", icon: <Award className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
          <img 
            src="/lovable-uploads/cff4f4f9-614b-4eda-9fbb-c29657da9431.png" 
            alt="LSC Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I build products that are simple, beautiful, and functional. Currently working on AI/ML engineering,
          but open to collaborating with other innovators who are ready to change the world.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Gurgaon, IN</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Available for new opportunities</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="text-center group cursor-pointer transition-all duration-500 hover:bg-gradient-to-br hover:from-violet-50/50 hover:via-indigo-50/30 hover:to-purple-50/50 dark:hover:from-violet-950/20 dark:hover:via-indigo-950/10 dark:hover:to-purple-950/20 hover:shadow-xl hover:shadow-violet-500/10 dark:hover:shadow-violet-400/5 hover:border-violet-200 dark:hover:border-violet-800/50 hover:-translate-y-1"
          >
            <CardContent className="pt-6">
              <div className="flex justify-center text-violet-600 dark:text-violet-400 mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-foreground group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors duration-300">{stat.value}</div>
              <div className="text-sm text-muted-foreground group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group cursor-pointer transition-all duration-500 hover:bg-gradient-to-br hover:from-cyan-50/50 hover:via-sky-50/30 hover:to-blue-50/50 dark:hover:from-cyan-950/20 dark:hover:via-sky-950/10 dark:hover:to-blue-950/20 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/5 hover:border-cyan-200 dark:hover:border-cyan-800/50 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300">{exp.role}</CardTitle>
                    <CardDescription className="text-base font-medium text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="outline" className="w-fit group-hover:border-cyan-300 dark:group-hover:border-cyan-700 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300">{exp.period}</Badge>
                    <span className="text-xs text-muted-foreground">{exp.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{exp.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement) => (
                    <Badge key={achievement} variant="secondary" className="text-xs group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/30 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <Card key={cat.category} className="group cursor-pointer transition-all duration-500 hover:bg-gradient-to-br hover:from-rose-50/50 hover:via-pink-50/30 hover:to-red-50/50 dark:hover:from-rose-950/20 dark:hover:via-pink-950/10 dark:hover:to-red-950/20 hover:shadow-xl hover:shadow-rose-500/10 dark:hover:shadow-rose-400/5 hover:border-rose-200 dark:hover:border-rose-800/50 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-rose-700 dark:group-hover:text-rose-300 transition-colors duration-300">{cat.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs py-1 px-2 group-hover:border-rose-300 dark:group-hover:border-rose-700 group-hover:text-rose-700 dark:group-hover:text-rose-300 transition-colors duration-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Personal */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Beyond Work</h2>
        <Card className="group cursor-pointer transition-all duration-500 hover:bg-gradient-to-br hover:from-amber-50/50 hover:via-orange-50/30 hover:to-yellow-50/50 dark:hover:from-amber-950/20 dark:hover:via-orange-950/10 dark:hover:to-yellow-950/20 hover:shadow-xl hover:shadow-amber-500/10 dark:hover:shadow-amber-400/5 hover:border-amber-200 dark:hover:border-amber-800/50 hover:-translate-y-1">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              When I'm not building products or writing code, you'll find me exploring Twitter, 
              playing badminton, experimenting with new technologies, or connecting with aspiring entrepreneurs. I'm passionate 
              about the intersection of technology and human potential.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              I believe in building not just successful businesses, but sustainable and inclusive 
              work environments where everyone can thrive. I'm always happy to share experiences 
              and learn from others in the tech community.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <div className="text-center">
        <Card className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800/50 group cursor-pointer transition-all duration-500 hover:bg-gradient-to-br hover:from-blue-100/80 hover:to-indigo-100/80 dark:hover:from-blue-900/40 dark:hover:to-indigo-900/40 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/5 hover:border-blue-300 dark:hover:border-blue-700/50 hover:-translate-y-1">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">Let's Connect</h3>
            <p className="text-muted-foreground mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              Always open to interesting conversations about tech, entrepreneurship, or collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="group-hover:bg-blue-600 group-hover:hover:bg-blue-700 transition-colors duration-300">
                <a href="mailto:luckysinghchauhan415@gmail.com">Email Me</a>
              </Button>
              <Button variant="outline" asChild className="group-hover:border-blue-300 dark:group-hover:border-blue-700 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                <a href="https://www.linkedin.com/in/lucky-singh-chauhan-87329b255/" target="_blank" rel="noopener noreferrer">
                  LinkedIn <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
