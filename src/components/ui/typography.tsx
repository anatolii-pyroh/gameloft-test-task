"use client";

import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

import { cn } from "@/lib/common.lib";

export interface TypographyProps
  extends PropsWithChildren,
    VariantProps<typeof variantsClasses> {
  className?: string;
  as?: React.ElementType;
  onClick?: () => void;
}

const sizeComponentMap: Record<
  NonNullable<TypographyProps["size"]>,
  React.ElementType
> = {
  xs: "small",
  sm: "small",
  md: "div",
  lg: "h4",
  xl: "h2",
};

const variantsClasses = cva(["inline-block cursor-auto"], {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    color: {
      default: "text-black",
    },
    fontWeight: {
      default: "font-semibold",
      medium: "font-medium",
      normal: "font-normal",
    },
  },
});

const Typography = ({
  className,
  size = "md",
  color = "default",
  fontWeight = "default",
  as: ComponentProp,
  onClick,
  ...props
}: TypographyProps) => {
  const Component = ComponentProp || sizeComponentMap[size || "md"];

  return (
    <Component
      className={cn(variantsClasses({ size, color, fontWeight }), className)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    />
  );
};

export { Typography };
