"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Divider,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const Calculator = () => {
  const t = useTranslations();
  const [audiobookLength, setAudiobookLength] = useState<number | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<number | null>(null);
  const [listeningTime, setListeningTime] = useState<number | null>(null);
  const [timeSaved, setTimeSaved] = useState<number | null>(null);

  const calculateListeningTime = () => {
    if (audiobookLength && playbackSpeed) {
      const time = audiobookLength / playbackSpeed;
      const saved = audiobookLength - time;
      setListeningTime(time);
      setTimeSaved(saved);
    }
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <h1 className="h1">{t("audiobook-speed-calculator.title")}</h1>
      </CardHeader>
      <CardBody className="my-8 gap-8">
        <Input
          size="lg"
          placeholder={t("audiobook-speed-calculator.audiobook-length-hours")}
          type="number"
          value={audiobookLength !== null ? audiobookLength.toString() : ""}
          onChange={(e) => setAudiobookLength(Number(e.target.value))}
          label={
            <h2 className="text-lg font-semibold">
              {t("audiobook-speed-calculator.audiobook-length-hours")}
            </h2>
          }
          labelPlacement="outside"
        />
        <Input
          size="lg"
          placeholder={t("audiobook-speed-calculator.playback-speed")}
          type="number"
          value={playbackSpeed !== null ? playbackSpeed.toString() : ""}
          onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
          label={
            <h2 className="text-lg font-semibold">
              {t("audiobook-speed-calculator.playback-speed")}
            </h2>
          }
          labelPlacement="outside"
        />
      </CardBody>
      <CardFooter className="flex flex-col">
        <Button
          size="lg"
          color="primary"
          className="mx-auto w-full max-w-xs"
          onClick={calculateListeningTime}
        >
          {t("audiobook-speed-calculator.calculate")}
        </Button>

        <Divider className="mt-8 w-full" />
        {listeningTime !== null && timeSaved !== null && (
          <div className="mt-4 font-mono text-lg font-semibold">
            <p>
              {t("audiobook-speed-calculator.listen-time", {
                time: listeningTime.toFixed(2),
              })}
            </p>

            <p>
              {t("audiobook-speed-calculator.time-saved", {
                time: timeSaved.toFixed(2),
              })}
              <b className="ml-2 bg-danger px-1 text-large text-danger-foreground">
                {((timeSaved / audiobookLength!) * 100).toFixed(2)}%
              </b>
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
