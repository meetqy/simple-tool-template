"use client";

import React, { useState } from "react";
import { Input, Button, Card, CardHeader, CardBody } from "@nextui-org/react";

export const Calculator = () => {
  const [kills, setKills] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [assists, setAssists] = useState(0);
  const [kda, setKda] = useState(0);
  const [kd, setKd] = useState(0);

  const calculateKDA = () => {
    const kdaRatio = (kills + assists) / (deaths || 1); // Avoid division by zero
    const kdRatio = kills / (deaths || 1); // Avoid division by zero
    setKda(Number(kdaRatio.toFixed(2)));
    setKd(Number(kdRatio.toFixed(2)));
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <h1 className="h1">KDA Calculator</h1>
      </CardHeader>
      <CardBody className="mt-8 gap-4 space-y-4">
        <div>
          <Input
            type="number"
            label="Kills"
            placeholder="Kills"
            labelPlacement="outside"
            classNames={{
              label: "!text-lg !font-semibold text-foreground",
            }}
            size="lg"
            value={kills.toString()}
            onChange={(e) => setKills(Number(e.target.value))}
          />
        </div>
        <div>
          <Input
            type="number"
            label="Deaths"
            placeholder="Deaths"
            labelPlacement="outside"
            classNames={{
              label: "!text-lg !font-semibold text-foreground",
            }}
            size="lg"
            value={deaths.toString()}
            onChange={(e) => setDeaths(Number(e.target.value))}
          />
        </div>
        <div>
          <Input
            type="number"
            label="Assists"
            placeholder="Assists"
            labelPlacement="outside"
            classNames={{
              label: "!text-lg !font-semibold text-foreground",
            }}
            size="lg"
            value={assists.toString()}
            onChange={(e) => setAssists(Number(e.target.value))}
          />
        </div>

        <p className="h2">Result</p>

        <div>
          <Input
            type="number"
            label="KDA ratio"
            placeholder="KDA Ratio"
            labelPlacement="outside"
            size="lg"
            value={kda.toString()}
            disabled
            classNames={{
              label: "!text-lg !font-semibold text-foreground !text-primary",
            }}
          />
        </div>

        <div>
          <Input
            type="number"
            label="KD ratio"
            placeholder="KD Ratio"
            labelPlacement="outside"
            size="lg"
            disabled
            value={kd.toString()}
            classNames={{
              label: "!text-lg !font-semibold text-foreground !text-primary",
            }}
          />
        </div>

        <Button
          onClick={calculateKDA}
          size="lg"
          color="primary"
          className="mx-auto w-full max-w-xs"
        >
          Calculate
        </Button>
      </CardBody>
    </Card>
  );
};

export default Calculator;
