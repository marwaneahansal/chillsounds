import {
  Card,
  CardBody,
  Center,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { IconType } from "react-icons";

export const SoundCard = ({
  title,
  icon,
}: {
  title: string;
  icon: ReactNode;
}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Card backgroundColor={"white"} color={"gray.800"}>
      <CardBody paddingBlock={"3"} paddingInline={"3"}>
        <Flex flexDirection={"column"}>
          <Stack paddingBlock={"3"} paddingInline={"9"}>
            <Center>{icon}</Center>
            <Text fontWeight={"semibold"} fontSize={"1.1rem"} marginTop={"5px"}>
              {title}
            </Text>
          </Stack>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={sliderValue}
            colorScheme="teal"
            size={"lg"}
            onChange={(value) => setSliderValue(value)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`${sliderValue}%`}
              zIndex={1000}
            >
              {/* bgColor={"gray.800"} */}
              <SliderThumb />
            </Tooltip>
          </Slider>
        </Flex>
      </CardBody>
    </Card>
  );
};
