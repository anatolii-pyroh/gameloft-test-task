import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/common.lib";

const badgeVariants = cva(
  ["inline-flex items-center rounded-full border px-3 py-0.5"],
  {
    variants: {
      variant: {
        default: "border-transparent bg-black text-white",
        success: "border-transparent bg-supportive-1 text-white",
      },
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

Badge.displayName = "Badge";

export { Badge, badgeVariants };
