"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Select,
  SelectItem,
  Button,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { CheckCircleIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type UnitSystem = "imperial" | "metric";
type ImperialLength = "in" | "ft" | "yd";
type MetricLength = "cm" | "m";

interface Measurement {
  value: number;
  unit: ImperialLength | MetricLength;
}

export const Calculator = () => {
  const t = useTranslations();
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("imperial");
  const [width, setWidth] = useState<Measurement>({ value: 4, unit: "ft" });
  const [length, setLength] = useState<Measurement>({ value: 6, unit: "ft" });
  const [depth, setDepth] = useState<Measurement>({ value: 6, unit: "in" });
  const [pricePerTon, setPricePerTon] = useState<number>(0);
  const [results, setResults] = useState({
    cubicYards: 0,
    cubicFeet: 0,
    tons: 0,
    pounds: 0,
  });

  const imperialUnits: ImperialLength[] = ["in", "ft", "yd"];
  const metricUnits: MetricLength[] = ["cm", "m"];

  const convertToFeet = (measurement: Measurement): number => {
    switch (measurement.unit) {
      case "in":
        return measurement.value / 12;
      case "yd":
        return measurement.value * 3;
      case "cm":
        return measurement.value / 30.48;
      case "m":
        return measurement.value * 3.28084;
      default:
        return measurement.value;
    }
  };

  const calculate = () => {
    // Convert all measurements to feet
    const widthFeet = convertToFeet(width);
    const lengthFeet = convertToFeet(length);
    const depthFeet = convertToFeet(depth);

    // Calculate volume in cubic feet
    const cubicFeet = widthFeet * lengthFeet * depthFeet;
    const cubicYards = cubicFeet / 27;

    // Asphalt weight calculations (1 cubic yard = 1.96 tons)
    const tons = cubicYards * 1.96;
    const pounds = tons * 2000;

    setResults({
      cubicFeet,
      cubicYards,
      tons,
      pounds,
    });
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <h1 className="h1">{t("asphalt-calculator.title")}</h1>
      </CardHeader>
      <CardBody className="mt-8 gap-4 space-y-4">
        <RadioGroup
          label={t("asphalt-calculator.unit-system")}
          value={unitSystem}
          onValueChange={(e) => {
            setUnitSystem(e as UnitSystem);
            setWidth({ value: 0, unit: e === "imperial" ? "ft" : "m" });
            setLength({ value: 0, unit: e === "imperial" ? "ft" : "m" });
            setDepth({ value: 0, unit: e === "imperial" ? "in" : "cm" });
          }}
          classNames={{
            label: "!text-lg !font-semibold text-foreground",
          }}
          orientation="horizontal"
          size="lg"
        >
          <Radio key="imperial" value="imperial">
            {t("asphalt-calculator.imperial-in-ft-yd-lbs-tons")}
          </Radio>
          <Radio key="metric" value="metric">
            {t("asphalt-calculator.metric-cm-m-kg-tonnes")}
          </Radio>
        </RadioGroup>

        <div className="flex gap-4">
          <Input
            type="number"
            label="Width"
            size="lg"
            labelPlacement="outside"
            classNames={{
              label: "!text-lg !font-semibold text-foreground",
            }}
            value={width.value.toString()}
            onChange={(e) =>
              setWidth({ ...width, value: Number(e.target.value) })
            }
          />
          <Select
            selectedKeys={[width.unit]}
            size="lg"
            aria-label="Width unit"
            onChange={(e) =>
              setWidth({
                ...width,
                unit: e.target.value as ImperialLength | MetricLength,
              })
            }
          >
            {(unitSystem === "imperial" ? imperialUnits : metricUnits).map(
              (unit) => (
                <SelectItem key={unit} value={unit}>
                  {unit}
                </SelectItem>
              ),
            )}
          </Select>
        </div>

        <div className="flex gap-4">
          <Input
            type="number"
            label="Length"
            labelPlacement="outside"
            classNames={{
              label: "!text-lg !font-semibold text-foreground",
            }}
            size="lg"
            value={length.value.toString()}
            onChange={(e) =>
              setLength({ ...length, value: Number(e.target.value) })
            }
          />
          <Select
            selectedKeys={[length.unit]}
            size="lg"
            aria-label="Length unit"
            onChange={(e) =>
              setLength({
                ...length,
                unit: e.target.value as ImperialLength | MetricLength,
              })
            }
          >
            {(unitSystem === "imperial" ? imperialUnits : metricUnits).map(
              (unit) => (
                <SelectItem key={unit} value={unit}>
                  {unit}
                </SelectItem>
              ),
            )}
          </Select>
        </div>

        <div className="flex gap-4">
          <Input
            type="number"
            label="Depth"
            labelPlacement="outside"
            classNames={{
              label: "!text-lg !font-semibold text-foreground",
            }}
            value={depth.value.toString()}
            size="lg"
            onChange={(e) =>
              setDepth({ ...depth, value: Number(e.target.value) })
            }
          />
          <Select
            selectedKeys={[depth.unit]}
            aria-label="Depth unit"
            onChange={(e) =>
              setDepth({
                ...depth,
                unit: e.target.value as ImperialLength | MetricLength,
              })
            }
          >
            {(unitSystem === "imperial" ? imperialUnits : metricUnits).map(
              (unit) => (
                <SelectItem key={unit} value={unit}>
                  {unit}
                </SelectItem>
              ),
            )}
          </Select>
        </div>

        <div>
          <Input
            type="number"
            label="Price per ton (optional)"
            size="lg"
            classNames={{
              label: "!text-lg !font-semibold text-foreground",
            }}
            labelPlacement="outside"
            value={pricePerTon.toString()}
            onChange={(e) => setPricePerTon(Number(e.target.value))}
            startContent={<span>$</span>}
          />
        </div>
      </CardBody>

      <CardFooter className="flex-col gap-4">
        <Button
          color="primary"
          className="mx-auto w-full max-w-xs"
          size="lg"
          onClick={calculate}
        >
          Calculate
        </Button>

        {results.cubicYards > 0 && (
          <div className="mt-12 w-full">
            <p className="h2 flex items-center justify-center gap-2 font-bold">
              <CheckCircleIcon className="h-10 w-10 text-warning" /> Calculation
              results
            </p>
            <p className="mt-4 grid h-12 grid-cols-2 items-center gap-8">
              <span className="text-right">
                {t("asphalt-calculator.hotmix-asphalt-required")}:{" "}
              </span>
              <b>
                {unitSystem === "imperial"
                  ? `${results.cubicYards.toFixed(3)} cubic yards (${results.cubicFeet.toFixed(1)} ft³)`
                  : `${(results.cubicYards * 0.764555).toFixed(3)} cubic meters (${(results.cubicFeet * 0.0283168).toFixed(1)} m³)`}
              </b>
            </p>
            <p className="grid h-12 grid-cols-2 items-center gap-8">
              <span className="text-right">
                {t("asphalt-calculator.asphalt-weight")}:{" "}
              </span>
              <b>
                {unitSystem === "imperial"
                  ? `${results.tons.toFixed(2)} tons (${results.pounds.toFixed(0)} lbs)`
                  : `${(results.tons * 0.907185).toFixed(2)} tonnes (${(results.pounds * 0.453592).toFixed(0)} kg)`}
              </b>
            </p>
            {pricePerTon > 0 && (
              <p className="grid h-12 grid-cols-2 items-center gap-8">
                <span className="text-right">
                  {t("asphalt-calculator.estimated-cost")}:
                </span>
                <b>
                  ${(results.tons * pricePerTon).toFixed(2)}
                  {unitSystem === "imperial" ? " /ton" : " /tonne"}
                </b>
              </p>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
