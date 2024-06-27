import { Button, Card, CardBody, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { PomodoroBtn } from "./PomodoroBtn";
import { Timer } from "./Timer";

export const PomodoroCard = () => {
  const [activeBtn, setActiveBtn] = useState<
    "Pomodoro" | "Short-Break" | "Long-Break"
  >("Pomodoro");
  const [isTimerStarting, setIsTimeStarting] = useState<boolean>(false);

  const onActiveBtnChange = (
    value: "Pomodoro" | "Short-Break" | "Long-Break"
  ) => {
    setActiveBtn(value);
    setIsTimeStarting(false);
  };

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
          <Timer
            activeBtn={activeBtn}
            isTimerStarting={isTimerStarting}
            setIsTimerStarting={setIsTimeStarting}
          />
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Button
              colorScheme="linkedin"
              size={"lg"}
              variant={"solid"}
              fontSize={"2xl"}
              paddingInline={"10"}
              onClick={() => setIsTimeStarting((prev) => !prev)}
            >
              {isTimerStarting ? "Pause" : "Start"}
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
