"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useTranslations } from "next-intl";

export const Calculator = () => {
  const t = useTranslations();
  const months = [12, 24, 36, 48, 60, 72, 84, 96];
  const [form, setForm] = useState({
    loanAmount: 0,
    interestRate: 0,
    loanTerm: months[0] ?? 12,
    remainingMonths: 0,
    additionalPayment: 0,
  });
  const [result, setResult] = useState<number | null>(null);
  const [tableData, setTableData] = useState<
    {
      period: number;
      monthlyPayment: string;
      principal: string;
      monthlyInterest: string;
      balance: string;
    }[]
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: Number(value) });
  };

  const calculatePayoff = () => {
    const { loanAmount, interestRate, loanTerm, additionalPayment } = form;
    const monthlyInterestRate = interestRate / 100 / 12;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
    let balance = loanAmount;
    const data = [];

    for (let period = 1; period <= loanTerm; period++) {
      const monthlyInterest = balance * monthlyInterestRate;
      const principal = monthlyPayment - monthlyInterest;
      balance -= principal;
      data.push({
        period,
        monthlyPayment: (monthlyPayment + additionalPayment).toFixed(2),
        principal: principal.toFixed(2),
        monthlyInterest: monthlyInterest.toFixed(2),
        balance: balance.toFixed(2),
      });
    }

    setTableData(data);
    console.log(data);
    setResult(monthlyPayment + additionalPayment);
  };

  return (
    <Card className="m-2 p-4">
      <CardHeader>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {t("auto-loan-payoff-calculator.title")}
        </h1>
      </CardHeader>
      <CardBody className="my-8 gap-8">
        <Input
          size="lg"
          placeholder={t("auto-loan-payoff-calculator.loan-amount")}
          name="loanAmount"
          type="number"
          value={form.loanAmount ? form.loanAmount.toString() : ""}
          onChange={handleInputChange}
          label={
            <h2 className="text-lg font-semibold">
              {t("auto-loan-payoff-calculator.what-is-your-loan-amount")}
            </h2>
          }
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-small text-default-400">
                {t("auto-loan-payoff-calculator.key")}
              </span>
            </div>
          }
        />
        <Input
          size="lg"
          placeholder={t("auto-loan-payoff-calculator.interest-rate")}
          type="number"
          name="interestRate"
          value={form.interestRate ? form.interestRate.toString() : ""}
          onChange={handleInputChange}
          label={
            <h2 className="text-lg font-semibold">
              {t(
                "auto-loan-payoff-calculator.what-is-the-interest-rate-on-your-loan",
              )}
            </h2>
          }
          labelPlacement="outside"
          max={100}
          min={1}
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-small text-default-400">%</span>
            </div>
          }
        />
        <Select
          value={form.loanTerm.toString()}
          onSelect={(e) => setForm({ ...form, loanTerm: Number(e) })}
          label={
            <h2 className="text-lg font-semibold">
              {t("auto-loan-payoff-calculator.how-long-is-your-loan-term")}
            </h2>
          }
          labelPlacement="outside"
          size="lg"
          placeholder={t("auto-loan-payoff-calculator.select-loan-term")}
        >
          {months.map((month) => (
            <SelectItem key={month} textValue={`${month} Months`}>
              {month} {t("auto-loan-payoff-calculator.months")}
            </SelectItem>
          ))}
        </Select>
        <Input
          size="lg"
          placeholder={t("auto-loan-payoff-calculator.remaining-months")}
          type="number"
          name="remainingMonths"
          value={form.remainingMonths ? form.remainingMonths.toString() : ""}
          onChange={handleInputChange}
          label={
            <h2 className="text-lg font-semibold">
              {t(
                "auto-loan-payoff-calculator.how-many-months-are-left-on-your-loan-term",
              )}
            </h2>
          }
          labelPlacement="outside"
        />
        <Input
          size="lg"
          placeholder={t(
            "auto-loan-payoff-calculator.additional-monthly-payment",
          )}
          type="number"
          name="additionalPayment"
          value={
            form.additionalPayment ? form.additionalPayment.toString() : ""
          }
          onChange={handleInputChange}
          label={
            <h2 className="text-lg font-semibold">
              {t(
                "auto-loan-payoff-calculator.what-is-your-additional-monthly-payment",
              )}
            </h2>
          }
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-small text-default-400">$</span>
            </div>
          }
          labelPlacement="outside"
        />
      </CardBody>
      <CardFooter className="flex flex-col">
        <Button
          size="lg"
          color="primary"
          className="mx-auto w-full max-w-xs"
          disabled={
            !form.loanAmount ||
            !form.interestRate ||
            !form.loanTerm ||
            !form.remainingMonths
          }
          onClick={calculatePayoff}
        >
          Calculate
        </Button>

        <div className="mt-8 flex w-full flex-col items-center gap-4">
          {result !== null && (
            <div className="mt-4 text-lg font-semibold">
              {t("auto-loan-payoff-calculator.your-new-monthly-payment-is")}: $
              {result.toFixed(2)}
            </div>
          )}
          {result && (
            <Table
              aria-label={t(
                "auto-loan-payoff-calculator.calculate-result-table",
              )}
              isStriped
            >
              <TableHeader>
                <TableColumn>
                  {t("auto-loan-payoff-calculator.period")}
                </TableColumn>
                <TableColumn>
                  {t("auto-loan-payoff-calculator.monthly-payment")}
                </TableColumn>
                <TableColumn>
                  {t("auto-loan-payoff-calculator.principal")}
                </TableColumn>
                <TableColumn>{t("Site.monthly-interest")}</TableColumn>
                <TableColumn>
                  {t("auto-loan-payoff-calculator.principal-balance")}
                </TableColumn>
              </TableHeader>
              <TableBody>
                {tableData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.period}</TableCell>
                    <TableCell>${item.monthlyPayment}</TableCell>
                    <TableCell>${item.principal}</TableCell>
                    <TableCell>${item.monthlyInterest}</TableCell>
                    <TableCell>${item.balance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
