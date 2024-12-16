import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export const CalculateButton = ({ onClick }: { onClick: () => void }) => {
  const t = useTranslations();

  return (
    <Button
      onClick={onClick}
      color="primary"
      className="mx-auto w-full max-w-xs"
      size="lg"
    >
      {t("common.calculator")}
    </Button>
  );
};
