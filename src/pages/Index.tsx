import React, { useState } from 'react';
import { Calendar, MapPin, Users, Trophy, Clock, ArrowRight, Globe, Zap, Code, Brain, Rocket, Cpu, Mic, TrendingUp, Scale, Mail, Menu, X, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* All content */}
      <div className="relative">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3 group">
                <Globe className="w-6 h-6 text-foreground icon-hover" />
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-semibold text-foreground">Global AI Hackathon</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">in collaboration with the MIT SLOAN AI CLUB</span>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-8 items-center">
                <button onClick={() => scrollToSection('about')} className="nav-item text-muted-foreground hover:text-foreground font-medium py-2 text-sm">
                  About
                </button>
                <button onClick={() => scrollToSection('flywheel')} className="nav-item text-muted-foreground hover:text-foreground font-medium py-2 text-sm">
                  Partners
                </button>
                <button onClick={() => scrollToSection('tracks')} className="nav-item text-muted-foreground hover:text-foreground font-medium py-2 text-sm">
                  Tracks
                </button>
                <button onClick={() => scrollToSection('speakers')} className="nav-item text-muted-foreground hover:text-foreground font-medium py-2 text-sm">
                  Speakers
                </button>
                <button onClick={() => scrollToSection('judges')} className="nav-item text-muted-foreground hover:text-foreground font-medium py-2 text-sm">
                  Judges
                </button>
                <button onClick={() => scrollToSection('schedule')} className="nav-item text-muted-foreground hover:text-foreground font-medium py-2 text-sm">
                  Schedule
                </button>
                <button onClick={() => scrollToSection('faq')} className="nav-item text-muted-foreground hover:text-foreground font-medium py-2 text-sm">
                  FAQ
                </button>
                <Button 
                  onClick={() => navigate('/partnership')}
                  className="ml-6 bg-foreground hover:bg-foreground/90 text-background px-4 py-2 font-medium button-hover border-0 text-sm"
                >
                  Partner with us
                </Button>
              </div>

              {/* Mobile menu button */}
              <button 
                className="lg:hidden text-foreground p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-3 pb-3 border-t border-border bg-background/95 backdrop-blur-sm">
                <div className="flex flex-col space-y-1 pt-3">
                  <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground hover:bg-accent font-medium py-3 px-4 text-left">
                    About
                  </button>
                  <button onClick={() => scrollToSection('flywheel')} className="text-muted-foreground hover:text-foreground hover:bg-accent font-medium py-3 px-4 text-left">
                    Partners
                  </button>
                  <button onClick={() => scrollToSection('tracks')} className="text-muted-foreground hover:text-foreground hover:bg-accent font-medium py-3 px-4 text-left">
                    Tracks
                  </button>
                  <button onClick={() => scrollToSection('speakers')} className="text-muted-foreground hover:text-foreground hover:bg-accent font-medium py-3 px-4 text-left">
                    Speakers
                  </button>
                  <button onClick={() => scrollToSection('judges')} className="text-muted-foreground hover:text-foreground hover:bg-accent font-medium py-3 px-4 text-left">
                    Judges
                  </button>
                  <button onClick={() => scrollToSection('schedule')} className="text-muted-foreground hover:text-foreground hover:bg-accent font-medium py-3 px-4 text-left">
                    Schedule
                  </button>
                  <button onClick={() => scrollToSection('faq')} className="text-muted-foreground hover:text-foreground hover:bg-accent font-medium py-3 px-4 text-left">
                    FAQ
                  </button>
                  <Button 
                    onClick={() => {navigate('/partnership'); setMobileMenuOpen(false);}}
                    className="mt-3 mx-4 bg-foreground hover:bg-foreground/90 text-background px-6 py-3 font-medium button-hover border-0"
                  >
                    Partner with us
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-4 sm:px-6 text-center flex items-center justify-center min-h-screen pt-24">
          <div className="content-width">
            <div className="animate-fade-in space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Global AI Hackathon
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join developers, researchers, and innovators from around the world to build cutting-edge AI solutions in 24 hours
              </p>
              <div className="space-y-2">
                <div className="text-lg text-foreground font-medium">August 9-10, 2025 • Online Event</div>
                <div className="text-base text-muted-foreground">Four Technical Tracks • 24-Hour Challenge</div>
              </div>
              <div className="pt-4">
                <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl button-hover font-semibold">
                  <span className="block sm:hidden">Apply Now</span>
                  <span className="hidden sm:block md:hidden">Apply by Jul 25</span>
                  <span className="hidden md:block lg:hidden">Apply by Jul 25 for Round 1</span>
                  <span className="hidden lg:block">Apply by Jul 25 to be considered for Round 1 applications</span>
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-spacing px-4 sm:px-6 bg-muted/30">
          <div className="content-width">
            <div className="section-divider mb-16"></div>
            
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Shape the Future with AI
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The Global AI Hackathon brings together brilliant minds to solve real-world challenges using artificial intelligence. Whether you're a seasoned developer or just starting your AI journey, this is your chance to innovate and compete.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="card-theme-blue rounded-lg p-8 text-center card-hover shadow-md">
                <div className="w-16 h-16 icon-blue rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Global Community</h3>
                <p className="text-muted-foreground leading-relaxed">Connect with talented participants from top universities and tech companies worldwide</p>
              </div>
              
              <div className="card-theme-blue rounded-lg p-8 text-center card-hover shadow-md">
                <div className="w-16 h-16 icon-blue rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">24-Hour Sprint</h3>
                <p className="text-muted-foreground leading-relaxed">Intensive online hackathon with compute credits and resources provided</p>
              </div>
              
              <div className="card-theme-blue rounded-lg p-8 text-center card-hover shadow-md">
                <div className="w-16 h-16 icon-blue rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Trophy className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Career Opportunities</h3>
                <p className="text-muted-foreground leading-relaxed">Outstanding participants may join our talent network and explore hiring opportunities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership & Beyond Section */}
        <section id="flywheel" className="section-spacing px-4 sm:px-6 bg-muted/30">
          <div className="content-width">
            <div className="section-divider mb-16"></div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Beyond the Competition
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our hackathon is just the beginning. We support outstanding participants on their journey from innovative ideas to successful AI ventures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
              <div className="card-theme-green rounded-lg p-8 card-hover shadow-md text-center">
                <div className="w-16 h-16 icon-green rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Rocket className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Startup Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Promising projects receive mentorship, resources, and potential investment opportunities to grow into successful startups.
                </p>
              </div>
              
              <div className="card-theme-green rounded-lg p-8 card-hover shadow-md text-center">
                <div className="w-16 h-16 icon-green rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Career Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join our talent network and connect with leading companies looking for skilled AI developers and researchers.
                </p>
              </div>
              
              <div className="card-theme-green rounded-lg p-8 card-hover shadow-md text-center">
                <div className="w-16 h-16 icon-green rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Code className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Continued Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access ongoing training programs and workshops to stay at the forefront of AI technology developments.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Interested in partnering with us or want to learn more about our program?
              </p>
              <Button 
                className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 font-semibold text-lg button-hover"
                onClick={() => navigate('/partnership')}
              >
                Explore Partnership
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section id="tracks" className="section-spacing px-4 sm:px-6 bg-muted/30">
          <div className="content-width">
            <div className="section-divider mb-16"></div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Competition Tracks
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Choose your specialization and compete in one of four cutting-edge AI domains. Work on real-world 
                challenges from industry partners or develop innovative solutions for your own ventures. Our organizing 
                team ensures compelling problems are available across all tracks to showcase your expertise and create impactful AI solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card-theme-purple rounded-lg p-8 card-hover shadow-md text-center">
                <div className="w-16 h-16 icon-purple rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Brain className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">Agentic AI & Data Engineering</h3>
                <p className="text-muted-foreground leading-relaxed">Build intelligent agents and robust data pipelines that can reason, plan, and execute complex tasks autonomously.</p>
              </div>
              
              <div className="card-theme-purple rounded-lg p-8 card-hover shadow-md text-center">
                <div className="w-16 h-16 icon-purple rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Code className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">Model Fine-Tuning & Adaptation</h3>
                <p className="text-muted-foreground leading-relaxed">Customize and optimize AI models for specific use cases, improving performance and efficiency.</p>
              </div>
              
              <div className="card-theme-purple rounded-lg p-8 card-hover shadow-md text-center">
                <div className="w-16 h-16 icon-purple rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Rocket className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">Rapid Prototyping & App Building</h3>
                <p className="text-muted-foreground leading-relaxed">Create innovative AI-powered applications with rapid development techniques and modern frameworks.</p>
              </div>
              
              <div className="card-theme-purple rounded-lg p-8 card-hover shadow-md text-center">
                <div className="w-16 h-16 icon-purple rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Cpu className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">Small Model Deployment</h3>
                <p className="text-muted-foreground leading-relaxed">Deploy efficient, lightweight AI models for edge computing and resource-constrained environments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="section-spacing px-4 sm:px-6 bg-muted/30">
          <div className="content-width">
            <div className="section-divider mb-16"></div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Featured Speakers
              </h2>
            </div>
            
            <div className="bg-card border border-border rounded-lg min-h-[300px] flex items-center justify-center shadow-md mx-auto max-w-3xl">
              <div className="text-center px-4 sm:px-6">
                <div className="w-16 h-16 icon-pink rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Mic className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">To be announced</h3>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  We're finalizing our lineup of world-class AI experts and industry leaders
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Judges Section */}
        <section id="judges" className="section-spacing px-4 sm:px-6 bg-muted/30">
          <div className="content-width">
            <div className="section-divider mb-16"></div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Meet Our Judges
              </h2>
            </div>
            
            <div className="bg-card border border-border rounded-lg min-h-[300px] flex items-center justify-center shadow-md mx-auto max-w-3xl">
              <div className="text-center px-4 sm:px-6">
                <div className="w-16 h-16 icon-pink rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Scale className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">To be announced</h3>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  We're selecting experienced judges to evaluate and award the best AI innovations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hackathon Highlights Section */}
        <section id="highlights" className="section-spacing px-4 sm:px-6 bg-muted/30">
          <div className="content-width">
            <div className="section-divider mb-16"></div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Last Hackathon's Winners
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our previous hackathon brought together top AI talent from around the world to tackle challenging problems. 
                In 24 hours, we received 100+ amazing submissions. Congratulations to all participants and our award winners:
              </p>
            </div>
            
            {/* Hackathon Round 1 Image */}
            <div className="flex justify-center mb-20">
              <div className="bg-card border border-border rounded-lg p-6 sm:p-8 max-w-4xl shadow-md">
                <img 
                  src="/GlobalAIHackathonWebsite/images/Round01_Hackathon.png" 
                  alt="Hackathon Round 1 Results" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Prize Winners */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-8 text-center shadow-md card-hover flex flex-col h-full">
                <div className="w-16 h-16 icon-gold rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Trophy className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">1st Grand Prize</h3>
                <h4 className="text-xl font-semibold text-foreground mb-4">SynthShape</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  AI-powered 3D modeling from text or images — making jewelry design accessible for all.
                </p>
                <a 
                  href="https://lnkd.in/eR23mQz6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-lg px-6 py-3 button-hover mt-auto"
                >
                  View Demo <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center shadow-md card-hover flex flex-col h-full">
                <div className="w-16 h-16 icon-silver rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Trophy className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">2nd Grand Prize</h3>
                <h4 className="text-xl font-semibold text-foreground mb-4">ThermoTrace</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  Anomaly detection for thermal drone footage to support real-time search & rescue.
                </p>
                <a 
                  href="https://lnkd.in/ejPKBagv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-lg px-6 py-3 button-hover mt-auto"
                >
                  View Demo <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center shadow-md card-hover flex flex-col h-full">
                <div className="w-16 h-16 icon-bronze rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Trophy className="w-8 h-8 icon-hover" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">3rd Prize</h3>
                <h4 className="text-xl font-semibold text-foreground mb-4">AI Scam Shield</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  A tool that protects older adults from scams by detecting threats in real time.
                </p>
                <a 
                  href="https://lnkd.in/ePfQvg2c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-lg px-6 py-3 button-hover mt-auto"
                >
                  View Demo <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Event Details</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about participating in our AI Hackathon
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Who Can Join - Top Position */}
              <div className="bg-card rounded-lg p-6 border border-border mb-8 text-center shadow-md card-hover">
                <h3 className="text-xl font-semibold mb-4">Who Can Join?</h3>
                <ul className="space-y-3 text-muted-foreground max-w-2xl mx-auto">
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Undergraduate & graduate students</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Early-career professionals passionate about AI</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Coding/ML experience recommended but not required</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Free to participate - open to everyone globally</span>
                  </li>
                </ul>
              </div>

              {/* Event Info Cards - Centered */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date & Duration */}
                <div className="bg-card rounded-lg p-6 border border-border flex flex-col items-center text-center space-y-4 shadow-md card-hover">
                  <div className="icon-container-blue">
                    <Calendar className="w-8 h-8 text-white icon-hover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Date & Duration</h3>
                    <p className="text-muted-foreground">
                      August 9-10, 2025 (ET) • 24 hours of intensive development
                    </p>
                  </div>
                </div>

                {/* Format */}
                <div className="bg-card rounded-lg p-6 border border-border flex flex-col items-center text-center space-y-4 shadow-md card-hover">
                  <div className="icon-container-purple">
                    <Globe className="w-8 h-8 text-white icon-hover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Format</h3>
                    <p className="text-muted-foreground">
                      Online hackathon • Join virtually from anywhere in the world
                    </p>
                  </div>
                </div>

                {/* Team Size */}
                <div className="bg-card rounded-lg p-6 border border-border flex flex-col items-center text-center space-y-4 shadow-md card-hover">
                  <div className="icon-container-green">
                    <Users className="w-8 h-8 text-white icon-hover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Team Size</h3>
                    <p className="text-muted-foreground mb-2">
                      Individual or teams up to 4 members • Cross-functional collaboration encouraged
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We will host a short coffee chat for you to find team members in case you are a solo participant
                    </p>
                  </div>
                </div>

                {/* Resources */}
                <div className="bg-card rounded-lg p-6 border border-border flex flex-col items-center text-center space-y-4 shadow-md card-hover">
                  <div className="icon-container-orange">
                    <Zap className="w-8 h-8 text-white icon-hover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Resources</h3>
                    <p className="text-muted-foreground">
                      Free compute credits, tools, and platforms provided based on your track
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="section-spacing px-4 sm:px-6 bg-muted/30">
          <div className="content-width">
            <div className="section-divider mb-16"></div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Program Timeline
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We build solutions fast, help with hiring, and incubate ventures
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-2">Jul. 25 - Aug. 9</div>
                  <p className="text-muted-foreground">Application Phase</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-2">Aug. 24 - 31</div>
                  <p className="text-muted-foreground">Recruiting Phase</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-2">Sep. 14</div>
                  <p className="text-muted-foreground">Venture Phase</p>
                </div>
              </div>
              
              {/* Timeline line */}
              <div className="relative flex justify-between items-center">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full transform -translate-y-1/2"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-background z-10"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-background z-10"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-background z-10"></div>
              </div>
            </div>

            {/* Detailed Schedule */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="card-theme-blue rounded-lg p-6 shadow-md card-hover">
                <div className="w-12 h-12 icon-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-6 h-6 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Application Phase</h3>
                <p className="text-muted-foreground mb-4 text-center">July 25 - August 9, 2025</p>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="font-semibold text-foreground mb-2">Key Dates:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Jul 25 - Round 1 deadline</li>
                    <li>• Aug 1 - Round 2 deadline</li>
                    <li>• 9.-10. August - Global AI Hackathon</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="font-semibold text-foreground mb-2">Challenge Sponsors:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Submit challenges using google form</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="font-semibold text-foreground mb-2">Hackers:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Apply through google form</li>
                    <li>• Select preference for corporate or venture track</li>
                  </ul>
                </div>
                
                <div className="bg-orange-100 rounded-lg p-3 mt-4">
                  <div className="text-sm text-orange-800">
                    <strong>Round 2:</strong> We can only accept challenges/hackers if spots are available!
                  </div>
                </div>
              </div>

              <div className="card-theme-purple rounded-lg p-6 shadow-md card-hover">
                <div className="w-12 h-12 icon-purple rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Recruiting Phase</h3>
                <p className="text-muted-foreground mb-4 text-center">August 24 - 31, 2025</p>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="font-semibold text-foreground mb-2">Key Dates:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Aug 24 - Send offer deadline</li>
                    <li>• Aug 31 - Accept offer deadline</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="font-semibold text-foreground mb-2">Challenge Sponsors:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Review CVs of participants, send out and conduct interviews</li>
                    <li>• Send out offers</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="font-semibold text-foreground mb-2">Hackers:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Interview with companies</li>
                    <li>• Accept/reject offers</li>
                  </ul>
                </div>
              </div>

              <div className="card-theme-green rounded-lg p-6 shadow-md card-hover">
                <div className="w-12 h-12 icon-green rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Rocket className="w-6 h-6 icon-hover" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Venture Phase</h3>
                <p className="text-muted-foreground mb-4 text-center">September 14, 2025</p>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="font-semibold text-foreground mb-2">Key Dates:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sep 14 - VC Offer deadline</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="font-semibold text-foreground mb-2">Venture Funds:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Interview participants/teams and conduct due diligence</li>
                    <li>• Send out funding offers</li>
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="font-semibold text-foreground mb-2">Hackers:</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Interview with VCs</li>
                    <li>• Accept funding/incubation offers</li>
                  </ul>
                </div>
                
                <div className="bg-blue-100 rounded-lg p-3 mt-4">
                  <div className="text-sm text-blue-800">
                    Only participants who have not been hired in the recruiting phase are eligible for the venture phase to avoid a conflict of interest
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-spacing px-4 sm:px-6 bg-muted/30">
          <div className="content-width">
            <div className="section-divider mb-16"></div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Frequently Asked Questions
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
              <AccordionItem value="who-can-participate" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  Who can participate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>Undergraduate, graduate, or early-career professionals with a passion for AI. Prior experience with coding, machine learning, or data science is recommended, but you don't need to be an expert.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="team-participation" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  Can I participate as a team?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>Yes. You may participate in teams of up to 4. However, each applicant must fill out the form individually.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="selection-process" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  When do I know if I was selected?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>We will let you know soon after you apply, as we select applicants on a rolling basis!</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mit-requirement" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  Do I need to be from MIT to participate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>No! The hackathon is global. We welcome applicants from top universities and institutions around the world.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="free-participation" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  Is it free to participate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>Yes! Participation is completely free.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="event-format" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  What's the format of the event?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>It's a 24-hour online hackathon held from August 9–10, 2025 (ET). You'll join virtually, collaborate in teams, and submit your project within the timeframe.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tools-available" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  What tools can I use?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>You're free to use any tools, models, or platforms. We'll provide compute credits and resources depending on your track and sponsor support.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="career-opportunities" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  Can this help with internships or jobs?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>Yes! Outstanding participants - regardless of whether they win - may be invited to join our talent network, connect with sponsors, or explore follow-up hiring opportunities.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="application-deadlines" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  What are the application deadlines?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>Round 1 applications are due by July 25th. Round 2 applications are due by August 1st. However, Round 2 is only available if spots remain after Round 1 selections.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="post-hackathon" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  What happens after the hackathon?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>Outstanding participants may receive job offers during the recruiting phase (Aug 24), investment opportunities during the venture phase (Aug 31), or invitations to join our ongoing talent network for future opportunities. Note: Only participants who haven't been hired in the recruiting phase are eligible for the venture phase.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="realistic-build" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  How much can I realistically build in 24 hours?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>Focus on a functional MVP (Minimum Viable Product) that demonstrates your core idea. Previous winners have built AI-powered apps, fine-tuned models, data pipelines, and innovative prototypes. Quality and innovation matter more than completeness.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sponsored-challenges" className="bg-card border border-border rounded-lg px-6 shadow-md">
                <AccordionTrigger className="text-foreground hover:text-foreground/80 text-lg font-semibold py-6">
                  Will all tracks have company-sponsored challenges?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>Depending on the number of submissions, not all tracks will be supported with challenges from partner companies. In cases where specific tracks have limited company participation, our organizing team will provide corresponding challenges to ensure all participants have engaging problems to solve within their chosen domain.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Have More Questions Section */}
        <section className="section-spacing px-4 sm:px-6 bg-muted/30">
          <div className="content-width">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-8 flex items-center justify-center">
                <Mail className="w-8 h-8 text-muted-foreground" />
              </div>
              
              <div className="w-16 h-1 bg-border mx-auto mb-8"></div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Have More Questions?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                If your question wasn't answered in the FAQ, feel free to contact us directly. We'll get back to you as soon as possible.
              </p>
              
              <div className="max-w-lg mx-auto">
                <div className="bg-card border border-border rounded-lg p-8 shadow-md">
                  <a 
                    href="mailto:lbieske@mit.edu?subject=Global AI Hackathon - General Inquiry"
                    className="inline-flex items-center justify-center bg-foreground hover:bg-muted-foreground text-background px-8 py-4 font-semibold text-lg button-hover rounded-md"
                  >
                    <Mail className="mr-3 w-5 h-5" />
                    Send Email
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    This will open your email client with the recipient and subject line already filled in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Build Section */}
        <section className="section-spacing px-4 sm:px-6 bg-muted/30">
          <div className="content-width">
            <div className="text-center">
              <div className="w-16 h-1 bg-border mx-auto mb-12"></div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8">
                Ready to Build Something Amazing?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Join developers, researchers, and innovators from around the world. Registration is free and open to everyone.
              </p>
              
              <Button 
                size="lg" 
                className="bg-foreground hover:bg-muted-foreground text-background px-12 py-6 font-semibold text-lg rounded-md shadow-md hover:shadow-lg"
              >
                Apply by Jul 25 to be considered for Round 1 applications
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index; 
