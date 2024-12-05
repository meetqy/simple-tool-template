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

export const Calculator = () => {
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
    <Card className="p-4">
      <CardHeader>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Auto loan payoff calculator
        </h1>
      </CardHeader>
      <CardBody className="my-8 gap-8">
        <Input
          size="lg"
          placeholder="Loan amount"
          name="loanAmount"
          type="number"
          value={form.loanAmount ? form.loanAmount.toString() : ""}
          onChange={handleInputChange}
          label={
            <h2 className="text-lg font-semibold">What is your loan amount?</h2>
          }
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-small text-default-400">$</span>
            </div>
          }
        />
        <Input
          size="lg"
          placeholder="Interest rate"
          type="number"
          name="interestRate"
          value={form.interestRate ? form.interestRate.toString() : ""}
          onChange={handleInputChange}
          label={
            <h2 className="text-lg font-semibold">
              What is the interest rate on your loan?
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
              How long is your loan term?
            </h2>
          }
          labelPlacement="outside"
          size="lg"
          placeholder="Select loan term"
        >
          {months.map((month) => (
            <SelectItem key={month} textValue={`${month} Months`}>
              {month} Months
            </SelectItem>
          ))}
        </Select>
        <Input
          size="lg"
          placeholder="Remaining months"
          type="number"
          name="remainingMonths"
          value={form.remainingMonths ? form.remainingMonths.toString() : ""}
          onChange={handleInputChange}
          label={
            <h2 className="text-lg font-semibold">
              How many months are left on your loan term?
            </h2>
          }
          labelPlacement="outside"
        />
        <Input
          size="lg"
          placeholder="Additional monthly payment"
          type="number"
          name="additionalPayment"
          value={
            form.additionalPayment ? form.additionalPayment.toString() : ""
          }
          onChange={handleInputChange}
          label={
            <h2 className="text-lg font-semibold">
              What is your additional monthly payment?
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
              Your new monthly payment is: ${result.toFixed(2)}
            </div>
          )}
          {result && (
            <Table aria-label="calculate result table" isStriped>
              <TableHeader>
                <TableColumn>Period</TableColumn>
                <TableColumn>Monthly payment</TableColumn>
                <TableColumn>Principal</TableColumn>
                <TableColumn>Monthly interest</TableColumn>
                <TableColumn>Principal balance</TableColumn>
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
