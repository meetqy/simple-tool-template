/**
 * For SEO optimization, we put the Tool component in a separate file and set `use client`.
 *
 * You can chat with AI in this file, tell it what tool you want to make,
 *
 * Example:
 * RMB exchange rate calculator,
 * design it beautifully using HERO's design scheme and heroui components.
 */

"use client";

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
  const [numberA, setNumberA] = useState<number>(0);
  const [numberB, setNumberB] = useState<number>(0);

  const calculateSum = () => {
    return (numberA + numberB).toFixed(2);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-800 to-purple-700 p-4">
      <Card className="w-full max-w-xl bg-white/90 shadow-2xl backdrop-blur-md">
        <CardHeader className="flex flex-col gap-4 bg-gradient-to-r from-blue-600 to-purple-600 p-8">
          <h1 className="text-center text-4xl font-bold text-white">
            {/* 
              i18n can be handled here, 
              you can select the text above and use cmd+p then press enter, 
              select "i18n Ally：Extract text into i18n messages"
              you can see your new i18n configuration in en.json
            */}
            {t("example.title")}
          </h1>
          <p className="text-center text-white/80">
            {t("example.description")}
          </p>
        </CardHeader>

        <CardBody className="flex flex-col gap-8 p-8">
          <div className="grid grid-cols-1 gap-6">
            <Input
              type="number"
              label="Number A"
              placeholder="0"
              value={numberA.toString()}
              onChange={(e) => setNumberA(Number(e.target.value))}
              size="lg"
              className="text-large"
            />

            <Input
              type="number"
              label="Number B"
              placeholder="0"
              value={numberB.toString()}
              onChange={(e) => setNumberB(Number(e.target.value))}
              size="lg"
              className="text-large"
            />
          </div>

          <Divider />

          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="mb-2 text-xl text-gray-600">Result</p>
              <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-6xl font-bold text-transparent">
                {calculateSum()}
              </p>
              <p className="mt-2 text-lg text-gray-500">A + B</p>
            </div>

            <Button
              color="primary"
              size="lg"
              className="w-full max-w-sm text-lg font-semibold"
              onPress={() => {
                setNumberA(0);
                setNumberB(0);
              }}
            >
              {/* i18n Same as above 👆 */}
              {t("example.reset-btn")}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
