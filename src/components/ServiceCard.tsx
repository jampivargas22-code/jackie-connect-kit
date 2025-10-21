import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  className?: string;
  onClick?: () => void;
}

export function ServiceCard({ id, title, description, price, image, features, className = "", onClick }: ServiceCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBookClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    navigate(`/checkout?service=${id}&name=${encodeURIComponent(title)}`);
  };
  
  return (
    <Card className={`group relative overflow-hidden bg-gradient-card border-0 shadow-hover hover:shadow-glow transition-elastic hover:-translate-y-2 hover:scale-105 cursor-pointer ${className}`} onClick={onClick}>
      {/* Floating sparkles */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <Sparkles className="w-5 h-5 text-primary animate-wiggle" />
      </div>
      
      <CardHeader className="text-center pb-4">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-fun rounded-full flex items-center justify-center shadow-glow group-hover:animate-bounce-in group-hover:rotate-12 transition-elastic overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-full" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground font-display group-hover:text-primary transition-smooth">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base leading-relaxed">
          {description}
        </CardDescription>
        <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent font-display">
          {price}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
              <div className="w-3 h-3 bg-gradient-secondary rounded-full mt-2 flex-shrink-0 animate-pulse group-hover:animate-wiggle" />
              <span className="leading-relaxed font-medium">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="fun" size="lg" className="w-full group-hover:scale-105" onClick={handleBookClick}>
          Let's Do This! 🚀
        </Button>
      </CardContent>
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-fun opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-lg" />
    </Card>
  );
}