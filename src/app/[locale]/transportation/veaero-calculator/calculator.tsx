"use client";
import React, { useState } from "react";
import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  RadioGroup,
  Radio,
  CardFooter,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";

const calculationTypes = ["lift force", "drag force"];

interface CalculationParams {
  speed: number;
  surfaceArea: number;
  coefficient: number;
  airDensity: number;
}

const calculateLiftForce = ({
  speed,
  surfaceArea,
  coefficient,
  airDensity,
}: CalculationParams): number => {
  return 0.5 * airDensity * speed ** 2 * surfaceArea * coefficient;
};

const calculateDragForce = ({
  speed,
  surfaceArea,
  coefficient,
  airDensity,
}: CalculationParams): number => {
  return 0.5 * airDensity * speed ** 2 * surfaceArea * coefficient;
};

export const Calculator = () => {
  const t = useTranslations();
  const [calculationType, setCalculationType] = useState("lift force");
  const [speed, setSpeed] = useState("");
  const [surfaceArea, setSurfaceArea] = useState("");
  const [coefficient, setCoefficient] = useState("");
  const [airDensity, setAirDensity] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    if (calculationType === "lift force") {
      const liftForce = calculateLiftForce({
        speed: parseFloat(speed),
        surfaceArea: parseFloat(surfaceArea),
        coefficient: parseFloat(coefficient),
        airDensity: parseFloat(airDensity),
      });
      setResult(liftForce.toFixed(2));
    }

    if (calculationType === "drag force") {
      const dragForce = calculateDragForce({
        speed: parseFloat(speed),
        surfaceArea: parseFloat(surfaceArea),
        coefficient: parseFloat(coefficient),
        airDensity: parseFloat(airDensity),
      });
      setResult(dragForce.toFixed(2));
    }
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <h1 className="h1">{t("veaero-calculator.title")}</h1>
      </CardHeader>
      <CardBody className="space-y-8">
        <RadioGroup
          label={t("veaero-calculator.choose-calculation")}
          value={calculationType}
          onChange={(e) => {
            setCalculationType(e.target.value);
            setResult(null);
          }}
          size="lg"
          orientation="horizontal"
        >
          {calculationTypes.map((type) => (
            <Radio key={type} value={type}>
              <span className="capitalize">{type}</span>
            </Radio>
          ))}
        </RadioGroup>
        <div>
          <Input
            labelPlacement="outside"
            size="lg"
            classNames={{ label: "text-lg font-semibold text-foreground" }}
            type="number"
            label={`${t("veaero-calculator.speed")} (m/s)`}
            placeholder={`${t("veaero-calculator.speed")} (m/s)`}
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>

        <div>
          <Input
            labelPlacement="outside"
            size="lg"
            classNames={{ label: "text-lg font-semibold text-foreground" }}
            type="number"
            label={`${t("veaero-calculator.surface-area")} (m²)`}
            placeholder={`${t("veaero-calculator.surface-area")} (m²)`}
            value={surfaceArea}
            onChange={(e) => setSurfaceArea(e.target.value)}
          />
        </div>
        <div>
          <Input
            labelPlacement="outside"
            size="lg"
            classNames={{ label: "text-lg font-semibold text-foreground" }}
            type="number"
            label={`${t("veaero-calculator.coefficient")} (${calculationType === "lift force" ? "CL" : "CD"})`}
            placeholder={`${t("veaero-calculator.coefficient")} (${calculationType === "lift force" ? "CL" : "CD"})`}
            value={coefficient}
            onChange={(e) => setCoefficient(e.target.value)}
          />
        </div>
        <div>
          <Input
            labelPlacement="outside"
            size="lg"
            classNames={{ label: "text-lg font-semibold text-foreground" }}
            type="number"
            label={`${t("veaero-calculator.air-density")} (kg/m³)`}
            placeholder={`${t("veaero-calculator.air-density")} (kg/m³)`}
            value={airDensity}
            onChange={(e) => setAirDensity(e.target.value)}
          />
        </div>
      </CardBody>

      <CardFooter className="flex-col space-y-8">
        <Button
          color="primary"
          size="lg"
          className="mx-auto w-full max-w-xs"
          onClick={handleCalculate}
        >
          {t("common.calculator")}
        </Button>
        {result !== null && !isNaN(Number(result)) && (
          <div className="h1">
            <p>
              <span className="capitalize">{calculationType}</span>: {result} N
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default Calculator;
