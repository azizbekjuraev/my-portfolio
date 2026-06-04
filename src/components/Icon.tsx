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

const icons = {
  'arrow-up-right': ArrowUpRight,
  'x': X,
  'github': Github,
  'linkedin': Linkedin,
  'send': Send,
  'mail': Mail,
  'chevron-right': ChevronRight,
  'check': CheckCircle2,
  'terminal': Terminal,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 20, className }: IconProps) {
  const Component = icons[name];
  return <Component size={size} className={className} strokeWidth={1.75} />;
}
