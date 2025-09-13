import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  className?: string;
}

export function ServiceCard({ title, description, price, icon: Icon, features, className = "" }: ServiceCardProps) {
  return (
    <Card className={`relative overflow-hidden bg-gradient-subtle border-0 shadow-elegant hover:shadow-primary transition-smooth hover:-translate-y-1 ${className}`}>
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-primary">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-base">{description}</CardDescription>
        <div className="text-2xl font-bold text-primary">{price}</div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="cta" size="lg" className="w-full">
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}