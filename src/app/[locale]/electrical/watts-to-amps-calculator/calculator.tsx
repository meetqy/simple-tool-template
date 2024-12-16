"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { MyCardFooter } from "~/components/my-card-footer";
import { CalculateButton } from "~/components/calculate-button";
import MyInput from "~/components/my-input";

const calculateAmps = (watts: number, voltage: number) => {
  return (watts / voltage).toFixed(2);
};

const WattsToAmpsCalculator = () => {
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
        <h1 className="h1">Watts to Amps Calculator</h1>
      </CardHeader>
      <CardBody className="mt-8 gap-8">
        <MyInput
          type="number"
          label="Watts"
          value={watts}
          onChange={(e) => setWatts(e.target.value)}
        />
        <MyInput
          type="number"
          label="Voltage"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
        />

        <CalculateButton onClick={handleCalculate} />
      </CardBody>

      {amps && <MyCardFooter title="Amps">{amps} A</MyCardFooter>}
    </Card>
  );
};

export default WattsToAmpsCalculator;
