import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { Label } from './label';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

import { User, Mail, Briefcase, Code, Trophy, Users, Globe } from 'lucide-react';

interface HackathonSignupProps {
  className?: string;
}

export const HackathonSignup: React.FC<HackathonSignupProps> = ({
  className = ""
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    university: '',
    experience: '',
    track: '',
    teamSize: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Hier würden Sie normalerweise eine API-Anfrage senden
      console.log('Hackathon signup:', formData);

      // Simuliere API-Aufruf
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        university: '',
        experience: '',
        track: '',
        teamSize: '',
        motivation: ''
      });
    } catch (error) {
      console.error('Signup error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className={`bg-slate-700/40 backdrop-blur-md border border-green-500/40 ${className}`}>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
          <p className="text-slate-300 mb-4">
            Thank you for applying to the Global AI Hackathon. We'll review your application and get back to you soon.
          </p>
          <p className="text-sm text-slate-400">
            Check your email for confirmation and further instructions.
          </p>
          <Button 
            onClick={() => setSubmitted(false)}
            className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-slate-700/40 backdrop-blur-md border border-blue-500/40 ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white text-center flex items-center justify-center">
          <Globe className="w-8 h-8 mr-3 text-blue-400" />
          Join the Global AI Hackathon
        </CardTitle>
        <p className="text-slate-300 text-center">
          Apply now to be part of the world's premier AI innovation event
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white flex items-center">
                <User className="w-4 h-4 mr-2" />
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white flex items-center">
                <User className="w-4 h-4 mr-2" />
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="john.doe@university.edu"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="university" className="text-white flex items-center">
                <Briefcase className="w-4 h-4 mr-2" />
                University/Organization *
              </Label>
              <Input
                id="university"
                name="university"
                type="text"
                required
                value={formData.university}
                onChange={handleInputChange}
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="MIT, Stanford, etc."
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-white flex items-center">
                <Code className="w-4 h-4 mr-2" />
                Programming Experience *
              </Label>
              <Select value={formData.experience} onValueChange={(value) => handleSelectChange('experience', value)}>
                <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                  <SelectValue placeholder="Select your level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (2-4 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                  <SelectItem value="expert">Expert (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-white flex items-center">
                <Trophy className="w-4 h-4 mr-2" />
                Preferred Track *
              </Label>
              <Select value={formData.track} onValueChange={(value) => handleSelectChange('track', value)}>
                <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                  <SelectValue placeholder="Choose a track" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai-research">AI Research & Innovation</SelectItem>
                  <SelectItem value="ai-applications">AI Applications</SelectItem>
                  <SelectItem value="ai-infrastructure">AI Infrastructure</SelectItem>
                  <SelectItem value="ai-safety">AI Safety & Ethics</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-white flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Team Size Preference
            </Label>
            <Select value={formData.teamSize} onValueChange={(value) => handleSelectChange('teamSize', value)}>
              <SelectTrigger className="bg-slate-800/50 border-slate-600 text-white">
                <SelectValue placeholder="How many team members?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solo">Solo (just me)</SelectItem>
                <SelectItem value="small">Small team (2-3 people)</SelectItem>
                <SelectItem value="medium">Medium team (4-5 people)</SelectItem>
                <SelectItem value="any">Any size is fine</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="motivation" className="text-white">
              What motivates you to join this hackathon? *
            </Label>
            <Textarea
              id="motivation"
              name="motivation"
              required
              value={formData.motivation}
              onChange={handleInputChange}
              className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 min-h-[100px]"
              placeholder="Tell us about your passion for AI and what you hope to achieve..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email || !formData.university || !formData.experience || !formData.track || !formData.motivation}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed py-3 text-lg font-semibold"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting Application...
              </div>
            ) : (
              'Submit Application'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default HackathonSignup; 