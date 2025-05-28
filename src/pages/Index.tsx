
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Code, Zap, Target, Rocket, Star, Users, Award, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
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

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Adaptive algorithms that personalize your interview prep based on your strengths and weaknesses.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Real-World Problems",
      description: "Practice with actual interview questions from top tech companies like Google, Apple, and Meta.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate code analysis, optimization tips, and complexity evaluation for every solution.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Mock Interviews",
      description: "Simulate real interview environments with video calls, whiteboarding, and time pressure.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="floating-orb w-96 h-96 top-20 -left-48 animate-float" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-64 h-64 top-96 -right-32 animate-float" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-80 h-80 bottom-20 left-1/3 animate-float" style={{ animationDelay: '4s' }} />

      {/* Mouse Follower Gradient */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-0 opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Navigation */}
      <nav className="relative z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">Prep.AI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <Button variant="outline" className="glass-strong border-white/20 text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-40 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-strong border border-white/20 mb-6 animate-pulse-slow">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-gray-300">#1 AI Interview Prep Platform</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
              <span className="text-gradient">Master</span>{" "}
              <span className="text-white">Coding</span><br />
              <span className="text-gradient-secondary">Interviews</span>{" "}
              <span className="text-white">with AI</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your interview preparation with AI-powered personalized learning, 
              real-world problems, and instant feedback from industry experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 glow-box group">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="glass-strong border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Revolutionize Your Prep
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of interview preparation with cutting-edge AI technology
              designed to accelerate your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`glass-strong border-white/10 p-8 hover:border-white/20 transition-all duration-500 group glow-box transform hover:scale-105 animate-slide-in-up`} style={{ animationDelay: `${index * 150}ms` }}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-40 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="glass-strong border-white/10 p-12 glow-box">
            <div className="mb-8">
              <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-float" />
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Ready to Land Your Dream Job?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers who've already transformed their careers with Prep.AI.
                Start your journey today and experience the difference AI-powered preparation makes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 glow-box group">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="glass-strong border-white/20 text-white hover:bg-white/10 px-12 py-4 text-lg">
                Schedule Demo
              </Button>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 border-t border-white/10 glass">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Prep.AI</span>
            </div>
            
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Prep.AI. All rights reserved. Empowering developers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
