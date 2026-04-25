import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot } from "lucide-react";

type Mode = "hiring" | "collab" | "just curious" | null;

interface Message {
  role: "lucky" | "visitor";
  text: string;
}

const LUCKY_BIO = {
  name: "Lucky Singh Chauhan",
  roles: ["AI Solutions Consultant", "Full Stack AI Developer", "Technical Co-Founder"],
  email: "luckysinghchauhan415@gmail.com",
  github: "https://github.com/LSC895",
  twitter: "https://x.com/Lsc8954",
  linkedin: "https://www.linkedin.com/in/lucky-singh-chauhan-87329b255/",
  medium: "https://medium.com/@luckysinghchauhan415",
  skills: ["RAG pipelines", "LLM integrations", "FastAPI", "Docker", "Python", "LangChain", "ChromaDB", "Cognitive Architectures"],
  projects: {
    TATAV: "Cognitive Architecture Engine — the missing piece between LLMs and truly persistent digital beings",
    Vaani: "Speech therapy tool for individuals with serious speech disorders",
    Rezoome: "NLP-based resume analysis and generation system, 100+ resumes generated",
    CHETNA: "Self-learning AI architecture that updates agent personality from lived experience",
  },
};

const modeGreetings: Record<string, Message[]> = {
  hiring: [
    { role: "lucky", text: "Nice — looking for an AI engineer? You're in the right place. 💼" },
    { role: "lucky", text: `I specialize in ${LUCKY_BIO.skills.slice(0, 4).join(", ")}, and taking AI from prototype to production. I've helped startups go from zero to funded.` },
    { role: "lucky", text: "Ask me anything — about my experience, projects, tech stack, or how I can help your team. I'm an open book." },
  ],
  collab: [
    { role: "lucky", text: "Always down to build something cool together. 🤝" },
    { role: "lucky", text: "I'm currently working on TATAV (cognitive architectures), Vaani (speech tools), and CHETNA (self-learning AI). If any of that excites you — let's jam." },
    { role: "lucky", text: "Ask me about my projects, my stack, or pitch me an idea. Let's see if we click." },
  ],
  "just curious": [
    { role: "lucky", text: "Welcome, explorer. 👀" },
    { role: "lucky", text: "I'm Lucky — an AI engineer who builds things that think. From cognitive architectures to production LLM apps, I like solving problems that matter." },
    { role: "lucky", text: "Go ahead, ask me anything. I don't bite... usually. 😄" },
  ],
};

