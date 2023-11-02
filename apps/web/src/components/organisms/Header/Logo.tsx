import React from "react";
import { tv } from "tailwind-variants";
import { Alien } from "@phosphor-icons/react";
import Link from "next/link";

import { Typography } from "@DS/index";

const slots = {
  container: "space-x-2 hover:opacity-70",
  icon: `inline-block ${Typography.styles.colors.primary}`,
  title: `text-lg font-serif ${Typography.styles.colors.primary}`,
};

const headerLogo = tv({
  slots,
});

const { container, icon, title } = headerLogo();

export function HeaderLogo() {
  return (
    <Link href="/" className={container()}>
      <Alien className={icon()} size="30" />
      <strong className={title()}>insane blog.</strong>
    </Link>
  );
}
