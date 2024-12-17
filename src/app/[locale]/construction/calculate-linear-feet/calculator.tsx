"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import MyInput from "~/components/my-input";
import { CalculateButton } from "~/components/calculate-button";
import { useTranslations } from "next-intl";

const Calculator = () => {
  const t = useTranslations();
  const [width, setWidth] = useState("");
  const [squareFeet, setSquareFeet] = useState("");
  const [linearFeet, setLinearFeet] = useState("");

  const handleCalculate = () => {
    const widthInInches = parseFloat(width);
    const areaInSquareFeet = parseFloat(squareFeet);

    if (
      !isNaN(widthInInches) &&
      !isNaN(areaInSquareFeet) &&
      widthInInches > 0
    ) {
      const linearFeetResult = (areaInSquareFeet * 12) / widthInInches;
      setLinearFeet(linearFeetResult.toFixed(2));
    } else {
      setLinearFeet("Invalid input");
    }
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <h1 className="h1">{t("calculate-linear-feet.title")}</h1>
      </CardHeader>
      <CardBody className="mt-8 gap-8">
        <MyInput
          type="number"
          label={t("calculate-linear-feet.width-inches")}
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <MyInput
          type="number"
          label={t("calculate-linear-feet.square-feet")}
          value={squareFeet}
          onChange={(e) => setSquareFeet(e.target.value)}
        />

        <CalculateButton onClick={handleCalculate} />
      </CardBody>

      {linearFeet && (
        <CardFooter className="mt-12 flex flex-col items-center justify-center rounded-md bg-foreground p-4 text-background">
          <h2 className="h2 border-0">
            {t("calculate-linear-feet.linear-feet")}
          </h2>
          <p className="mt-4 font-mono text-5xl text-warning">{linearFeet} </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default Calculator;
