"use client";

import React, { useState } from "react";
import {
  Button,
  Select,
  Card,
  CardHeader,
  CardBody,
  SelectItem,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";

const eyeColors = ["brown", "blue", "green", "hazel"];

type EyeColor = "brown" | "blue" | "green" | "hazel";
type Probabilities = Record<
  EyeColor,
  Record<EyeColor, { homozygous: string; heterozygous: string }>
>;

const calculateProbabilities = (
  color1: EyeColor,
  color2: EyeColor,
): { homozygous: string; heterozygous: string } => {
  const probabilities: Probabilities = {
    brown: {
      brown: { homozygous: "99% brown", heterozygous: "75% brown" },
      blue: { homozygous: "99% brown", heterozygous: "50/50" },
      green: { homozygous: "99% brown", heterozygous: "50/50" },
      hazel: { homozygous: "99% brown", heterozygous: "50/50" },
    },
    blue: {
      brown: { homozygous: "99% brown", heterozygous: "50/50" },
      blue: { homozygous: "99% blue", heterozygous: "99% blue" },
      green: { homozygous: "50/50", heterozygous: "50/50" },
      hazel: { homozygous: "50/50", heterozygous: "50/50" },
    },
    green: {
      brown: { homozygous: "99% brown", heterozygous: "50/50" },
      blue: { homozygous: "50/50", heterozygous: "50/50" },
      green: { homozygous: "99% green", heterozygous: "99% green" },
      hazel: { homozygous: "50/50", heterozygous: "50/50" },
    },
    hazel: {
      brown: { homozygous: "99% brown", heterozygous: "50/50" },
      blue: { homozygous: "50/50", heterozygous: "50/50" },
      green: { homozygous: "50/50", heterozygous: "50/50" },
      hazel: { homozygous: "99% hazel", heterozygous: "99% hazel" },
    },
  };

  return probabilities[color1][color2];
};

export const Calculator = () => {
  const t = useTranslations();
  const [parent1Color, setParent1Color] = useState<EyeColor | "">("");
  const [parent2Color, setParent2Color] = useState<EyeColor | "">("");
  const [result, setResult] = useState({ homozygous: "", heterozygous: "" });

  const handleCalculate = () => {
    if (parent1Color && parent2Color) {
      const probabilities = calculateProbabilities(parent1Color, parent2Color);
      setResult(probabilities);
    } else {
      setResult({
        homozygous: "",
        heterozygous: "Please select eye colors for both parents.",
      });
    }
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <h1 className="h1">{t("baby-eye-color-calculator.title")}</h1>
      </CardHeader>
      <CardBody className="mt-8 gap-4 space-y-4">
        <div>
          <Select
            placeholder={t(
              "baby-eye-color-calculator.select-parent-1-eye-color",
            )}
            label={t("baby-eye-color-calculator.select-parent-1-eye-color")}
            labelPlacement="outside"
            size="lg"
            classNames={{
              label: "text-lg font-semibold text-foreground",
            }}
            onChange={(e) => {
              setParent1Color(e.target.value as EyeColor);
              setResult({ homozygous: "", heterozygous: "" });
            }}
          >
            {eyeColors.map((color) => (
              <SelectItem key={color} value={color}>
                {color}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div>
          <Select
            placeholder={t(
              "baby-eye-color-calculator.select-parent-2-eye-color",
            )}
            labelPlacement="outside"
            size="lg"
            classNames={{
              label: "text-lg font-semibold text-foreground",
            }}
            label={t("baby-eye-color-calculator.select-parent-2-eye-color")}
            onChange={(e) => {
              setParent2Color(e.target.value as EyeColor);
              setResult({ homozygous: "", heterozygous: "" });
            }}
          >
            {eyeColors.map((color) => (
              <SelectItem key={color} value={color}>
                {color}
              </SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex justify-center">
          <Button
            color="primary"
            size="lg"
            className="mx-auto w-full max-w-xs"
            onClick={handleCalculate}
          >
            {t("common.calculator")}
          </Button>
        </div>

        {result.homozygous && (
          <div className="text-lg">
            <h2 className="h2 mb-4">Chances of the Baby's Eye Color</h2>
            <p className="flex h-12 items-center justify-between">
              <span>
                {t("baby-eye-color-calculator.homozygous-less-likely")}
              </span>
              <b>
                {result.homozygous === "50/50"
                  ? `50/50 ${parent1Color} or ${parent2Color}`
                  : result.homozygous}
              </b>
            </p>
            <p className="flex h-12 items-center justify-between">
              <span>
                {t("baby-eye-color-calculator.heterozygous-more-likely")}
              </span>
              <b>
                {result.heterozygous === "50/50"
                  ? `50/50 ${parent1Color} or ${parent2Color}`
                  : result.heterozygous}
              </b>
            </p>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
