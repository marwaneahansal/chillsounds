import { Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Timer = ({
  activeBtn,
  isTimerStarting,
}: {
  activeBtn: "Pomodoro" | "Short-Break" | "Long-Break";
  isTimerStarting: boolean;
}) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState<string>("25:00");

  useEffect(() => {
    if (activeBtn === "Pomodoro") {
      setMinutes(25);
      setSeconds(0);
      setTimer("25:00");
    } else if (activeBtn === "Short-Break") {
      setMinutes(5);
      setSeconds(0);
      setTimer("05:00");
    } else {
      setMinutes(15);
      setSeconds(0);
      setTimer("15:00");
    }
  }, [activeBtn]);

  useEffect(() => {
    const timerInterval: any = setInterval(() => {
      if (!isTimerStarting) return clearInterval(timerInterval);
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      setTimer(
        `${minutes < 10 ? "0" + minutes : minutes}:${
          seconds < 10 ? "0" + seconds : seconds
        }`
      );
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  });

  return (
    <Flex flexGrow={1} alignItems={"center"} justifyContent={"center"}>
      <Heading fontSize={"9xl"}>{timer}</Heading>
    </Flex>
  );
};
