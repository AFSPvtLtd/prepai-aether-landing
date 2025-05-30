
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Code, Zap, Target, Rocket, Star, Users, Award, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useAuthManager } from "@/components/auth/AuthManager";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const { currentUser } = useAuth();
  const { openAuthModal } = useAuthManager();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Show Dashboard if user is logged in
  if (currentUser) {
    return <Dashboard />;
  }

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Adaptive algorithms that personalize your interview prep based on your strengths and weaknesses.",
      gradient: "from-violet-400 via-purple-400 to-pink-400"
    },
    {
      icon: Code,
      title: "Real-World Problems",
      description: "Practice with actual interview questions from top tech companies like Google, Apple, and Meta.",
      gradient: "from-pink-400 via-rose-400 to-orange-400"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate analysis, optimization tips, and complexity evaluation for every solution.",
      gradient: "from-emerald-400 via-teal-400 to-cyan-400"
    },
    {
      icon: Target,
      title: "Mock Interviews",
      description: "Simulate real interview environments with video calls, whiteboarding, and time pressure.",
      gradient: "from-blue-400 via-indigo-400 to-purple-400"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="floating-orb w-96 h-96 top-20 -left-48 animate-float" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-64 h-64 top-96 -right-32 animate-float" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-80 h-80 bottom-20 left-1/3 animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Dynamic cursor effect */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 rounded-full opacity-30"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Prep.AI
          </div>
          <div className="space-x-4">
            <Button 
              variant="ghost" 
              className="text-slate-700 hover:text-violet-600 hover:bg-white/50 backdrop-blur-sm"
            >
              Features
            </Button>
            <Button 
              variant="ghost" 
              className="text-slate-700 hover:text-violet-600 hover:bg-white/50 backdrop-blur-sm"
            >
              Pricing
            </Button>
            <Button 
              onClick={openAuthModal}
              className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 hover:from-violet-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Master Tech
              <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Interviews with AI
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your interview preparation with AI-powered real-time conversations, personalized learning, and expert feedback from industry professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={openAuthModal}
                size="lg" 
                className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 hover:from-violet-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
              >
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 transition-all duration-300 px-8 py-4 text-lg backdrop-blur-sm bg-white/30"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-violet-400" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience the future of interview preparation with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/60 backdrop-blur-md hover:bg-white/80 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-violet-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-r from-violet-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-16">
            Trusted by Thousands of Developers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Users, stat: "50,000+", label: "Active Users" },
              { icon: Star, stat: "95%", label: "Success Rate" },
              { icon: Award, stat: "10,000+", label: "Dream Jobs Landed" }
            ].map((item, index) => (
              <div 
                key={item.label} 
                className={`group ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200 + 800}ms` }}
              >
                <div className="bg-gradient-to-br from-violet-400 via-purple-400 to-pink-400 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-slate-600 text-lg">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-3xl p-12 shadow-2xl">
            <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have successfully landed their dream jobs with our AI-powered preparation platform.
            </p>
            <Button 
              onClick={openAuthModal}
              size="lg" 
              className="bg-white text-violet-600 hover:bg-gray-50 hover:text-violet-700 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
