import React from 'react';
import { Icon } from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'invert';
  children: React.ReactNode;
  href?: string;
  icon?: any; 
  onClick?: (e: React.MouseEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  href, 
  icon, 
  onClick, 
  ...rest 
}) => {
  const cls = `btn btn-${variant}`;
  const content = (
    <>
      {children}
      {icon ? <Icon name={icon} size={17} /> : null}
    </>
  );

  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick as any} {...(rest as any)}>
        {content}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};
