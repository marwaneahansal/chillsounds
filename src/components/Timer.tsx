import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const Timer = ({ timer }: { timer: string }) => {
  return (
    <Flex flexGrow={1} alignItems={"center"} justifyContent={"center"}>
      <Heading fontSize={"9xl"}>{timer}</Heading>
    </Flex>
  );
};
