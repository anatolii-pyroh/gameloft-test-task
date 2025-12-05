import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";

import { Loader } from "@/icons";
import { cn } from "@/lib/common.lib";

import { Icon } from "@/components/ui/icon";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-full transition-colors",
    "whitespace-nowrap text-sm font-semibold",
    "hover:shadow-none",
    "touch-manipulation",
  ],
  {
    variants: {
      variant: {
        default: "bg-black text-white shadow-md hover:bg-black/80",
        success:
          "bg-supportive-1 text-white shadow-md hover:bg-supportive-1/80",
        destructive:
          "bg-destructive text-white shadow-md hover:bg-destructive/80",
      },
      size: {
        sm: "h-8",
        md: "h-10",
        lg: "h-12",
      },
      withIcon: {
        true: "",
        false: "",
      },
      iconOnly: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { size: "sm", withIcon: false, iconOnly: false, className: clsx("px-4") },
      { size: "md", withIcon: false, iconOnly: false, className: clsx("px-4") },
      {
        size: "lg",
        withIcon: false,
        iconOnly: false,
        className: clsx("min-w-[130px] px-6"),
      },
      { size: "sm", withIcon: true, className: clsx("pl-2 pr-4") },
      { size: "md", withIcon: true, className: clsx("pl-3 pr-4") },
      {
        size: "lg",
        withIcon: true,
        className: clsx("min-w-[130px] pl-3 pr-5"),
      },
      { size: "sm", iconOnly: true, className: clsx("w-8") },
      { size: "md", iconOnly: true, className: clsx("w-10") },
      { size: "lg", iconOnly: true, className: clsx("w-12") },
    ],
  },
);

const iconSizeMap = {
  sm: "sm",
  md: "md",
  lg: "md",
} as const;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, "iconOnly" | "withIcon"> {
  loading?: boolean;
  asChild?: boolean;
  svg?: React.ComponentProps<typeof Icon>["svg"];
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "lg",
      svg,
      children,
      asChild = false,
      disabled,
      loading,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const withIcon = !!svg || !!loading;

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
            withIcon: withIcon && !!children,
            iconOnly: !children && !!svg,
          }),
        )}
        ref={ref}
        type={type}
        disabled={disabled || loading}
        {...props}
      >
        {withIcon ? (
          <>
            <Icon
              className={clsx(
                "text-current",
                loading ? "animate-[spin_3s_linear_infinite]" : "",
              )}
              svg={loading ? Loader : svg}
              size={size ? iconSizeMap[size] : undefined}
            />

            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
