import React from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact';
}

export const TurnstileWidget: React.FC<TurnstileWidgetProps> = ({
  onVerify,
  onError,
  onExpire,
  className = '',
  theme = 'dark',
  size = 'normal'
}) => {
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAABiVvmyGjdHpD_SA';
  
  return (
    <div className={`flex justify-center ${className}`}>
      <Turnstile
        siteKey={siteKey}
        onSuccess={onVerify}
        onError={onError}
        onExpire={onExpire}
        options={{
          theme,
          size,
        }}
      />
    </div>
  );
};

export default TurnstileWidget; 