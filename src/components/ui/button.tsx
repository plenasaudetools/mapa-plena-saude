import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-grafite text-primary-foreground rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md border border-white/10",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 rounded-xl",
        outline:
          "border-2 border-grafite bg-transparent text-grafite hover:bg-grafite hover:text-primary-foreground rounded-xl",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-xl",
        ghost: 
          "hover:bg-grafite/5 text-grafite rounded-xl",
        link: 
          "text-grafite underline-offset-4 hover:underline",
        hero: 
          "bg-primary text-primary-foreground rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 active:translate-y-0 active:shadow-lg font-semibold tracking-wide border border-white/10 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        cta: 
          "bg-gradient-cta text-primary-foreground rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 active:translate-y-0 font-semibold border border-white/20 relative overflow-hidden",
        whatsapp: 
          "bg-[#25D366] text-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-1 active:translate-y-0 font-semibold border border-white/20",
        subtle: 
          "text-grafite-soft hover:text-grafite bg-grafite/5 hover:bg-grafite/10 rounded-xl border border-transparent hover:border-border",
        glass: 
          "bg-white/80 backdrop-blur-xl text-grafite hover:bg-white/90 rounded-xl border border-border/50 shadow-sm hover:shadow-md",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base [&_svg]:size-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };