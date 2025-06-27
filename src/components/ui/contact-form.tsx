import React, { useState } from 'react';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Mail } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  description?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  title = "Get in Touch",
  description = "Send us a message and we'll get back to you as soon as possible.",
  className = ""
}) => {
  const handleSubmit = () => {
    // Create email with partnership-specific subject
    const subject = encodeURIComponent('Global AI Hackathon 2025 - Partnership Inquiry');
    
    // Open email client with pre-filled subject
    window.location.href = `mailto:lbieske@mit.edu?subject=${subject}`;
  };



  return (
    <Card className={`bg-slate-700/40 backdrop-blur-md border border-slate-600/40 ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white text-center">{title}</CardTitle>
        <p className="text-slate-300 text-center">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Send Email Button */}
        <div className="text-center">
          <Button
            onClick={handleSubmit}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg transition-all duration-300 shadow-lg font-semibold hover:scale-105"
          >
            <Mail className="mr-3 w-5 h-5" />
            Send Partnership Email
          </Button>
          <p className="text-sm text-slate-400 mt-3">
            This will open your email client with the recipient and subject line already filled in
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm; 