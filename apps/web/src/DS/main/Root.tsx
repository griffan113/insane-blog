import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type MainRootProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function MainRoot({ children, className }: MainRootProps) {
  return (
    <main
      className={twMerge(
        `flex flex-1 mx-auto max-w-3xl flex-col items-center justify-center`,
        className
      )}
    >
      {children}
    </main>
  );
}
