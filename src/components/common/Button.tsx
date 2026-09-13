import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-normal tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-full select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5 min-h-[36px]',
    md: 'text-sm px-6 py-3 gap-2 min-h-[44px]',
    lg: 'text-sm sm:text-base px-8 py-3.5 gap-2.5 min-h-[50px]',
  };

  const variantStyles = {
    primary:
      'bg-accent text-background-deeper font-medium shadow-[0_0_20px_-3px_rgba(56,189,248,0.35)] hover:bg-[#7dd3fc] hover:shadow-[0_0_25px_0px_rgba(56,189,248,0.5)] border border-transparent',
    secondary:
      'bg-white/[0.04] text-text-primary border border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:text-white backdrop-blur-md',
    ghost:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/[0.04]',
    outline:
      'bg-transparent text-text-primary border border-accent/40 hover:border-accent hover:bg-accent/5',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </button>
  );
};
