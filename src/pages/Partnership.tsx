import React from 'react';
import { ArrowLeft, TrendingUp, Users, Code, Rocket, Brain, Zap, Globe, Building, Target, Award, FileText, ArrowRight, Briefcase, GraduationCap, Trophy, Lightbulb, Eye, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/ui/contact-form';
import { useNavigate } from 'react-router-dom';

const Partnership = () => {
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = React.useState(false);
  
  // Scroll to top when component mounts
  React.useEffect(() => {
    const htmlElement = document.documentElement;
    const originalScrollBehavior = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      htmlElement.style.scrollBehavior = originalScrollBehavior;
    }, 100);
  }, []);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setShowContactForm(!showContactForm);
    if (!showContactForm) {
      setTimeout(() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group">
              <Globe className="w-6 h-6 text-foreground icon-hover" />
              <div className="flex flex-col">
                <div className="text-lg sm:text-xl font-semibold text-foreground">Global AI Hackathon</div>
                <div className="text-xs sm:text-sm text-muted-foreground">in collaboration with the MIT SLOAN AI CLUB</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('corporate')} className="nav-item text-muted-foreground hover:text-foreground font-medium py-2 text-sm">
                Corporate
              </button>
              <button onClick={() => scrollToSection('investors')} className="nav-item text-muted-foreground hover:text-foreground font-medium py-2 text-sm">
                VCs & Investors
              </button>
            </div>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-accent"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Hackathon
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 text-center flex items-center justify-center min-h-screen pt-24">
        <div className="content-width">
          <div className="animate-fade-in space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Partnership Opportunities
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us in shaping the future of AI innovation through strategic partnerships that drive meaningful impact and sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* For Corporate Partners */}
      <section id="corporate" className="section-spacing px-4 sm:px-6 bg-muted/30">
        <div className="content-width">
          <div className="text-center mb-16">
            <div className="w-16 h-16 icon-green rounded-lg mx-auto mb-6 flex items-center justify-center">
              <Building className="w-8 h-8 icon-hover" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              For Corporate Partners
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Accelerate your AI transformation and access top talent through strategic partnerships
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">            
            <div className="card-theme-green rounded-lg p-8 card-hover shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 icon-green rounded-lg mr-4 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">AI Solutions</h3>
              </div>
              <h4 className="text-lg font-medium text-foreground mb-4">Solve Your Toughest Challenges</h4>
              <p className="text-muted-foreground leading-relaxed">
                Submit your company's most difficult AI challenges and receive a first-class MVP or proof-of-concept from top global talent in just 24-48 hours.
              </p>
            </div>
            
            <div className="card-theme-green rounded-lg p-8 card-hover shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 icon-green rounded-lg mr-4 flex items-center justify-center">
                  <UserPlus className="w-6 h-6 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Talent Acquisition</h3>
              </div>
              <h4 className="text-lg font-medium text-foreground mb-4">Hire the Best in AI</h4>
              <p className="text-muted-foreground leading-relaxed">
                Use the hackathon to evaluate, interview, and hire top AI talent for full-time or contractor roles, accelerating your AI roadmap. You can also leverage our curated AI talent bank to find personnel with specific skills.
              </p>
            </div>
            
            <div className="card-theme-green rounded-lg p-8 card-hover shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 icon-green rounded-lg mr-4 flex items-center justify-center">
                  <Eye className="w-6 h-6 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Brand Exposure</h3>
              </div>
              <h4 className="text-lg font-medium text-foreground mb-4">Showcase Your Leadership</h4>
              <p className="text-muted-foreground leading-relaxed">
                Advertise your products and services to a large, highly engaged tech audience. Strengthen your company's position as a thought leader in the AI space by having your employees mentor participants.
              </p>
            </div>
            
            <div className="card-theme-green rounded-lg p-8 card-hover shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 icon-green rounded-lg mr-4 flex items-center justify-center">
                  <Code className="w-6 h-6 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Team Development</h3>
              </div>
              <h4 className="text-lg font-medium text-foreground mb-4">Upskill Your Employees</h4>
              <p className="text-muted-foreground leading-relaxed">
                Gain access to exclusive AI upskilling programs for your employees, including executive and builder training, offered through our partnerships with world-renowned institutions.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="mailto:lbieske@mit.edu?subject=Global AI Hackathon - Corporate Partnership Inquiry"
              className="inline-flex items-center justify-center bg-foreground hover:bg-muted-foreground text-background px-8 py-4 font-semibold text-lg button-hover rounded-md"
            >
              Contact Us for Corporate Partnership
              <ArrowRight className="ml-3 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* For VCs & Investors */}
      <section id="investors" className="section-spacing px-4 sm:px-6 bg-muted/30">
        <div className="content-width">
          <div className="text-center mb-16">
            <div className="w-16 h-16 icon-blue rounded-lg mx-auto mb-6 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 icon-hover" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              For VCs & Investors
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access curated AI ventures and streamlined investment opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="card-theme-blue rounded-lg p-8 card-hover shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 icon-blue rounded-lg mr-4 flex items-center justify-center">
                  <Award className="w-6 h-6 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Curated Deal Flow</h3>
              </div>
              <h4 className="text-lg font-medium text-foreground mb-4">Access Top AI Ventures</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Gain direct access to a vetted pipeline of promising, early-stage AI ventures as they emerge from the hackathon's competitive and innovative environment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through our partnership with a venture fund, we set up SPVs to make investing easier and more straightforward for you.
              </p>
            </div>
            
            <div className="card-theme-blue rounded-lg p-8 card-hover shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 icon-blue rounded-lg mr-4 flex items-center justify-center">
                  <Rocket className="w-6 h-6 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Strategic Investment</h3>
              </div>
              <h4 className="text-lg font-medium text-foreground mb-4">A Streamlined Process</h4>
              <p className="text-muted-foreground leading-relaxed">
                We enable outside investors to strategically participate in the upside of the most promising ideas. A dedicated "Venture phase" allows you to efficiently conduct due diligence, interview teams, and send out funding offers before the August 31st deadline.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="mailto:lbieske@mit.edu?subject=Global AI Hackathon - Investor Network Inquiry"
              className="inline-flex items-center justify-center bg-foreground hover:bg-muted-foreground text-background px-8 py-4 font-semibold text-lg button-hover rounded-md"
            >
              Join Our Investor Network
              <ArrowRight className="ml-3 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Ready to Partner With Us */}
      <section className="section-spacing px-4 sm:px-6 bg-muted/30">
        <div className="content-width">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Join forward-thinking organizations leveraging AI innovation for competitive advantage and sustainable growth. Let's build the future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:lbieske@mit.edu?subject=Global AI Hackathon - Schedule Consultation"
                className="inline-flex items-center justify-center bg-foreground hover:bg-muted-foreground text-background px-8 py-4 font-semibold text-lg button-hover rounded-md"
              >
                Schedule Consultation
                <ArrowRight className="ml-3 w-5 h-5" />
              </a>
              <a 
                href="mailto:lbieske@mit.edu?subject=Global AI Hackathon - Detailed Explanation Request"
                className="inline-flex items-center justify-center border border-border hover:bg-accent text-foreground px-8 py-4 font-semibold text-lg button-hover rounded-md bg-background"
              >
                <FileText className="mr-3 w-5 h-5" />
                Detailed Explanation
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Partnership; 
