
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Link2, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  title: string;
  url?: string;
  description?: string;
}

const SocialShare = ({ title, url = window.location.href, description = "" }: SocialShareProps) => {
  const { toast } = useToast();

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy link to clipboard.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 mr-2">Share:</span>
      
      <Button
        variant="outline"
        size="sm"
        asChild
      >
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="w-4 h-4" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        asChild
      >
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-4 h-4" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        asChild
      >
        <a href={shareLinks.email}>
          <Mail className="w-4 h-4" />
        </a>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
      >
        <Link2 className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SocialShare;
