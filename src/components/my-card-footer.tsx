import { CardFooter } from "@nextui-org/react";
import { type ReactNode } from "react";

export const MyCardFooter = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <CardFooter className="mt-12 flex flex-col items-center justify-center rounded-md bg-foreground p-4 text-background">
    <h2 className="h2 border-0">{title}</h2>
    <p className="mt-4 font-mono text-5xl text-warning">{children}</p>
  </CardFooter>
);
