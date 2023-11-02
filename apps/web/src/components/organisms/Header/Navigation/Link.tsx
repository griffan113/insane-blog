import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { tv } from "tailwind-variants";

import { Typography } from "@DS/index";

const headerNavigationLink = tv({
  variants: {
    isActive: {
      true: `font-bold underline underline-offset-2 ${Typography.styles.colors.primary}`,
    },
  },
});

type HeaderNavigationLinkProps = {
  title: string;
} & LinkProps;

export default function HeaderNavigationLink({
  title,
  href,
  ...rest
}: HeaderNavigationLinkProps) {
  const { pathname } = useRouter();

  const isActive = pathname === href;

  return (
    <Link href={href} className={headerNavigationLink({ isActive })} {...rest}>
      {title}
    </Link>
  );
}
