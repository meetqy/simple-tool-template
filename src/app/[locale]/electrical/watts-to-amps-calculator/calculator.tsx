"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { MyCardFooter } from "~/components/my-card-footer";
import { CalculateButton } from "~/components/calculate-button";
import MyInput from "~/components/my-input";
import { useTranslations } from "next-intl";

const calculateAmps = (watts: number, voltage: number) => {
  return (watts / voltage).toFixed(2);
};

const WattsToAmpsCalculator = () => {
  const t = useTranslations();
  const [watts, setWatts] = useState("");
  const [voltage, setVoltage] = useState("");
  const [amps, setAmps] = useState<string | null>(null);

  const handleCalculate = () => {
    const calculatedAmps = calculateAmps(
      parseFloat(watts),
      parseFloat(voltage),
    );
    setAmps(calculatedAmps);
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <h1 className="h1">{t("watts-to-amps-calculator.title")}</h1>
      </CardHeader>
      <CardBody className="mt-8 gap-8">
        <MyInput
          type="number"
          label={t("watts-to-amps-calculator.watts-w")}
          value={watts}
          onChange={(e) => setWatts(e.target.value)}
        />
        <MyInput
          type="number"
          label={t("watts-to-amps-calculator.voltage-v")}
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
        />

        <CalculateButton onClick={handleCalculate} />
      </CardBody>

      {amps && (
        <MyCardFooter title={t("watts-to-amps-calculator.amps-a")}>
          {amps} A
        </MyCardFooter>
      )}
    </Card>
  );
};

export default WattsToAmpsCalculator;
