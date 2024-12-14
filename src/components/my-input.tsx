import React from "react";
import { Input } from "@nextui-org/react";

interface MyInputProps {
  label: string;
  value: string;
  type?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<MyInputProps> = ({
  label,
  type,
  value,
  onChange,
  startContent,
  endContent,
}) => {
  return (
    <Input
      type={type ?? "string"}
      size="lg"
      labelPlacement="outside"
      placeholder={label}
      classNames={{ label: "text-lg font-semibold text-foreground" }}
      label={label}
      value={value}
      onChange={onChange}
      startContent={startContent}
      endContent={endContent}
    />
  );
};

export default MyInput;
