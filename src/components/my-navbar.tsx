"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { CalculatorIcon } from "lucide-react";

export const MyNavbar = () => {
  return (
    <Navbar maxWidth="xl">
      <NavbarBrand className="space-x-1">
        <CalculatorIcon className="text-primary h-6 w-6" />
        <p className="font-serif font-bold italic text-inherit">
          HowToCalculator
        </p>
      </NavbarBrand>
    </Navbar>
  );
};
