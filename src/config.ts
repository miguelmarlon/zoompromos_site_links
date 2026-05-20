/**
 * Zoom Promos - Configuration File
 * Centralize all links and brand information here.
 */

import { Facebook, Instagram, Send, Globe } from 'lucide-react';

export const BRAND_CONFIG = {
  name: "Zoom Promos",
  description: "As melhores promoções, ofertas e oportunidades da internet.",
  logoAlt: "Zoom Promos Logo",
  links: [
    {
      title: "Site Oficial",
      url: "https://www.zoompromos.com.br",
      icon: Globe,
      color: "from-blue-500 to-cyan-400",
      glow: "rgba(6, 182, 212, 0.4)"
    },
    {
      title: "Telegram",
      url: "https://t.me/placeholder",
      icon: Send,
      color: "from-sky-500 to-indigo-500",
      glow: "rgba(14, 165, 233, 0.4)"
    },
    {
      title: "Instagram",
      url: "https://instagram.com/placeholder",
      icon: Instagram,
      color: "from-purple-500 via-pink-500 to-orange-500",
      glow: "rgba(236, 72, 153, 0.4)"
    },
    {
      title: "Facebook",
      url: "https://facebook.com/placeholder",
      icon: Facebook,
      color: "from-blue-600 to-blue-400",
      glow: "rgba(37, 99, 235, 0.4)"
    }
  ]
};
