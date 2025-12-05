import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/lib/common.lib";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(
          "rounded-xl bg-background ring-1 ring-border transition",
          "md:hover:ring-4 md:hover:ring-border",
          "p-4 md:rounded-3xl",
          "outline-none",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Card.displayName = "Card";

export { Card };
