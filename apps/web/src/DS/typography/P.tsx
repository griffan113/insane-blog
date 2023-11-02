import React, { ReactNode } from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const base = "text-lg font-normal";

const typographyP = tv({
  base,
});

type TypographyPProps = {
  children: ReactNode;
  className?: string;
};

export function TypographyP({ children, className }: TypographyPProps) {
  return <h1 className={twMerge(typographyP(), className)}>{children}</h1>;
}
