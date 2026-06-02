import { 
  ArrowUpRight, 
  X, 
  Github, 
  Linkedin, 
  Send, 
  Mail, 
  ChevronRight, 
  CheckCircle2, 
  Terminal,
  type LucideIcon 
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  'arrow-up-right': ArrowUpRight,
  'x': X,
  'github': Github,
  'linkedin': Linkedin,
  'send': Send,
  'mail': Mail,
  'chevron-right': ChevronRight,
  'check': CheckCircle2,
  'terminal': Terminal,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 20, className }: IconProps) {
  const Component = icons[name];
  if (!Component) return null;
  return <Component size={size} className={className} strokeWidth={1.75} />;
}
