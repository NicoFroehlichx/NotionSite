import React, { useState, useEffect } from 'react';

interface TestCaptchaProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
}

export const TestCaptcha: React.FC<TestCaptchaProps> = ({
  onVerify,
  onError,
  onExpire,
  className = ''
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showTurnstile, setShowTurnstile] = useState(false);

  useEffect(() => {
    // Versuche Turnstile zu laden
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    
    console.log('🚀 TestCaptcha: Attempting to load Cloudflare script...');
    
    script.onload = () => {
      console.log('✅ TestCaptcha: Cloudflare script loaded successfully');
      console.log('📊 Window.turnstile:', (window as any).turnstile);
      
      setTimeout(() => {
        if ((window as any).turnstile) {
          console.log('🎯 TestCaptcha: Turnstile API is available');
          setShowTurnstile(true);
          
          // Versuche das Widget zu rendern
          const container = document.getElementById('test-turnstile-container');
          if (container) {
            try {
              const siteKey = '0x4AAAAABiVvmyGjdHpD_SA';
              console.log('🔑 TestCaptcha: Rendering with siteKey:', siteKey);
              
              const widgetId = (window as any).turnstile.render(container, {
                sitekey: siteKey,
                theme: 'dark',
                size: 'normal',
                callback: (token: string) => {
                  console.log('🎉 TestCaptcha: Success!', token);
                  onVerify(token);
                },
                'error-callback': (error: any) => {
                  console.error('❌ TestCaptcha: Error:', error);
                  onError?.();
                },
                'expired-callback': () => {
                  console.log('⏰ TestCaptcha: Expired');
                  onExpire?.();
                }
              });
              
              console.log('🏗️ TestCaptcha: Widget rendered with ID:', widgetId);
              
            } catch (error) {
              console.error('💥 TestCaptcha: Render error:', error);
            }
          }
        } else {
          console.error('❌ TestCaptcha: Turnstile API not available');
        }
      }, 1000);
    };
    
    script.onerror = (error) => {
      console.error('💥 TestCaptcha: Script loading failed:', error);
    };
    
    if (!document.querySelector('script[src*="challenges.cloudflare.com"]')) {
      document.head.appendChild(script);
    } else {
      console.log('📜 TestCaptcha: Script already exists');
      // Trigger the onload manually
      script.onload(new Event('load'));
    }
  }, [onVerify, onError, onExpire]);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
    if (checked) {
      console.log('✅ TestCaptcha: Checkbox verified');
      onVerify('checkbox_verified_' + Date.now());
    }
  };

  return (
    <div className={`${className}`}>
      {/* Debug-Informationen */}
      <div className="bg-blue-900/20 border border-blue-500/40 rounded-lg p-4 mb-4">
        <h3 className="text-blue-300 font-semibold mb-2">🔧 CAPTCHA Debug Info</h3>
        <div className="text-xs text-blue-200 space-y-1">
          <div>Site Key: 0x4AAAAABiVvmyGjdHpD_SA</div>
          <div>Turnstile Available: {(window as any).turnstile ? '✅ Yes' : '❌ No'}</div>
          <div>Show Turnstile: {showTurnstile ? '✅ Yes' : '❌ No'}</div>
        </div>
      </div>

      {/* Cloudflare Turnstile Container */}
      <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-4 mb-4">
        <div className="text-white font-semibold mb-2">🔒 Cloudflare Turnstile</div>
        <div 
          id="test-turnstile-container"
          className="min-h-[80px] border-2 border-dashed border-slate-500 rounded flex items-center justify-center"
        >
          <span className="text-slate-400">Turnstile Widget should appear here</span>
        </div>
      </div>

      {/* Fallback Checkbox */}
      <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-4">
        <div className="text-white font-semibold mb-2">🔧 Fallback Verification</div>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="test-checkbox"
            checked={isChecked}
            onChange={(e) => handleCheckboxChange(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="test-checkbox" className="text-white">
            I'm not a robot (fallback)
          </label>
        </div>
      </div>
      
      {/* Status */}
      <div className="mt-2 text-xs text-center">
        {isChecked && <span className="text-green-400">✅ Verification complete</span>}
      </div>
    </div>
  );
};

export default TestCaptcha; 