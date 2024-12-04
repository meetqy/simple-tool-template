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

export const Calculator = () => {
  const months = [12, 24, 36, 48, 60, 72, 84, 96];
  const [form, setForm] = useState({
    loanAmount: 0,
    interestRate: 0,
    loanTerm: months[0],
  });

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
          label={
            <h2 className="text-lg font-semibold">What is your loan amount?</h2>
          }
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <Input
          size="lg"
          placeholder="Interest rate"
          type="number"
          label={
            <h2 className="text-lg font-semibold">
              What is the interest rate on your loan?
            </h2>
          }
          labelPlacement="outside"
          max={100}
          min={0}
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">%</span>
            </div>
          }
        />
        <Select
          value={form.loanTerm}
          onSelect={(e) => {
            setForm({ ...form, loanTerm: Number(e) });
          }}
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
          label={
            <h2 className="text-lg font-semibold">
              What is your additional monthly payment?
            </h2>
          }
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          labelPlacement="outside"
        />
      </CardBody>
      <CardFooter>
        <Button size="lg" color="primary" className="mx-auto">
          Calculate
        </Button>
      </CardFooter>
    </Card>
  );
};
