"use client";

/**
 * For SEO optimization, we put the Tool component in a separate file and set `use client`.
 *
 * You can chat with AI in this file, tell it what tool you want to make,
 *
 * Example:
 * RMB exchange rate calculator,
 * design it beautifully using HERO's design scheme and heroui components.
 */

import {
  Button,
  Input,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@heroui/react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export const Tool = () => {
  const t = useTranslations();
  const [kills, setKills] = useState<number>(0);
  const [deaths, setDeaths] = useState<number>(0);
  const [assists, setAssists] = useState<number>(0);

  const calculateKDA = () => {
    if (deaths === 0) return (kills + assists).toFixed(2);
    return ((kills + assists) / deaths).toFixed(2);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 p-4">
      <Card className="w-full max-w-xl bg-white/90 shadow-2xl backdrop-blur-md">
        <CardHeader className="flex flex-col gap-4 bg-gradient-to-r from-blue-600 to-purple-600 p-8">
          <h1 className="text-center text-4xl font-bold text-white">
            Simple Tool Template
          </h1>
          <p className="text-center text-white/80">{t("Site.description")}</p>
        </CardHeader>

        <CardBody className="flex flex-col gap-8 p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Input
              type="number"
              label="Kills"
              placeholder="0"
              value={kills.toString()}
              onChange={(e) => setKills(Number(e.target.value))}
              min={0}
              size="lg"
              className="text-large"
              startContent={
                <div className="pointer-events-none text-xl text-default-400">
                  K
                </div>
              }
            />

            <Input
              type="number"
              label="Deaths"
              placeholder="0"
              value={deaths.toString()}
              onChange={(e) => setDeaths(Number(e.target.value))}
              min={0}
              size="lg"
              className="text-large"
              startContent={
                <div className="pointer-events-none text-xl text-default-400">
                  D
                </div>
              }
            />

            <Input
              type="number"
              label="Assists"
              placeholder="0"
              value={assists.toString()}
              onChange={(e) => setAssists(Number(e.target.value))}
              min={0}
              size="lg"
              className="text-large"
              startContent={
                <div className="pointer-events-none text-xl text-default-400">
                  A
                </div>
              }
            />
          </div>

          <Divider />

          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="mb-2 text-xl text-gray-600">Your KDA Ratio</p>
              <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-6xl font-bold text-transparent">
                {calculateKDA()}
              </p>
            </div>

            <Button
              color="primary"
              size="lg"
              className="w-full max-w-sm text-lg font-semibold"
              onPress={() => {
                setKills(0);
                setDeaths(0);
                setAssists(0);
              }}
            >
              Reset Calculator
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
