
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Layers, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const [selectedTechnology, setSelectedTechnology] = useState("all");

  const technologies = {
    all: {
      name: "All Technologies",
      icon: Layers,
      gradient: "from-violet-400 via-purple-400 to-pink-400",
      frameworks: [
        { name: "React", category: "Frontend", difficulty: "Intermediate", questions: 150 },
        { name: "Angular", category: "Frontend", difficulty: "Advanced", questions: 120 },
        { name: "Vue.js", category: "Frontend", difficulty: "Beginner", questions: 90 },
        { name: "Node.js", category: "Backend", difficulty: "Intermediate", questions: 180 },
        { name: "Express", category: "Backend", difficulty: "Beginner", questions: 75 },
        { name: "Django", category: "Backend", difficulty: "Advanced", questions: 140 },
        { name: "Spring Boot", category: "Backend", difficulty: "Advanced", questions: 160 },
        { name: "MongoDB", category: "Database", difficulty: "Intermediate", questions: 85 },
        { name: "PostgreSQL", category: "Database", difficulty: "Intermediate", questions: 95 },
        { name: "AWS", category: "Cloud", difficulty: "Advanced", questions: 200 },
        { name: "Docker", category: "DevOps", difficulty: "Intermediate", questions: 110 },
        { name: "Kubernetes", category: "DevOps", difficulty: "Advanced", questions: 130 }
      ]
    },
    frontend: {
      name: "Frontend",
      icon: Code,
      gradient: "from-pink-400 via-rose-400 to-orange-400",
      frameworks: [
        { name: "React", category: "Library", difficulty: "Intermediate", questions: 150 },
        { name: "Angular", category: "Framework", difficulty: "Advanced", questions: 120 },
        { name: "Vue.js", category: "Framework", difficulty: "Beginner", questions: 90 },
        { name: "Svelte", category: "Framework", difficulty: "Intermediate", questions: 65 },
        { name: "Next.js", category: "Framework", difficulty: "Advanced", questions: 100 },
        { name: "Nuxt.js", category: "Framework", difficulty: "Intermediate", questions: 70 },
        { name: "TypeScript", category: "Language", difficulty: "Intermediate", questions: 180 },
        { name: "Tailwind CSS", category: "Styling", difficulty: "Beginner", questions: 45 }
      ]
    },
    backend: {
      name: "Backend",
      icon: Brain,
      gradient: "from-emerald-400 via-teal-400 to-cyan-400",
      frameworks: [
        { name: "Node.js", category: "Runtime", difficulty: "Intermediate", questions: 180 },
        { name: "Express", category: "Framework", difficulty: "Beginner", questions: 75 },
        { name: "Django", category: "Framework", difficulty: "Advanced", questions: 140 },
        { name: "Flask", category: "Framework", difficulty: "Intermediate", questions: 85 },
        { name: "Spring Boot", category: "Framework", difficulty: "Advanced", questions: 160 },
        { name: "FastAPI", category: "Framework", difficulty: "Intermediate", questions: 95 },
        { name: "Ruby on Rails", category: "Framework", difficulty: "Advanced", questions: 120 },
        { name: "ASP.NET", category: "Framework", difficulty: "Advanced", questions: 135 }
      ]
    },
    database: {
      name: "Database",
      icon: Layers,
      gradient: "from-blue-400 via-indigo-400 to-purple-400",
      frameworks: [
        { name: "MongoDB", category: "NoSQL", difficulty: "Intermediate", questions: 85 },
        { name: "PostgreSQL", category: "SQL", difficulty: "Intermediate", questions: 95 },
        { name: "MySQL", category: "SQL", difficulty: "Beginner", questions: 80 },
        { name: "Redis", category: "Cache", difficulty: "Intermediate", questions: 60 },
        { name: "Elasticsearch", category: "Search", difficulty: "Advanced", questions: 70 },
        { name: "Cassandra", category: "NoSQL", difficulty: "Advanced", questions: 55 },
        { name: "DynamoDB", category: "NoSQL", difficulty: "Intermediate", questions: 65 }
      ]
    },
    cloud: {
      name: "Cloud & DevOps",
      icon: Star,
      gradient: "from-violet-400 via-purple-400 to-fuchsia-400",
      frameworks: [
        { name: "AWS", category: "Cloud Provider", difficulty: "Advanced", questions: 200 },
        { name: "Azure", category: "Cloud Provider", difficulty: "Advanced", questions: 180 },
        { name: "Google Cloud", category: "Cloud Provider", difficulty: "Advanced", questions: 165 },
        { name: "Docker", category: "Containerization", difficulty: "Intermediate", questions: 110 },
        { name: "Kubernetes", category: "Orchestration", difficulty: "Advanced", questions: 130 },
        { name: "Terraform", category: "Infrastructure", difficulty: "Advanced", questions: 90 },
        { name: "Jenkins", category: "CI/CD", difficulty: "Intermediate", questions: 75 }
      ]
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Intermediate": return "bg-amber-100 text-amber-800 border-amber-200";
      case "Advanced": return "bg-rose-100 text-rose-800 border-rose-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Orbs - same as landing page */}
      <div className="floating-orb w-96 h-96 top-20 -left-48 animate-float" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-64 h-64 top-96 -right-32 animate-float" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-80 h-80 bottom-20 left-1/3 animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            InterviewAI
          </div>
          <Button 
            onClick={logout} 
            variant="outline" 
            className="border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 transition-all duration-300 backdrop-blur-sm bg-white/30"
          >
            Sign Out
          </Button>
        </div>
      </div>

      {/* Welcome Section - reduced height */}
      <div className="relative z-10 px-6 pb-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Welcome back, {currentUser?.displayName || currentUser?.email}
          </h1>
          <p className="text-xl text-slate-600">Choose a technology to start your interview preparation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs value={selectedTechnology} onValueChange={setSelectedTechnology} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/60 backdrop-blur-md border border-white/20 p-1">
              {Object.entries(technologies).map(([key, tech]) => {
                const IconComponent = tech.icon;
                return (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tech.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(technologies).map(([key, tech]) => (
              <TabsContent key={key} value={key} className="space-y-6">
                {/* Technology Header - reduced height */}
                <div className={`text-center py-8 bg-gradient-to-r ${tech.gradient} rounded-3xl shadow-xl border border-white/20 backdrop-blur-sm`}>
                  <tech.icon className="w-12 h-12 mx-auto mb-3 text-white drop-shadow-lg" />
                  <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">{tech.name}</h2>
                  <p className="text-white/90 text-lg">
                    {tech.frameworks.length} frameworks • {tech.frameworks.reduce((acc, f) => acc + f.questions, 0)} practice questions
                  </p>
                </div>

                {/* Framework Cards - increased height */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {tech.frameworks.map((framework, index) => (
                    <Card 
                      key={framework.name} 
                      className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105 cursor-pointer min-h-[180px]"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-violet-600 transition-colors">
                            {framework.name}
                          </CardTitle>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-violet-500 group-hover:translate-x-1 transition-all" />
                        </div>
                        <CardDescription className="text-slate-600 text-base">
                          {framework.category}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 pt-2">
                        <div className="flex justify-between items-center">
                          <Badge 
                            variant="outline" 
                            className={`${getDifficultyColor(framework.difficulty)} font-medium text-sm px-3 py-1`}
                          >
                            {framework.difficulty}
                          </Badge>
                          <span className="text-sm text-slate-500 font-medium">
                            {framework.questions} questions
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full bg-gradient-to-r ${tech.gradient} transition-all duration-500`}
                            style={{ width: `${Math.min((framework.questions / 200) * 100, 100)}%` }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
