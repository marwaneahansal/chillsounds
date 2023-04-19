import { Button } from "@chakra-ui/react";
import React from "react";

export type TPomodoroBtnProps = {
  isActive: boolean;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const PomodoroBtn = ({
  title,
  onClick,
  isActive,
}: TPomodoroBtnProps) => {
  return (
    <Button
      colorScheme="teal"
      variant={isActive ? "solid" : "outline"}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
