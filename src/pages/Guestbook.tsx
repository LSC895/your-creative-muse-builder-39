
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Heart, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Guestbook = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });
  const [showAllMessages, setShowAllMessages] = useState(false);
  
  // Mock existing messages for demo - latest entries first
  const messages = [
    {
      name: "Naman Garg",
      message: "Lakshay simplified our MVP and roadmap, optimizing user flow and data processing, delivering a scalable product. Highly recommended!",
      date: "January 1, 2025",
      website: ""
    },
    {
      name: "Nidhi", 
      message: "Love reading about your entrepreneurial journey! And thanks for a well organized flow for Product greatly improving our development process. Thank you!",
      date: "December 14, 2024",
      website: ""
    },
    {
      name: "Mike Thompson",
      message: "Great work on the AI Analytics Dashboard! Would love to connect and discuss potential collaboration opportunities.",
      date: "December 15, 2024", 
      website: "https://mikethompson.co"
    },
    {
      name: "Alex Rodriguez", 
      message: "Your post about bootstrap vs VC funding really resonated with me. Going through the same decision process right now!",
      date: "December 18, 2024",
      website: ""
    },
    {
      name: "Sarah Chen",
      message: "Love reading about your entrepreneurial journey! Your insights on remote team building have been super helpful for our startup.",
      date: "December 20, 2024",
      website: "https://sarahchen.dev"
    },
    {
      name: "Jessica Wu",
      message: "Thank you for sharing your experiences so openly. As a first-time founder, your content has been incredibly valuable!",
      date: "December 12, 2024",
      website: ""
    },
    {
      name: "David Kim",
      message: "Your approach to product development is inspiring. Would love to hear more about your design process!",
      date: "December 10, 2024",
      website: "https://davidkim.dev"
    },
    {
      name: "Maria Garcia",
      message: "The startup toolkit you built is amazing! It's helping our team stay organized and focused.",
      date: "December 8, 2024",
      website: ""
    }
  ];

  const displayedMessages = showAllMessages ? messages : messages.slice(0, 4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name and message.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would submit to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for signing the guestbook. Your message will appear after review.",
    });

    setFormData({ name: "", email: "", website: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Guestbook</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Leave a message, share your thoughts, or just say hello! 
          I love connecting with fellow entrepreneurs, developers, and curious minds.
        </p>
      </div>

      {/* Sign Guestbook Form */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            Sign the Guestbook
          </CardTitle>
          <CardDescription>
            Share your thoughts, introduce yourself, or let me know how we can connect!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email (optional)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="website">Website/Social (optional)</Label>
              <Input
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://yoursite.com or @yourhandle"
              />
            </div>
            
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Leave your message here..."
                rows={4}
                required
              />
            </div>
            
            <Button type="submit" className="w-full md:w-auto">
              Sign Guestbook
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Previous Messages */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-500" />
          Messages ({messages.length})
        </h2>
        
        <div className="space-y-6">
          {displayedMessages.map((message, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {message.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle className="text-base">{message.name}</CardTitle>
                      {message.website && (
                        <a 
                          href={message.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {message.website.replace('https://', '')}
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {message.date}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{message.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show All/Less Toggle */}
        {messages.length > 4 && (
          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              onClick={() => setShowAllMessages(!showAllMessages)}
              className="flex items-center gap-2"
            >
              {showAllMessages ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  See all guestbook signs ({messages.length - 4} more)
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>

      <div className="text-center mt-12 p-6 bg-accent/30 rounded-lg">
        <p className="text-muted-foreground mb-2">
          Want to have a longer conversation?
        </p>
        <Button asChild>
          <a href="mailto:hello@lsc.com">Send me an email</a>
        </Button>
      </div>
    </div>
  );
};

export default Guestbook;