// Pattern-based response system
const getSmartResponse = (input: string, mode: Mode): string => {
  const lower = input.toLowerCase();

  // Project questions
  if (lower.includes("tatav") || lower.includes("cognitive")) {
    return "TATAV is my passion project — a Cognitive Architecture Engine. Think of it as the missing layer between LLMs and truly persistent digital beings. It gives AI memory, personality, and reasoning that persists across sessions. Built with Python, LangChain, ChromaDB, and FastAPI.";
  }
  if (lower.includes("vaani") || lower.includes("speech")) {
    return "Vaani is a speech therapy tool I built for people with serious speech disorders. It uses Whisper for STT and provides real-time feedback to help users improve. It's deeply personal to me — tech should help people who need it most.";
  }
  if (lower.includes("rezoome") || lower.includes("resume")) {
    return "Rezoome is an NLP-based resume optimizer. Feed it a job description and your resume, and it generates an ATS-optimized version. Already generated 100+ resumes with automated content optimization.";
  }
  if (lower.includes("chetna") || lower.includes("self-learning") || lower.includes("self learning")) {
    return "CHETNA is a self-learning AI architecture. It updates its personality and behavior from lived experience — no retraining, no human intervention. Think of it as an AI that genuinely grows over time. Built with Python, NumPy, SQLite, and ChromaDB.";
  }
  if (lower.includes("project")) {
    return `I'm working on 4 key projects right now:\n\n🧠 TATAV — Cognitive Architecture Engine\n🗣️ Vaani — Speech therapy tool\n📄 Rezoome — AI resume optimizer\n🤖 CHETNA — Self-learning AI\n\nAsk me about any of them!`;
  }

  // Skills & tech
  if (lower.includes("stack") || lower.includes("tech") || lower.includes("skill") || lower.includes("tool")) {
    return `My core stack: ${LUCKY_BIO.skills.join(", ")}. I also work with PyTorch, HuggingFace, AWS, GCP, Kubernetes, PostgreSQL, and Redis. I'm a full-stack AI developer — I build everything from the model to the API to the deployment.`;
  }
  if (lower.includes("rag") || lower.includes("retrieval")) {
    return "RAG (Retrieval-Augmented Generation) is one of my specialties. I build production pipelines using LangChain + ChromaDB/Pinecone for retrieval, with custom chunking strategies and re-ranking. Happy to dive deeper if you want.";
  }
  if (lower.includes("llm") || lower.includes("language model")) {
    return "I work extensively with LLMs — GPT-4, Claude, open-source models via HuggingFace. I handle everything from prompt engineering to fine-tuning to building production APIs around them. What specifically interests you?";
  }

  // Contact & hiring
  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("hire") || lower.includes("available")) {
    return `You can reach me at:\n\n📧 ${LUCKY_BIO.email}\n🐦 ${LUCKY_BIO.twitter}\n💼 ${LUCKY_BIO.linkedin}\n🐙 ${LUCKY_BIO.github}\n📝 ${LUCKY_BIO.medium}\n\nI'm currently available for new projects and open to full-time roles!`;
  }
  if (lower.includes("rate") || lower.includes("cost") || lower.includes("price") || lower.includes("charge")) {
    return "My rates depend on the project scope and complexity. Best to discuss specifics — drop me an email at luckysinghchauhan415@gmail.com and we can figure out what works.";
  }

  // Experience
  if (lower.includes("experience") || lower.includes("background") || lower.includes("work history")) {
    return "I'm a Founding Engineer focused on AI/ML & Backend. I've architected production-grade LLM applications using RAG, deployed scalable AI APIs via FastAPI and Docker with 99.9% uptime, and co-founded Xtrapp where I designed scalable backends. Currently building my own AI ventures.";
  }

  // Personal
  if (lower.includes("who are you") || lower.includes("about you") || lower.includes("tell me about")) {
    return "I'm Lucky Singh Chauhan — an AI Solutions Consultant, Full Stack AI Developer, and Technical Co-Founder. I build AI that works in the real world. From cognitive architectures to production LLM apps, I focus on solving problems that actually matter. Currently building my own AI ventures.";
  }
  if (lower.includes("hello") || lower.includes("hi ") || lower.includes("hey") || lower === "hi") {
    return "Hey! 👋 What would you like to know? I can talk about my projects, tech stack, experience, or anything else that's on your mind.";
  }

  // Mode-specific fallbacks
  if (mode === "hiring") {
    const responses = [
      "Great question! I'd love to discuss that in more detail. My experience spans RAG pipelines, LLM integrations, and full-stack AI development. What specific aspect interests you?",
      "I bring a unique mix of AI engineering and product thinking. Want to know about a specific project or skill?",
      `Interesting! Feel free to reach out directly at ${LUCKY_BIO.email} for a deeper conversation. Or ask me something specific about my work!`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  if (mode === "collab") {
    const responses = [
      "I love building at the intersection of AI and real-world problems. What kind of project do you have in mind?",
      "Sounds interesting! I'm always looking for ambitious collaborators. Tell me more about your idea!",
      `Let's connect and brainstorm — DM me on X (${LUCKY_BIO.twitter}) or email me. I'm always down for exciting projects.`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Generic fallbacks
  const generic = [
    "That's interesting! Feel free to ask me about my projects (TATAV, Vaani, Rezoome, CHETNA), my tech stack, or my experience. I'm happy to chat about anything.",
    "Good question! I'd recommend checking out my projects section above — but I'm also happy to explain anything here. What catches your eye?",
    `Love the curiosity! Ask me about anything — AI, my projects, career advice, or how to reach me. I'm an open book.`,
    "Ha, I like your energy! 😄 Try asking me about my tech stack, a specific project, or how I can help with your next AI venture.",
  ];
  return generic[Math.floor(Math.random() * generic.length)];
};

const AskLucky = () => {
  const [mode, setMode] = useState<Mode>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: "lucky", text: "hey. before we talk — tell me why you're here." },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 1 || isTyping) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleModeSelect = async (selected: Mode) => {
    if (!selected) return;
    setMode(selected);
    const visitorMsg: Message = { role: "visitor", text: selected };
    setMessages((prev) => [...prev, visitorMsg]);

    const responses = modeGreetings[selected] || [];
    for (let i = 0; i < responses.length; i++) {
      setIsTyping(true);
      await new Promise((r) => setTimeout(r, 700 + Math.random() * 500));
      setIsTyping(false);
      setMessages((prev) => [...prev, responses[i]]);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    const userMsg: Message = { role: "visitor", text: inputValue.trim() };
    setMessages((prev) => [...prev, userMsg]);
    const query = inputValue.trim();
    setInputValue("");

    setIsTyping(true);
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 700));
    setIsTyping(false);

    const response = getSmartResponse(query, mode);
    setMessages((prev) => [...prev, { role: "lucky", text: response }]);
  };

  return (
    <motion.div
      className="rounded-2xl border border-border/40 overflow-hidden bg-card/80 backdrop-blur-sm"
      whileHover={{ borderColor: "rgba(29, 158, 117, 0.3)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border/40">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-foreground font-mono">ASK L.U.C.K.Y</h3>
          <p className="text-xs text-muted-foreground font-mono">
            Linguistic Unit for Consulting & Knowledge for You
          </p>
        </div>
        {mode && (
          <span className="px-2.5 py-1 rounded-full text-xs font-mono border border-primary/40 text-primary bg-primary/10">
            {mode}
          </span>
        )}
      </div>

      {/* Chat Content */}
      <div className="px-6 py-6 space-y-4 max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-muted">
        <AnimatePresence mode="popLayout">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 ${msg.role === "visitor" ? "justify-end" : ""}`}
            >
              {msg.role === "lucky" && (
                <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary shrink-0 mt-1">
                  L
                </div>
              )}
              <div
                className={`px-4 py-3 rounded-2xl max-w-sm text-sm font-mono whitespace-pre-line ${
                  msg.role === "visitor"
                    ? "bg-primary/20 border border-primary/40 text-primary rounded-tr-sm"
                    : "bg-accent/80 border border-border/50 text-muted-foreground rounded-tl-sm"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary shrink-0 mt-1">
              L
            </div>
            <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-accent/80 border border-border/50">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Mode selection */}
        {!mode && (
          <div className="space-y-3 pl-10">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Who are you?</p>
            <div className="flex flex-wrap gap-3">
              {(["hiring", "collab", "just curious"] as const).map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleModeSelect(option)}
                  className="px-5 py-2.5 rounded-xl border border-border text-muted-foreground font-mono text-sm hover:border-primary hover:text-primary transition-all duration-300 bg-transparent cursor-pointer"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      {mode && (
        <div className="px-6 py-4 border-t border-border/40">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-3"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-accent/50 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground font-mono placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default AskLucky;
