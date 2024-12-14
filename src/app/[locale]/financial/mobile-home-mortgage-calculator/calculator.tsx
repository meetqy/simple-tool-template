"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import MyInput from "~/components/my-input";

const calculateMonthlyPayment = (
  amount: number,
  rate: number,
  period: number,
  taxes: string | number,
  insurance: string | number,
) => {
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = period * 12;
  const monthlyPrincipalAndInterest =
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  return (
    monthlyPrincipalAndInterest +
    parseFloat(taxes.toString()) +
    parseFloat(insurance.toString())
  ).toFixed(2);
};

export const Calculator = () => {
  const t = useTranslations();
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [period, setPeriod] = useState(30);
  const [taxes, setTaxes] = useState("0.00");
  const [insurance, setInsurance] = useState("0.00");
  const [monthlyPayment, setMonthlyPayment] = useState<string>("0");

  const handleCalculate = () => {
    const payment = calculateMonthlyPayment(
      parseFloat(amount),
      parseFloat(rate),
      parseInt(period.toString()),
      parseFloat(taxes.toString()),
      parseFloat(insurance.toString()),
    );
    setMonthlyPayment(payment);
  };

  return (
    <Card className="m-2 p-4">
      <CardHeader>
        <h1 className="h1">{t("mobile-home-mortgage-calculator.title")}</h1>
      </CardHeader>
      <CardBody className="my-8 gap-8">
        <MyInput
          label={t("mobile-home-mortgage-calculator.mortgage-amount")}
          value={amount}
          endContent={t("common.monetary-unit")}
          onChange={(e) => setAmount(e.target.value)}
        />

        <MyInput
          label={t("mobile-home-mortgage-calculator.interest-rate")}
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          endContent="%"
        />
        <Select
          label={t("mobile-home-mortgage-calculator.mortgage-period-years")}
          placeholder={t(
            "mobile-home-mortgage-calculator.mortgage-period-years",
          )}
          value={period}
          size="lg"
          labelPlacement="outside"
          classNames={{ label: "text-lg font-semibold text-foreground" }}
          onChange={(e) => setPeriod(parseInt(e.target.value))}
        >
          {[0, 5, 10, 15, 20, 25, 30, 35].map((year) => (
            <SelectItem textValue={year.toString()} key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </Select>
        <MyInput
          label={t("mobile-home-mortgage-calculator.monthly-property-taxes")}
          value={taxes}
          onChange={(e) => setTaxes(e.target.value)}
          endContent={t("common.monetary-unit")}
        />
        <MyInput
          label={t(
            "mobile-home-mortgage-calculator.monthly-property-insurance",
          )}
          value={insurance}
          onChange={(e) => setInsurance(e.target.value)}
          endContent={t("common.monetary-unit")}
        />
      </CardBody>
      <CardFooter className="flex flex-col">
        <Button
          disabled={!amount || !rate || !taxes || !insurance}
          size="lg"
          color="primary"
          className="mx-auto w-full max-w-xs"
          onClick={handleCalculate}
        >
          {t("common.calculator")}
        </Button>
        {monthlyPayment !== null && (
          <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 rounded-medium bg-foreground py-12 text-background">
            <span>{t("mobile-home-mortgage-calculator.monthly-payment")}</span>
            <span className="font-mono text-5xl">
              {t("common.monetary-unit")}
              {monthlyPayment}
            </span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default Calculator;
