import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Heart, Share2, TrendingUp, Users, BookOpen, Star, ThumbsUp, Eye } from "lucide-react";
const communityPosts = [{
  id: 1,
  author: "CryptoAnalyst",
  avatar: "/placeholder.svg",
  timeAgo: "2h ago",
  content: "Just spotted a bullish divergence on $ETH daily chart. Could be gearing up for a breakout above $4000. What do you think?",
  likes: 127,
  comments: 23,
  shares: 8,
  tag: "Technical Analysis",
  verified: true
}, {
  id: 2,
  author: "DeFiExplorer",
  avatar: "/placeholder.svg",
  timeAgo: "4h ago",
  content: "New yield farming opportunity on Polygon with 250% APY. Did my due diligence - contract looks solid. DYOR as always!",
  likes: 89,
  comments: 31,
  shares: 15,
  tag: "DeFi",
  verified: false
}, {
  id: 3,
  author: "BlockchainNewbie",
  avatar: "/placeholder.svg",
  timeAgo: "6h ago",
  content: "Thanks to everyone who helped me understand dollar-cost averaging! Started my first automated investment plan today 🚀",
  likes: 203,
  comments: 45,
  shares: 12,
  tag: "Beginner",
  verified: false
}];
const educationalContent = [{
  title: "Cryptocurrency Basics",
  description: "Learn the fundamentals of blockchain and digital currencies",
  duration: "15 min read",
  difficulty: "Beginner",
  students: 25600
}, {
  title: "Technical Analysis Guide",
  description: "Master chart patterns and trading indicators",
  duration: "45 min read",
  difficulty: "Intermediate",
  students: 18200
}, {
  title: "Risk Management Strategies",
  description: "Protect your portfolio with proven risk management techniques",
  duration: "30 min read",
  difficulty: "Advanced",
  students: 12800
}];
export const Community = () => {
  const navigate = useNavigate();
  return <section className="py-24 bg-secondary/20" id="community">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            👥 Growing Community
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Learn & Connect with
            <span className="text-primary"> Traders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our thriving community of traders, share insights, and accelerate your 
            learning with educational resources and expert discussions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Community Feed</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Latest</Button>
                <Button variant="ghost" size="sm">Popular</Button>
                <Button variant="ghost" size="sm">Following</Button>
              </div>
            </div>

            {communityPosts.map(post => <Card key={post.id} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={post.avatar} alt={post.author} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {post.author.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-foreground">{post.author}</span>
                      {post.verified && <Star className="h-4 w-4 text-primary" />}
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{post.timeAgo}</span>
                      <Badge variant="outline" className="text-xs ml-auto">
                        {post.tag}
                      </Badge>
                    </div>
                    
                    <p className="text-foreground mb-4 leading-relaxed">
                      {post.content}
                    </p>
                    
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Share2 className="h-4 w-4" />
                        <span className="text-sm">{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>)}

            <Card className="p-6 bg-gradient-hero border-border/50 text-center">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Join the Conversation</h4>
              <p className="text-muted-foreground mb-4">
                Share your insights, ask questions, and connect with fellow traders.
              </p>
              <Button variant="hero">Create Post</Button>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Community Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Members</span>
                  <span className="font-semibold text-foreground">127,453</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Today</span>
                  <span className="font-semibold text-success">8,921</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Posts Today</span>
                  <span className="font-semibold text-foreground">234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expert Traders</span>
                  <span className="font-semibold text-warning">2,180</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                Educational Resources
              </h3>
              <div className="space-y-4">
                {educationalContent.map((content, index) => <div key={index} className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-medium text-foreground mb-1">{content.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{content.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {content.difficulty}
                        </Badge>
                        <span className="text-muted-foreground">{content.duration}</span>
                      </div>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {content.students.toLocaleString()}
                      </span>
                    </div>
                  </div>)}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/courses')}>
                View All Courses
              </Button>
            </Card>

            
          </div>
        </div>
      </div>
    </section>;
};