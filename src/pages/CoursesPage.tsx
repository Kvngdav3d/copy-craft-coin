import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Users, Star, Search, TrendingUp, DollarSign, Shield, Zap } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Cryptocurrency Trading Fundamentals",
    description: "Master the basics of crypto trading, market analysis, and risk management",
    level: "Beginner",
    duration: "6 hours",
    students: 12500,
    rating: 4.8,
    price: "Free",
    category: "Trading Basics",
    image: "📈",
  },
  {
    id: 2,
    title: "Advanced Technical Analysis",
    description: "Deep dive into chart patterns, indicators, and trading strategies",
    level: "Advanced",
    duration: "12 hours",
    students: 8900,
    rating: 4.9,
    price: "$49",
    category: "Technical Analysis",
    image: "📊",
  },
  {
    id: 3,
    title: "DeFi & Yield Farming Strategies",
    description: "Learn how to maximize returns through decentralized finance protocols",
    level: "Intermediate",
    duration: "8 hours",
    students: 6700,
    rating: 4.7,
    price: "$39",
    category: "DeFi",
    image: "🌾",
  },
  {
    id: 4,
    title: "Risk Management & Portfolio Building",
    description: "Build a balanced crypto portfolio and manage risk effectively",
    level: "Intermediate",
    duration: "10 hours",
    students: 15200,
    rating: 4.9,
    price: "$59",
    category: "Risk Management",
    image: "🛡️",
  },
  {
    id: 5,
    title: "Smart Contract Basics",
    description: "Understanding smart contracts and blockchain technology",
    level: "Beginner",
    duration: "5 hours",
    students: 9800,
    rating: 4.6,
    price: "Free",
    category: "Blockchain",
    image: "⛓️",
  },
  {
    id: 6,
    title: "NFT Trading Masterclass",
    description: "Navigate the NFT market and identify valuable opportunities",
    level: "Intermediate",
    duration: "7 hours",
    students: 5400,
    rating: 4.5,
    price: "$45",
    category: "NFTs",
    image: "🎨",
  },
  {
    id: 7,
    title: "Copy Trading Strategies",
    description: "Learn how to select and follow successful traders effectively",
    level: "Beginner",
    duration: "4 hours",
    students: 18900,
    rating: 4.8,
    price: "Free",
    category: "Copy Trading",
    image: "👥",
  },
  {
    id: 8,
    title: "Cryptocurrency Tax & Legal",
    description: "Navigate crypto taxation and regulatory compliance",
    level: "All Levels",
    duration: "6 hours",
    students: 7200,
    rating: 4.7,
    price: "$35",
    category: "Legal",
    image: "⚖️",
  },
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-20">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="h-3 w-3 mr-1" />
            Education Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Crypto Trading <span className="text-primary">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry experts and master cryptocurrency trading at your own pace
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search courses..."
              className="pl-10"
            />
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="free">Free</TabsTrigger>
              <TabsTrigger value="trading">Trading</TabsTrigger>
              <TabsTrigger value="defi">DeFi</TabsTrigger>
              <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">50+</div>
              <p className="text-sm text-muted-foreground">Total Courses</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Users className="h-5 w-5 text-success" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100K+</div>
              <p className="text-sm text-muted-foreground">Active Students</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Star className="h-5 w-5 text-warning" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Zap className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">200+</div>
              <p className="text-sm text-muted-foreground">Hours Content</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="bg-gradient-card border-border/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="text-4xl mb-3">{course.image}</div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {(course.students / 1000).toFixed(1)}K
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{course.price}</span>
                    <Button variant="default" size="sm">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-hero border-border/50 p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of students who are mastering crypto trading with our expert-led courses
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg">
              Browse Free Courses
            </Button>
            <Button variant="outline" size="lg">
              View All Categories
            </Button>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default CoursesPage;
