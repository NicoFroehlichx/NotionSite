import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff } from 'lucide-react';
import { validateAccess, generateToken } from '@/lib/security';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const PasswordProtection = ({ children }: PasswordProtectionProps) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated with token validation
    const stored = localStorage.getItem('hackathon_auth');
    const token = localStorage.getItem('hackathon_token');
    if (stored === 'authenticated' && token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAccess(password)) {
      const token = generateToken();
      setIsAuthenticated(true);
      localStorage.setItem('hackathon_auth', 'authenticated');
      localStorage.setItem('hackathon_token', token);
      setShowError(false);
    } else {
      setShowError(true);
      setPassword('');
      setTimeout(() => setShowError(false), 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">
              Global AI Hackathon 2025
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Please enter the password to continue
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              {showError && (
                                 <Alert variant="destructive">
                   <AlertDescription>
                     Incorrect password. Please try again.
                   </AlertDescription>
                 </Alert>
              )}
              
                             <Button type="submit" className="w-full">
                 Login
               </Button>
            </form>
            
                         <div className="mt-6 text-center text-sm text-gray-500">
               <p>🔒 This page is password protected</p>
             </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};

export default PasswordProtection; 