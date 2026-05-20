import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  title: string;
  url: string;
  icon: LucideIcon;
  color: string;
  glow: string;
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const SocialButton = ({ title, url, icon: Icon, color, glow }: SocialButtonProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={variants}
      id={`link-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="relative w-full group"
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
    >
      {/* Glow Effect */}
      <div 
        className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500"
        style={{ backgroundColor: glow }}
      />
      
      {/* Button Content */}
      <div className={`relative flex items-center justify-between w-full p-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300`}>
        <div className="flex items-center space-x-4">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${color} shadow-lg shadow-black/20`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-zinc-100 font-medium text-lg tracking-tight">{title}</span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};
