import { motion } from 'motion/react';
import { SocialButton } from './SocialButton';
import { BRAND_CONFIG } from '../config';
import { Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const LinkTree = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col items-center px-6 py-12 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        className="max-w-md w-full relative z-10 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header section */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
          }}
          className="mb-8 flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 mb-6 border border-white/10 relative group">
            <img 
              src="/images/logo_zoompromos.png" // Insira o link da sua foto aqui
              alt="Zoom Promos"
              className="w-full h-full object-cover relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            {BRAND_CONFIG.name}
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-[280px]">
            {BRAND_CONFIG.description}
          </p>
        </motion.div>

        {/* Links section */}
        <div className="w-full space-y-4 mb-20">
          {BRAND_CONFIG.links.map((link) => (
            <SocialButton key={link.title} {...link} />
          ))}
        </div>

        {/* Footer */}
        <motion.footer 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.8 } }
          }}
          className="mt-auto py-8 text-center"
        >
          <p className="text-zinc-500 text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. Todos os direitos reservados.
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
};
