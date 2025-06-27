import React, { useState, useEffect } from 'react';

interface ProductionCaptchaProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
}

export const ProductionCaptcha: React.FC<ProductionCaptchaProps> = ({
  onVerify,
  onError,
  onExpire,
  className = ''
}) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Try to load Cloudflare Turnstile
    const loadTurnstile = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        
        if (document.querySelector('script[src*="challenges.cloudflare.com"]')) {
          // Script already exists, try to render
          setTimeout(() => tryRenderTurnstile(), 100);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          setTimeout(() => tryRenderTurnstile(), 100);
        };
        
        script.onerror = () => {
          setIsLoading(false);
          setHasError(true);
          onError?.();
        };
        
        document.head.appendChild(script);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
        onError?.();
      }
    };

    const tryRenderTurnstile = () => {
      const container = document.getElementById('production-turnstile');
      if (container && (window as any).turnstile) {
        try {
          const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAABiVvmyGjdHpD_SA';
          
          (window as any).turnstile.render(container, {
            sitekey: siteKey,
            theme: 'dark',
            size: 'normal',
            callback: (token: string) => {
              setIsVerified(true);
              setIsLoading(false);
              onVerify(token);
            },
            'error-callback': () => {
              setIsLoading(false);
              setHasError(true);
              onError?.();
            },
            'expired-callback': () => {
              setIsVerified(false);
              onExpire?.();
            }
          });
          
          // Check if widget loaded successfully
          setTimeout(() => {
            if (container.children.length === 0 || container.innerHTML.trim() === '') {
              setIsLoading(false);
              setHasError(true);
              onError?.();
            } else {
              setIsLoading(false);
            }
          }, 2000);
          
        } catch (error) {
          setIsLoading(false);
          setHasError(true);
          onError?.();
        }
      } else {
        setIsLoading(false);
        setHasError(true);
        onError?.();
      }
    };

    loadTurnstile();
  }, [onVerify, onError, onExpire]);

  return (
    <div className={`${className}`}>
      {/* Loading State */}
      {isLoading && !hasError && !isVerified && (
        <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-xl p-6 border border-slate-500/30 shadow-lg">
          <div className="flex items-center justify-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            <span className="text-slate-300">Sicherheitsüberprüfung wird geladen...</span>
          </div>
        </div>
      )}

      {/* Cloudflare Turnstile */}
      {!hasError && (
        <div 
          id="production-turnstile" 
          className="flex justify-center mb-4"
          style={{ minHeight: isLoading ? '0px' : '65px' }}
        />
      )}
      
      {/* Error State */}
      {hasError && !isVerified && (
        <div className="bg-gradient-to-r from-red-800/40 to-red-700/40 rounded-xl p-6 border border-red-500/30 shadow-lg">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-red-400 font-medium mb-2">Sicherheitsüberprüfung nicht verfügbar</h3>
            <p className="text-red-300 text-sm mb-4">
              Die Sicherheitsüberprüfung konnte nicht geladen werden. Bitte versuche es später erneut oder kontaktiere uns direkt.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
            >
              Seite neu laden
            </button>
          </div>
        </div>
      )}
      
      {/* Success State */}
      {isVerified && (
        <div className="bg-gradient-to-r from-green-800/40 to-green-700/40 rounded-xl p-4 border border-green-500/30 shadow-lg">
          <div className="flex items-center justify-center space-x-2 text-green-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Sicherheitsüberprüfung erfolgreich</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductionCaptcha; 