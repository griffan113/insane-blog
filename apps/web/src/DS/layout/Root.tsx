import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { Typography } from "@DS/index";

type LayoutRootProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function LayoutRoot({ children, className, ...rest }: LayoutRootProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col min-h-screen",
        className,
        Typography.styles.fonts.sans.roboto.variable,
        Typography.styles.fonts.sans.roboto_slab.variable
      )}
    >
      {children}
    </div>
  );
}
