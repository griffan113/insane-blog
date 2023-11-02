import React from "react";
import { tv } from "tailwind-variants";

import HeaderNavigationLink from "./Link";

const headerNavigationRoot = tv({
  base: "space-x-4",
  variants: {
    hidden: {
      true: "hidden",
    },
  },
});

type HeaderNavigationRootProps = {
  className?: string;
  hidden?: boolean;
};

export function HeaderNavigationRoot({
  className,
  hidden = false,
}: HeaderNavigationRootProps) {
  return (
    <div className={headerNavigationRoot({ className, hidden })}>
      <HeaderNavigationLink title="Posts" href="/posts" />
      <HeaderNavigationLink title="Contato" href="/contato" />
    </div>
  );
}
