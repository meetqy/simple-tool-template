"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Select,
  SelectItem,
  CardFooter,
} from "@nextui-org/react";
import MyInput from "~/components/my-input";
import { CalculateButton } from "~/components/calculate-button";
import { useTranslations } from "next-intl";

const units = ["mm", "cm", "m", "in", "ft"];

const convertToFeet = (value: number, unit: string) => {
  switch (unit) {
    case "mm":
      return value / 304.8;
    case "cm":
      return value / 30.48;
    case "m":
      return value / 0.3048;
    case "in":
      return value / 12;
    case "ft":
      return value;
    default:
      return value;
  }
};

const calculateBoardFeet = (
  pieces: number,
  thickness: number,
  width: number,
  length: number,
  unit: string,
) => {
  const thicknessInFeet = convertToFeet(thickness, unit);
  const widthInFeet = convertToFeet(width, unit);
  const lengthInFeet = convertToFeet(length, unit);
  return (pieces * thicknessInFeet * widthInFeet * lengthInFeet).toFixed(5);
};

const BoardFeetCalculator = () => {
  const t = useTranslations();
  const [pieces, setPieces] = useState("");
  const [thickness, setThickness] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [unit, setUnit] = useState("ft");
  const [total, setTotal] = useState("");

  const handleCalculate = () => {
    const totalBoardFeet = calculateBoardFeet(
      parseFloat(pieces),
      parseFloat(thickness),
      parseFloat(width),
      parseFloat(length),
      unit,
    );
    setTotal(totalBoardFeet);
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <h1 className="h1">{t("calculate-board-feet.title")}</h1>
      </CardHeader>
      <CardBody className="mt-8 gap-8">
        <Select
          label={t("calculate-board-feet.select-unit")}
          placeholder={t("calculate-board-feet.select-unit")}
          labelPlacement="outside"
          classNames={{ label: "text-lg font-semibold text-foreground" }}
          size="lg"
          selectedKeys={[unit]}
          onChange={(e) => setUnit(e.target.value)}
        >
          {units.map((unit) => (
            <SelectItem key={unit} value={unit}>
              {unit}
            </SelectItem>
          ))}
        </Select>
        <MyInput
          type="number"
          label={t("calculate-board-feet.no-of-pieces")}
          value={pieces}
          onChange={(e) => setPieces(e.target.value)}
        />
        <MyInput
          type="number"
          label={t("calculate-board-feet.thickness")}
          value={thickness}
          onChange={(e) => setThickness(e.target.value)}
        />
        <MyInput
          type="number"
          label={t("calculate-board-feet.width")}
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <MyInput
          type="number"
          label={t("calculate-board-feet.length")}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <CalculateButton onClick={handleCalculate} />
      </CardBody>
      {total && (
        <CardFooter className="mt-12 flex flex-col items-center justify-center rounded-md bg-foreground p-4 text-background">
          <h2 className="h2 border-0">
            {t("calculate-board-feet.total-board-feet")}
          </h2>
          <p className="mt-4 font-mono text-5xl text-warning">{total} ft³</p>
        </CardFooter>
      )}
    </Card>
  );
};

export default BoardFeetCalculator;
