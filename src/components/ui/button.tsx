import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-bounce focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-white hover:scale-105 shadow-fun hover:shadow-hover border-0 hover:animate-pulse-glow",
        hero: "bg-gradient-hero text-white hover:scale-110 shadow-hover border-0 font-bold text-lg hover:rotate-1 transition-elastic",
        whatsapp: "bg-green-500 text-white hover:bg-green-600 hover:scale-105 shadow-fun hover:shadow-hover rounded-full",
        cta: "bg-gradient-secondary text-white hover:scale-105 shadow-secondary hover:shadow-hover border-0 font-bold",
        fun: "bg-gradient-fun text-white hover:scale-105 hover:rotate-2 shadow-glow hover:shadow-hover border-0 font-bold animate-float",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white hover:scale-105 transition-bounce",
        secondary: "bg-gradient-card border border-secondary/20 text-foreground hover:bg-gradient-secondary hover:text-white hover:scale-105 shadow-secondary",
        ghost: "hover:bg-gradient-card hover:text-primary hover:scale-105 rounded-xl",
        link: "text-primary underline-offset-4 hover:underline hover:text-secondary transition-pop",
        instagram: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:scale-105 shadow-fun rounded-full",
        tiktok: "bg-black text-white hover:bg-gray-800 hover:scale-105 shadow-fun rounded-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
