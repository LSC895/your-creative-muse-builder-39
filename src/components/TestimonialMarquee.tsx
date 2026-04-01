import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Arjun Mehta",
    role: "CTO",
    company: "NeuralStack",
    quote: "Lucky built our entire RAG pipeline from scratch. Went from prototype to production in 3 weeks. Absolute beast.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "DataMesh AI",
    quote: "One of the sharpest AI engineers I've worked with. He doesn't just code — he thinks architecturally.",
    rating: 5,
  },
  {
    name: "Ravi Patel",
    role: "Product Lead",
    company: "ScaleAI Labs",
    quote: "Lucky delivered a production-grade LLM integration that cut our manual analysis time by 80%. Highly recommend.",
    rating: 5,
  },
  {
    name: "Emily Torres",
    role: "Engineering Manager",
    company: "Vertex Systems",
    quote: "Fast, reliable, and incredibly smart. Lucky understands both the AI and the engineering side deeply.",
    rating: 5,
  },
  {
    name: "Karan Singh",
    role: "Co-Founder",
    company: "BuildFast",
    quote: "We hired Lucky as a founding engineer and he exceeded every expectation. His work on our backend was phenomenal.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Head of AI",
    company: "TechNova",
    quote: "Lucky's cognitive architecture work is genuinely innovative. He thinks years ahead of the curve.",
    rating: 4,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex-shrink-0 w-80 p-5 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
    </div>
  );
};

const MarqueeRow = ({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) => {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={`${item.name}-${i}`} testimonial={item} />
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialMarquee = () => {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3);

  return (
    <div className="space-y-2">
      <MarqueeRow items={firstRow} />
      <MarqueeRow items={secondRow} reverse />
    </div>
  );
};

export default TestimonialMarquee;
