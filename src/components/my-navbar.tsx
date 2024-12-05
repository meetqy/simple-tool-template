"use client";

import { Link as LinkUi, Navbar, NavbarBrand } from "@nextui-org/react";
import { CalculatorIcon } from "lucide-react";
import { Link } from "~/i18n/routing";

export const MyNavbar = () => {
  return (
    <Navbar maxWidth="xl">
      <NavbarBrand className="space-x-2">
        <CalculatorIcon className="h-6 w-6 text-primary" />
        <LinkUi
          as={Link}
          className="font-serif text-xl font-bold italic text-inherit"
          href="/"
        >
          HowToCalculator
        </LinkUi>
      </NavbarBrand>
    </Navbar>
  );
};
