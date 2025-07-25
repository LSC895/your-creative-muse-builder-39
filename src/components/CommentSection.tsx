
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart, Reply } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: string;
  name: string;
  message: string;
  date: string;
  likes: number;
  replies?: Comment[];
}

interface CommentSectionProps {
  postId: string;
  postTitle: string;
}

const CommentSection = ({ postId, postTitle }: CommentSectionProps) => {
  const { toast } = useToast();
  const [comments] = useState<Comment[]>([
    {
      id: "1",
      name: "Sarah Developer",
      message: "Great insights! This really helped me understand the scaling challenges better.",
      date: "2 days ago",
      likes: 5,
      replies: [
        {
          id: "1-1",
          name: "LSC",
          message: "Thanks Sarah! Glad it was helpful. Feel free to reach out if you have specific questions.",
          date: "1 day ago",
          likes: 2
        }
      ]
    },
    {
      id: "2", 
      name: "Mike Entrepreneur",
      message: "I'm going through similar challenges with my startup. Would love to connect and share experiences.",
      date: "3 days ago",
      likes: 3
    }
  ]);

  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.name || !newComment.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name and message.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Comment added!",
      description: "Your comment will appear after review.",
    });

    setNewComment({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewComment(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <MessageCircle className="w-6 h-6 text-blue-600" />
        Comments ({comments.length})
      </h3>

      {/* Add Comment Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Join the Discussion</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="comment-name">Name *</Label>
                <Input
                  id="comment-name"
                  name="name"
                  value={newComment.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="comment-email">Email (optional)</Label>
                <Input
                  id="comment-email"
                  name="email"
                  type="email"
                  value={newComment.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="comment-message">Comment *</Label>
              <Textarea
                id="comment-message"
                name="message"
                value={newComment.message}
                onChange={handleInputChange}
                placeholder="Share your thoughts..."
                rows={4}
                required
              />
            </div>
            
            <Button type="submit">Post Comment</Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {comment.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-medium text-gray-900">{comment.name}</span>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">{comment.message}</p>
                  
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-600">
                      <Heart className="w-4 h-4 mr-1" />
                      {comment.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <Reply className="w-4 h-4 mr-1" />
                      Reply
                    </Button>
                  </div>

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4 pl-4 border-l-2 border-gray-100 space-y-4">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                            {reply.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-medium text-gray-900 text-sm">{reply.name}</span>
                              {reply.name === "LSC" && (
                                <Badge variant="secondary" className="text-xs">Author</Badge>
                              )}
                              <span className="text-xs text-gray-500">{reply.date}</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{reply.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
