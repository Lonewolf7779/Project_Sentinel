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
      className={`relative rounded-2xl bg-[#0F141C]/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 ${
        bordered ? 'border border-white/[0.07]' : ''
      } ${
        hoverEffect
          ? 'hover:border-accent/30 hover:bg-[#141B26]/90 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:-translate-y-1'
          : ''
      } ${
        glow ? 'shadow-[0_0_30px_-5px_rgba(56,189,248,0.1)]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
