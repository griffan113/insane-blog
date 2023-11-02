import React from "react";
import { List } from "@phosphor-icons/react";
import { tv } from "tailwind-variants";
import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "shadcn";
import HeaderNavigationLink from "../Navigation/Link";
import { Typography } from "@src/DS";

const slots = {
  navigationList: "flex flex-col gap-2",
  sheetTrigger: "",
};

const drawerRoot = tv({
  slots,
  variants: {
    hidden: {
      true: {
        sheetTrigger: "hidden",
      },
    },
  },
});

const { navigationList, sheetTrigger } = drawerRoot();

type DrawerRootProps = {
  hidden?: boolean;
};

export function DrawerRoot({ hidden = false }: DrawerRootProps) {
  return (
    <Sheet>
      <SheetTrigger asChild className={sheetTrigger({ hidden })}>
        <Button variant="ghost" size="icon">
          <List className={Typography.styles.colors.primary} size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navegação</SheetTitle>
          <div className={navigationList()}>
            <HeaderNavigationLink title="Posts" href="/posts" />
            <HeaderNavigationLink title="Contato" href="/contato" />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
