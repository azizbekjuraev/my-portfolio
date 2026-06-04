import React from 'react';
import { Icon, type IconName } from './Icon';

type ButtonProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'invert';
  icon?: IconName;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', icon, children, ...rest }) => (
  <a className={`btn btn-${variant}`} {...rest}>
    {children}
    {icon && <Icon name={icon} size={17} />}
  </a>
);
