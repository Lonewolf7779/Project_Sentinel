import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'glass';
  hasDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'accent',
  hasDot = true,
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-background-elevated text-text-secondary border border-border-card',
    accent: 'bg-accent-soft text-accent border border-accent-border font-medium',
    outline: 'bg-transparent text-text-secondary border border-border-card',
    glass: 'bg-background-surface/80 text-text-secondary border border-border-card backdrop-blur-md',
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[13px] tracking-wider uppercase select-none transition-colors ${variantStyles[variant]} ${className}`}
    >
      {hasDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
      )}
      <span>{children}</span>
    </div>
  );
};
