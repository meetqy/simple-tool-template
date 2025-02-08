"use client";

import { Button, Input, Card, CardBody, CardHeader } from "@heroui/react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export const Calculator = () => {
  const t = useTranslations("kd-calculator-kill-to-death-ratio");
  const [kills, setKills] = useState<number>(0);
  const [deaths, setDeaths] = useState<number>(0);

  const calculateKD = () => {
    if (deaths === 0) return kills;
    return (kills / deaths).toFixed(2);
  };

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader className="flex flex-col gap-2">
        <h1 className="text-center text-2xl font-bold">K/D Calculator</h1>
        <p className="text-center text-sm text-gray-500">{t("description")}</p>
      </CardHeader>

      <CardBody className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Input
            type="number"
            label="Kills"
            placeholder="Enter number of kills"
            value={kills.toString()}
            onChange={(e) => setKills(Number(e.target.value))}
            min={0}
          />

          <Input
            type="number"
            label="Deaths"
            placeholder="Enter number of deaths"
            value={deaths.toString()}
            onChange={(e) => setDeaths(Number(e.target.value))}
            min={0}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">K/D Ratio</p>
            <p className="text-3xl font-bold">{calculateKD()}</p>
          </div>

          <Button
            color="primary"
            className="w-full"
            onClick={() => {
              setKills(0);
              setDeaths(0);
            }}
          >
            Reset
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
