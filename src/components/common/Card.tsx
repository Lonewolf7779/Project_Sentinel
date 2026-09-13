import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  bordered?: boolean;
  glow?: boolean;
  as?: 'div' | 'article' | 'section';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  bordered = true,
  glow = false,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={`relative rounded-2xl bg-background-surface/90 dark:bg-[#0F141C]/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 ${
        bordered ? 'border border-border-subtle' : ''
      } ${
        hoverEffect
          ? 'hover:border-accent/40 hover:bg-background-elevated hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1'
          : ''
      } ${
        glow ? 'shadow-[0_0_30px_-5px_rgba(2,132,199,0.12)] dark:shadow-[0_0_30px_-5px_rgba(56,189,248,0.1)]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
