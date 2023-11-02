import React from "react";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { styles } from "./styles";

const base = "font-medium font-serif text-xl sm:text-2xl";

const typographyH1 = tv({
  base,
});

type TypographyH1Props = {
  children: React.ReactNode;
  className?: string;
};

export function TypographyH1({ children, className }: TypographyH1Props) {
  return (
    <h1 className={twMerge(typographyH1(), className, styles.colors.primary)}>
      {children}
    </h1>
  );
}
