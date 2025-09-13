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
    url: "https://wa.me/573001234567?text=Hi%20Jackie,%20I'd%20like%20to%20book%20a%20ride",
    color: "text-green-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/jackiemedellin",
    color: "text-pink-600",
  },
  {
    name: "TikTok", 
    icon: Music,
    url: "https://www.tiktok.com/@jackiemedellin",
    color: "text-gray-900",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/jackiemedellin",
    color: "text-blue-600",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@jackiemedellin",
    color: "text-red-600",
  },
];

export function SocialBar({ className = "", compact = false }: SocialBarProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-smooth hover:scale-110 ${social.color}`}
          aria-label={`Follow Jackie on ${social.name}`}
        >
          <social.icon size={compact ? 20 : 24} />
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
      className={className}
      onClick={() => window.open("https://wa.me/573001234567?text=Hi%20Jackie,%20I'd%20like%20to%20book%20a%20ride", "_blank")}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children}
    </Button>
  );
}