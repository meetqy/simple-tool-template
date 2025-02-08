"use client";

import { Link as LinkUi, Navbar, NavbarBrand } from "@nextui-org/react";
import { Link } from "~/i18n/routing";
import { Icon } from "@iconify/react";

export const MyNavbar = () => {
  return (
    <Navbar maxWidth="xl">
      <NavbarBrand className="relative">
        <Icon className="size-8" icon={"token-branded:kda"} />
        <LinkUi
          as={Link}
          className="absolute -bottom-1 left-7 font-serif text-xl font-bold italic text-inherit"
          href="/"
        >
          DCalculator
        </LinkUi>
      </NavbarBrand>
    </Navbar>
  );
};
