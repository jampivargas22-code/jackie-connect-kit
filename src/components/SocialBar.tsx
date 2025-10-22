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
    url: "https://wa.me/573216122300?text=Hey%20Jackie!%20Ready%20to%20explore%20Medellín%20🇨🇴",
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
  // Social media icons are hidden for now
  return null;
}

export function WhatsAppButton({ className = "", children = "Chat on WhatsApp", onClick }: { className?: string; children?: React.ReactNode; onClick?: () => void }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open("https://wa.me/573216122300?text=Hey%20Jackie!%20I'm%20looking%20for%20transportation%20or%20private%20tours%20in%20Medellin", "_blank");
    }
  };

  return (
    <Button
      variant="whatsapp"
      size="lg"
      className={`hover:scale-105 hover:rotate-2 transition-bounce shadow-fun hover:shadow-hover ${className}`}
      onClick={handleClick}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {children}
    </Button>
  );
}