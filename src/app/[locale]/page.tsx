"use client";

import { Link } from "~/i18n/routing";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function HomePage() {
  return (
    <>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            How To Calculator
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-default-500">
            <Link href={"/"} className="text-primary">
              HowToCalculator.com
            </Link>{" "}
            , Solve your calculate problems in life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" color="primary">
              views all calculators
            </Button>
          </div>
        </div>
      </div>
      <main className="container my-12 grid max-w-screen-xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 xl:grid-cols-3">
        <Card className="relative w-full">
          <Link
            className="absolute inset-0 z-20 h-full w-full opacity-0"
            href={"/auto-loan-payoff-calculator"}
          >
            Auto Loan Payoff Calculator
          </Link>
          <CardHeader className="p-0">
            <div className="flex aspect-video w-full items-center justify-center bg-foreground text-background">
              <h2 className="h2 border-0 text-center">
                Auto Loan Payoff Calculator
              </h2>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-center">
              Use our auto loan payoff calculator to estimate your monthly
              payments and payoff date.
            </p>
          </CardBody>
        </Card>
      </main>
    </>
  );
}
