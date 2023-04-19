import {
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PomodoroBtn } from "./PomodoroBtn";
import { Timer } from "./Timer";

export const PomodoroCard = () => {
  const [activeBtn, setActiveBtn] = useState<
    "Pomodoro" | "Short-Break" | "Long-Break"
  >("Pomodoro");

  const [timer, setTimer] = useState<string>("25:00");
  const [isTimerStarting, setIsTimeStarting] = useState<boolean>(false);

  const toggleTimer = () => {
    setIsTimeStarting((val) => !val);
  };

  const onActiveBtnChange = (
    value: "Pomodoro" | "Short-Break" | "Long-Break"
  ) => {
    setActiveBtn(value);
    if (value === "Pomodoro") {
      setTimer("25:00");
    } else if (value === "Short-Break") {
      setTimer("05:00");
      // useCountdown(new Date().getTime() + 5 * 60 * 1000);
    } else {
      setTimer("15:00");
      // useCountdown(new Date().getTime() + 15 * 60 * 1000);
    }
  };

  const onTimerStart = (value: "Pomodoro" | "Short-Break" | "Long-Break") => {
    toggleTimer();
    if (isTimerStarting) {
      if (value === "Pomodoro") {
        setInitialMinute(25);
        setInitialSeconds(0);
      }
    }
  };

  const [initialMinute, setInitialMinute] = useState(25);
  const [initialSeconds, setInitialSeconds] = useState(0);
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const timerInterval: any = setInterval(() => {
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
    <Card
      bgColor={"whiteAlpha.900"}
      width={"600px"}
      height={"350px"}
      margin={"auto"}
    >
      <CardBody height={"100%"}>
        <Flex flexDir={"column"} height={"100%"}>
          <Grid
            className="mx-auto w-3/4"
            alignItems={"center"}
            justifyContent={"center"}
            templateColumns={"repeat(3, minmax(0, 1fr))"}
            gap={0}
          >
            <GridItem>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <PomodoroBtn
                  title="Pomodoro"
                  isActive={activeBtn === "Pomodoro"}
                  onClick={() => onActiveBtnChange("Pomodoro")}
                />
              </Flex>
            </GridItem>
            <GridItem>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <PomodoroBtn
                  title="Short Break"
                  isActive={activeBtn === "Short-Break"}
                  onClick={() => onActiveBtnChange("Short-Break")}
                />
              </Flex>
            </GridItem>
            <GridItem>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <PomodoroBtn
                  title="Long Break"
                  isActive={activeBtn === "Long-Break"}
                  onClick={() => onActiveBtnChange("Long-Break")}
                />
              </Flex>
            </GridItem>
          </Grid>
          <Timer timer={timer} />
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Button
              colorScheme="linkedin"
              size={"lg"}
              variant={"solid"}
              fontSize={"2xl"}
              paddingInline={"10"}
              onClick={() => onTimerStart(activeBtn)}
            >
              {isTimerStarting ? "Pause" : "Start"}
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
