
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import GreetingAnimation from "../components/GreetingAnimation";

const Home = () => {
  const [showGreeting, setShowGreeting] = useState(true);

  const recentPosts = [
    {
      title: "Building SaaS in 2025? Read This Before You Launch (No BS)",
      excerpt: "Most SaaS startups don't fail because the idea was bad. They fail because the founder gave up too soon.",
      date: "Jul 2, 2024",
      category: "Blog",
      slug: "building-saas-2025",
      externalLink: "https://medium.com/@luckysinghchauhan415/building-saas-in-2025-read-this-before-you-launch-no-bs-e7bb481c8a50"
    },
    {
      title: "Can You Build AGI on a $10 Million Budget? A Realistic Look",
      excerpt: "Artificial General Intelligence (AGI) is often portrayed as a billion-dollar Bigshot — but what if the next leap in AI didn't need billions? What if a small, elite team with just $10 million could build it? Let's find out.",
      date: "Jun 20, 2025",
      category: "Ideas",
      slug: "agi-10-million-budget",
      externalLink: "https://medium.com/@luckysinghchauhan415/can-you-build-agi-on-a-10-million-budget-a-realistic-look-4f91d8bee133"
    },
    {
      title: "Y Combinator's 30 Tips to 10x Your AI Coding — The Ultimate Hack for Developers",
      excerpt: "Y Combinator just dropped the ultimate guide to AI coding, and trust me, if you're not paying attention to this, you're missing out. Whether you're a newbie or a seasoned dev",
      date: "May 26, 2025",
      category: "Learning",
      slug: "yc-ai-coding-tips",
      externalLink: "https://medium.com/@luckysinghchauhan415/y-combinators-30-tips-to-10x-your-ai-coding-the-ultimate-hack-for-developers-23be129bc2dc"
    }
  ];

  if (showGreeting) {
    return <GreetingAnimation onComplete={() => setShowGreeting(false)} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 text-center animate-fade-up">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight animate-scale-in px-4">
          Welcome to my digital space
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-up [animation-delay:200ms] px-4">
          Techie by training, Entrepreneur by passion
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-up [animation-delay:400ms] px-4">
          <Link 
            to="/blog"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
          >
            Read My Writing
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link 
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:border-border/60 hover:bg-accent/50 transition-all duration-300 font-medium hover:scale-105"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* Recent Content */}
      <section className="py-12 sm:py-16 animate-fade-up [animation-delay:600ms] px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Recent Writing
          </h2>
          <p className="text-muted-foreground">
            Latest thoughts and insights from my entrepreneurial journey
          </p>
        </div>
        
        <div className="space-y-8 sm:space-y-12">
          {recentPosts.map((post, index) => (
            <article 
              key={index} 
              className="border-b border-border/40 pb-8 sm:pb-12 last:border-b-0 group animate-fade-up hover:scale-[1.02] transition-all duration-300 rounded-xl p-6 -m-6 hover:shadow-2xl hover:shadow-blue-500/5 dark:hover:shadow-blue-400/5 hover:bg-gradient-to-br hover:from-blue-50/30 hover:via-indigo-50/20 hover:to-purple-50/30 dark:hover:from-blue-950/20 dark:hover:via-indigo-950/10 dark:hover:to-purple-950/20 hover:border-blue-100/50 dark:hover:border-blue-800/30"
              style={{ animationDelay: `${800 + index * 200}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-3">
                <span className="px-3 py-1 bg-accent/50 rounded-full font-medium transition-colors duration-300 group-hover:bg-blue-100/80 dark:group-hover:bg-blue-900/30 group-hover:text-blue-700 dark:group-hover:text-blue-300 w-fit">
                  {post.category}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{post.date}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                <a href={post.externalLink} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                {post.excerpt}
              </p>
              <a 
                href={post.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-foreground/80 transition-all duration-300 inline-flex items-center group"
              >
                Read more
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter/Connect Section */}
      <section className="py-12 sm:py-16 text-center animate-fade-up [animation-delay:1400ms] px-4">
        <div className="bg-accent/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm border border-border/20 hover:bg-accent/40 transition-all duration-500">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto">
            Join me on this journey. Share your thoughts, ask questions, 
            or just say hello in the guestbook.
          </p>
          <Link 
            to="/guestbook"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg"
          >
            Sign the Guestbook
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
