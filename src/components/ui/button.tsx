import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-700 text-white shadow-sm hover:bg-brand-800 hover:shadow-md",
        outline:
          "bg-transparent text-foreground border border-border hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800",
        ghost:
          "bg-transparent text-foreground hover:bg-bg-subtle",
        whatsapp:
          "bg-[#25D366] text-white shadow-sm hover:bg-[#1ebe5b] hover:shadow-md",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md",
        md: "h-11 px-5 text-sm rounded-lg",
        lg: "h-13 px-6 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
