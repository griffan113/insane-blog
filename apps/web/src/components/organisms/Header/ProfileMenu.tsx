import React from "react";
import Link from "next/link";
import { User, SignOut, Moon, Sun } from "@phosphor-icons/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "shadcn";
import useColorScheme from "@src/hooks/ColorMode/useColorMode";

export function ProfileMenu() {
  const { colorScheme, toggle } = useColorScheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/griffan113.png" />
          <AvatarFallback>EL</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <Link href="/perfil">
          <DropdownMenuItem>
            <User className="mr-2" size={15} />
            <span>Perfil</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={toggle}>
          {colorScheme === "dark" ? (
            <Moon className="mr-2" size={15} />
          ) : (
            <Sun className="mr-2" size={15} />
          )}
          <span>Modo {colorScheme === "dark" ? "Escuro" : "Claro"}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOut className="mr-2" size={15} />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
