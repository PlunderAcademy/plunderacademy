import * as React from "react";

// Drop-in replacement for next/image rendering a plain <img>.
// Supports the next/image props used in this codebase (fill, priority,
// sizes, unoptimized); images are served as static assets.
type ImageProps = Omit<React.ComponentPropsWithoutRef<"img">, "src"> & {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
  quality?: number;
};

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ fill, priority, unoptimized: _unoptimized, quality: _quality, style, ...props }, ref) => {
    const fillStyle: React.CSSProperties | undefined = fill
      ? {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          ...style,
        }
      : style;

    return (
      <img
        ref={ref}
        loading={priority ? "eager" : props.loading}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        style={fillStyle}
        {...props}
      />
    );
  }
);
Image.displayName = "Image";

export default Image;
