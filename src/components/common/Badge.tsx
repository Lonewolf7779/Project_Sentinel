import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'glass';
  hasDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'glass',
  hasDot = true,
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-background-elevated text-text-secondary border border-border-subtle',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    outline: 'bg-transparent text-text-secondary border border-white/10',
    glass: 'bg-white/[0.03] text-text-secondary border border-white/[0.08] backdrop-blur-md',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-normal tracking-wider uppercase ${variantStyles[variant]} ${className}`}
    >
      {hasDot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
        </span>
      )}
      <span>{children}</span>
    </div>
  );
};
