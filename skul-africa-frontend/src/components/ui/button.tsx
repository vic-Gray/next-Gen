import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(229,9,20,0.3)] hover:shadow-[0_0_30px_-5px_rgba(229,9,20,0.5)] hover:-translate-y-0.5",
                secondary: "bg-black text-white border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 hover:-translate-y-0.5",
                outline: "border-2 border-neutral-700 bg-transparent hover:bg-neutral-800 text-white",
                ghost: "hover:bg-white/10 text-neutral-300 hover:text-white",
                destructive: "bg-red-900 text-white hover:bg-red-800 hover:shadow-lg",
            },
            size: {
                sm: "h-9 px-3 text-xs",
                md: "h-10 px-4 py-2",
                lg: "h-12 px-6 py-3 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
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
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
