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
      className={`relative rounded-2xl bg-background-surface/95 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 ${
        bordered ? 'border border-border-card' : ''
      } ${
        hoverEffect
          ? 'hover:border-border-card-hover hover:shadow-card-hover hover:-translate-y-1 sm:hover:-translate-y-1.5'
          : ''
      } ${
        glow ? 'shadow-glow' : 'shadow-card'
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
