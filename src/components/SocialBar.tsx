import { Phone, MessageCircle, Instagram, Music, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialBarProps {
  className?: string;
  compact?: boolean;
}

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/573001234567?text=Hey%20Jackie!%20Ready%20to%20explore%20Medellín%20🇨🇴",
    color: "text-green-500 hover:text-green-600",
    bgColor: "hover:bg-green-50",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/jackiemedellin",
    color: "text-pink-500 hover:text-pink-600",
    bgColor: "hover:bg-pink-50",
  },
  {
    name: "TikTok", 
    icon: Music,
    url: "https://www.tiktok.com/@jackiemedellin",
    color: "text-gray-800 hover:text-black",
    bgColor: "hover:bg-gray-50",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/jackiemedellin",
    color: "text-blue-500 hover:text-blue-600",
    bgColor: "hover:bg-blue-50",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@jackiemedellin",
    color: "text-red-500 hover:text-red-600",
    bgColor: "hover:bg-red-50",
  },
];

export function SocialBar({ className = "", compact = false }: SocialBarProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            w-${compact ? '10' : '12'} h-${compact ? '10' : '12'} 
            rounded-full flex items-center justify-center
            transition-elastic hover:scale-110 hover:rotate-12 
            ${social.color} ${social.bgColor}
            shadow-sm hover:shadow-fun
            animate-bounce-in
          `}
          style={{animationDelay: `${index * 0.1}s`}}
          aria-label={`Follow Jackie on ${social.name}`}
        >
          <social.icon size={compact ? 18 : 22} />
        </a>
      ))}
    </div>
  );
}

export function WhatsAppButton({ className = "", children = "Chat on WhatsApp" }: { className?: string; children?: React.ReactNode }) {
  return (
    <Button 
      variant="whatsapp" 
      size="lg" 
      className={`hover:scale-105 hover:rotate-2 transition-bounce shadow-fun hover:shadow-hover ${className}`}
      onClick={() => window.open("https://wa.me/573001234567?text=Hey%20Jackie!%20Ready%20to%20explore%20Medellín%20🇨🇴", "_blank")}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children}
    </Button>
  );
}