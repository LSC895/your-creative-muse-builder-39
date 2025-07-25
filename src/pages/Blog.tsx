
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Build an MVP More Efficiently in 2025 (No BullSh!t)",
      excerpt: "Most startups fail not because their idea was bad, but because they built too much, too early.",
      date: "February 7, 2025",
      readTime: "5 min read",
      tags: ["AI", "SaaS", "Startup"],
      mediumLink: "https://medium.com/@luckysinghchauhan415/how-to-build-mvp-2025"
    },
    {
      title: "How AI is Changing Startups in 2025 (And What Founders Must Do to Stay Ahead)",
      excerpt: "Artificial Intelligence (AI) is no longer a futuristic idea — it's reshaping business today.",
      date: "February 15, 2025", 
      readTime: "6 min read",
      tags: ["AI", "Startup", "Learning"],
      mediumLink: "https://medium.com/@luckysinghchauhan415/ai-changing-startups-2025"
    },
    {
      title: "Personality Can Open Doors, but Character Keeps Them Open: Lessons for Entrepreneurs",
      excerpt: "You've just pitched your startup idea to a room full of investors. With confidence radiating from your every word, you deliver a pitch so compelling that it silences the room.",
      date: "January 5, 2025",
      readTime: "5 min read", 
      tags: ["Career", "Growth", "Life Lesson"],
      mediumLink: "https://medium.com/@luckysinghchauhan415/personality-vs-character-entrepreneurs"
    },
    {
      title: "Startup Spotlight: Emerging Ideas Reshaping the World",
      excerpt: "My new blog series on Medium called 'Startup Spotlight', where we'll dive into trending startups, their secrets, and what makes them tick. Think of it as a nerdy adventure into the world of innovation — with a side of fun and curiosity.",
      date: "November 26, 2024",
      readTime: "4 min read",
      tags: ["Startup", "Business", "Learnings"],
      mediumLink: "https://medium.com/@luckysinghchauhan415/startup-spotlight-series"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-foreground mb-6">Writing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Insights from my 2-year journey building products and navigating the tech industry. 
          Sharing what I learn along the way.
        </p>
      </div>

      <div className="space-y-16">
        {blogPosts.map((post, index) => (
          <article 
            key={index} 
            className="border-b border-border/40 pb-16 last:border-b-0 group rounded-xl p-6 -m-6 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 dark:hover:shadow-blue-400/5 hover:bg-gradient-to-br hover:from-blue-50/30 hover:via-indigo-50/20 hover:to-purple-50/30 dark:hover:from-blue-950/20 dark:hover:via-indigo-950/10 dark:hover:to-purple-950/20 hover:border-blue-100/50 dark:hover:border-blue-800/30"
          >
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors leading-tight">
              <a href={post.mediumLink} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground hover:bg-muted/80 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <Button variant="outline" size="sm" asChild className="group-hover:border-blue-300 dark:group-hover:border-blue-700 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
              <a href={post.mediumLink} target="_blank" rel="noopener noreferrer">
                Read on Medium <ExternalLink className="ml-2 w-3 h-3" />
              </a>
            </Button>
          </article>
        ))}
      </div>

      <div className="text-center mt-16 pt-8 border-t border-border/40">
        <p className="text-muted-foreground mb-6">Want to see more of my writing?</p>
        <Button asChild>
          <a href="https://medium.com/@luckysinghchauhan415" target="_blank" rel="noopener noreferrer">
            Visit My Medium Profile <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Blog;
