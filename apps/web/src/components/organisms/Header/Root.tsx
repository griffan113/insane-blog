import React, { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

import { HeaderLogo } from "./Logo";
import { ProfileMenu } from "./ProfileMenu";
import { HeaderNavigation } from "./Navigation/";
import { Drawer } from "./Drawer/";
import {
  DefaultQueries,
  useMediaQuery,
} from "@src/hooks/MediaQuery/useMediaQuery";

const slots = {
  container:
    "flex justify-center shadow-md bg-zinc-100 dark:bg-zinc-900 py-4 sm:px-4 px-2",
  content: "w-full max-w-3xl flex flex-row justify-between items-center",
  row: "flex gap-5 sm:gap-10 flex-row items-center",
};

const header = tv({
  slots,
});

const { container, content, row } = header();

export function HeaderRoot() {
  const isSm = useMediaQuery(`max-width: ${DefaultQueries.SM}`);

  return (
    <header className={container()}>
      <div className={content()}>
        <section className={row()}>
          <HeaderLogo />
          <HeaderNavigation.Root hidden={isSm} />
        </section>
        <section className={row()}>
          <ProfileMenu />
          <Drawer.Root hidden={!isSm} />
        </section>
      </div>
    </header>
  );
}
