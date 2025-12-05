import { cva, type VariantProps } from "class-variance-authority";
import { ElementType, SVGProps, forwardRef } from "react";

import { cn } from "@/lib/common.lib";

const sizes = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
};

const strokeWidths = {
  sm: 1.5,
  md: 1.85,
  lg: 2.15,
  xl: 2.5,
};

const defaultSize = "md";

const iconVariants = cva(
  "size-[var(--size)] shrink-0 [&_path]:stroke-[length:var(--stroke-width)]",
  {
    variants: {
      variant: {
        default: "text-white",
      },
    },
  },
);

export interface IconProps
  extends VariantProps<typeof iconVariants>,
    React.SVGProps<SVGSVGElement> {
  svg: ElementType<SVGProps<SVGSVGElement>>;
  size?: keyof typeof sizes | null;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      className,
      svg: SvgComponent,
      size = defaultSize,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    const absoluteStrokeWidth = size
      ? strokeWidths[size] * (sizes[defaultSize] / sizes[size])
      : 0;

    return (
      <SvgComponent
        className={cn(iconVariants({ variant }), className)}
        style={
          {
            "--size": size ? `${sizes[size]}px` : 0,
            "--stroke-width": absoluteStrokeWidth,
          } as React.CSSProperties
        }
        ref={ref}
        {...props}
      />
    );
  },
);

Icon.displayName = "Icon";

export { Icon, iconVariants };
