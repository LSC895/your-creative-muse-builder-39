import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

type Mode = "hiring" | "collab" | "just curious" | null;

interface Message {
  role: "lucky" | "visitor";
  text: string;
}

const modeResponses: Record<string, Message[]> = {
  hiring: [
    { role: "lucky", text: "Nice — looking for an AI engineer? You're in the right place." },
    { role: "lucky", text: "I specialize in RAG pipelines, LLM integrations, FastAPI backends, and taking AI from prototype to production. I've helped startups go from zero to funded." },
    { role: "lucky", text: "Drop me a mail at luckysinghchauhan415@gmail.com or DM on X @Lsc8954. Let's talk." },
  ],
  collab: [
    { role: "lucky", text: "Always down to build something cool together." },
    { role: "lucky", text: "I'm currently working on cognitive architectures (TATAV), speech tools (Vaani), and self-learning AI (CHETNA). If any of that excites you — let's jam." },
    { role: "lucky", text: "Hit me up on GitHub github.com/LSC895 or DM me on X. Let's make something unforgettable." },
  ],
  "just curious": [
    { role: "lucky", text: "Welcome, explorer. 👀" },
    { role: "lucky", text: "I'm Lucky — an AI engineer who builds things that think. From cognitive architectures to production LLM apps, I like solving problems that matter." },
    { role: "lucky", text: "Feel free to scroll around, check out my projects, or ask me anything here. I don't bite... usually. 😄" },
  ],
};

const followUpResponses: string[] = [
  "That's a great question! Feel free to reach out directly — I'd love to chat more about it.",
  "Interesting! I'm always happy to dive deeper. Email me or DM on X for a real convo.",
  "I appreciate the curiosity! Check out my projects section above — might answer some of your questions.",
  "Good stuff. If you want to take this further, my inbox is always open: luckysinghchauhan415@gmail.com",
  "Ha, love the energy. Scroll through my work above and let me know what catches your eye!",
];

const AskLucky = () => {
  const [mode, setMode] = useState<Mode>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: "lucky", text: "hey. before we talk — tell me why you're here." },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [revealedCount, setRevealedCount] = useState(1);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleModeSelect = async (selected: Mode) => {
    if (!selected) return;
    setMode(selected);

    // Add visitor's choice as a message
    const visitorMsg: Message = { role: "visitor", text: selected };
    setMessages((prev) => [...prev, visitorMsg]);

    // Simulate typing and reveal responses one by one
    const responses = modeResponses[selected] || [];
    for (let i = 0; i < responses.length; i++) {
      setIsTyping(true);
      await new Promise((r) => setTimeout(r, 800 + Math.random() * 600));
      setIsTyping(false);
      setMessages((prev) => [...prev, responses[i]]);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    const userMsg: Message = { role: "visitor", text: inputValue.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setIsTyping(true);
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 800));
    setIsTyping(false);

    const response = followUpResponses[Math.floor(Math.random() * followUpResponses.length)];
    setMessages((prev) => [...prev, { role: "lucky", text: response }]);
  };

  return (
    <motion.div
      className="rounded-2xl border border-border/40 overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
      whileHover={{ borderColor: "rgba(29, 158, 117, 0.3)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-neutral-800">
        <div className="relative">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{ backgroundColor: "#1D9E75" }}
          >
            L
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#0a0a0a] animate-[blink_2s_ease-in-out_infinite]" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-white font-mono">ASK L.U.C.K.Y</h3>
          <p className="text-xs text-neutral-500 font-mono">
            Linguistic Unit for Consulting & Knowledge for You
          </p>
        </div>
        {mode && (
          <span className="px-2.5 py-1 rounded-full text-xs font-mono border border-[#1D9E75]/40 text-[#1D9E75] bg-[#1D9E75]/10">
            {mode}
          </span>
        )}
      </div>

      {/* Chat Content */}
      <div className="px-6 py-6 space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-800">
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
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-1"
                  style={{ backgroundColor: "#1D9E75" }}
                >
                  L
                </div>
              )}
              <div
                className={`px-4 py-3 rounded-2xl max-w-sm text-sm font-mono ${
                  msg.role === "visitor"
                    ? "bg-[#1D9E75]/20 border border-[#1D9E75]/40 text-[#1D9E75] rounded-tr-sm"
                    : "bg-neutral-800/80 border border-neutral-700/50 text-neutral-300 rounded-tl-sm"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-1"
              style={{ backgroundColor: "#1D9E75" }}
            >
              L
            </div>
            <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-neutral-800/80 border border-neutral-700/50">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neutral-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-neutral-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-neutral-500 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Mode selection buttons - only show if no mode selected */}
        {!mode && (
          <div className="space-y-3 pl-10">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Who are you?
            </p>
            <div className="flex flex-wrap gap-3">
              {(["hiring", "collab", "just curious"] as const).map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleModeSelect(option)}
                  className="px-5 py-2.5 rounded-xl border border-neutral-700 text-neutral-400 font-mono text-sm hover:border-[#1D9E75] hover:text-[#1D9E75] transition-all duration-300 bg-transparent cursor-pointer"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input area - only show after mode is selected */}
      {mode && (
        <div className="px-6 py-4 border-t border-neutral-800">
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
              placeholder="Type a message..."
              className="flex-1 bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-neutral-300 font-mono placeholder:text-neutral-600 focus:outline-none focus:border-[#1D9E75]/50 transition-colors"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-[#1D9E75] flex items-center justify-center text-white hover:bg-[#1D9E75]/80 transition-colors cursor-pointer"
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
