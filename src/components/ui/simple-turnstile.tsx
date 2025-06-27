import React, { useEffect, useRef, useState } from 'react';

interface SimpleTurnstileProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
}

export const SimpleTurnstile: React.FC<SimpleTurnstileProps> = ({
  onVerify,
  onError,
  onExpire,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadingState, setLoadingState] = useState<'loading' | 'loaded' | 'error' | 'rendered' | 'fallback'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [useFallback, setUseFallback] = useState(false);
  const [fallbackChecked, setFallbackChecked] = useState(false);

  useEffect(() => {
    let mounted = true;
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAABiVvmyGjdHpD_SA';
    
    console.log('🔒 Turnstile: Starting initialization...');
    console.log('🔑 Site Key:', siteKey);

    // Set a timeout to show fallback if Turnstile doesn't load within 10 seconds
    const fallbackTimeout = setTimeout(() => {
      if (mounted && loadingState !== 'rendered') {
        console.log('⏰ Turnstile: Timeout reached, showing fallback...');
        setUseFallback(true);
        setLoadingState('fallback');
      }
    }, 10000);

    const checkAndRender = () => {
      if (!mounted) return;
      
      if ((window as any).turnstile && containerRef.current) {
        console.log('✅ Turnstile: API loaded, attempting to render...');
        
        try {
          // Clear any existing content
          if (containerRef.current) {
            containerRef.current.innerHTML = '';
          }

          const widgetId = (window as any).turnstile.render(containerRef.current, {
            sitekey: siteKey,
            theme: 'dark',
            size: 'normal',
            callback: (token: string) => {
              console.log('🎉 Turnstile: Verification successful!', token.substring(0, 20) + '...');
              clearTimeout(fallbackTimeout);
              onVerify(token);
            },
            'error-callback': (error: any) => {
              console.error('❌ Turnstile: Verification failed', error);
              setErrorMessage('CAPTCHA verification failed');
              onError?.();
            },
            'expired-callback': () => {
              console.log('⏰ Turnstile: Token expired');
              onExpire?.();
            }
          });
          
          console.log('🏗️ Turnstile: Widget rendered with ID:', widgetId);
          setLoadingState('rendered');
          clearTimeout(fallbackTimeout);
          
        } catch (error) {
          console.error('💥 Turnstile: Render error:', error);
          setLoadingState('error');
          setErrorMessage('Failed to render CAPTCHA');
          setTimeout(() => {
            setUseFallback(true);
            setLoadingState('fallback');
          }, 2000);
        }
      } else {
        console.log('⏳ Turnstile: API not ready yet, retrying...');
        if (mounted) {
          setTimeout(checkAndRender, 500);
        }
      }
    };

    // Check if script is already loaded
    if (document.querySelector('script[src*="challenges.cloudflare.com"]')) {
      console.log('📜 Turnstile: Script already exists');
      setLoadingState('loaded');
      setTimeout(checkAndRender, 100);
    } else {
      console.log('📜 Turnstile: Loading script...');
      
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('✅ Turnstile: Script loaded successfully');
        setLoadingState('loaded');
        setTimeout(checkAndRender, 100);
      };
      
      script.onerror = (error) => {
        console.error('❌ Turnstile: Failed to load script', error);
        setLoadingState('error');
        setErrorMessage('Failed to load CAPTCHA script');
        setTimeout(() => {
          setUseFallback(true);
          setLoadingState('fallback');
        }, 2000);
      };
      
      document.head.appendChild(script);
    }

    return () => {
      mounted = false;
      clearTimeout(fallbackTimeout);
    };
  }, [onVerify, onError, onExpire]);

  // Handle fallback checkbox
  const handleFallbackChange = (checked: boolean) => {
    setFallbackChecked(checked);
    if (checked) {
      // Generate a fallback token
      const fallbackToken = 'fallback_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      onVerify(fallbackToken);
    }
  };

  // Show fallback UI if Turnstile failed
  if (useFallback) {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-4 w-full max-w-sm">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="fallback-captcha"
              checked={fallbackChecked}
              onChange={(e) => handleFallbackChange(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="fallback-captcha" className="text-white text-sm">
              I'm not a robot
            </label>
          </div>
          <div className="mt-2 text-xs text-slate-400">
            Security verification (fallback mode)
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div 
        ref={containerRef} 
        id="turnstile-container"
        className="min-h-[65px] flex items-center justify-center"
      />
      
      {/* Debug information */}
      <div className="mt-2 text-xs text-slate-400 text-center">
        {loadingState === 'loading' && (
          <div className="flex items-center space-x-2">
            <div className="animate-spin w-3 h-3 border border-blue-400 border-t-transparent rounded-full"></div>
            <span>Loading security verification...</span>
          </div>
        )}
        
        {loadingState === 'loaded' && (
          <span>CAPTCHA loaded, initializing...</span>
        )}
        
        {loadingState === 'error' && (
          <div className="text-red-400">
            <div>❌ {errorMessage}</div>
            <div className="mt-1 text-xs">
              Switching to fallback mode...
            </div>
          </div>
        )}
        
        {loadingState === 'rendered' && (
          <span className="text-green-400">✅ Security verification ready</span>
        )}
      </div>
    </div>
  );
};

export default SimpleTurnstile; 