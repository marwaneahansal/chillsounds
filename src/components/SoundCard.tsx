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
import Sound from "react-sound";

export const SoundCard = ({
  title,
  icon,
  audio,
}: {
  title: string;
  icon: ReactNode;
  audio?: any;
}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [playBackRate, setPlayBackRate] = useState(0);
  const [isPlaying, setIsPlaying] = useState<"PLAYING" | "STOPPED" | "PAUSED">(
    "STOPPED"
  );

  const onSliderValueChange = (slideValue: number) => {
    setSliderValue(slideValue);
    setPlayBackRate(slideValue);
    if (slideValue > 0) setIsPlaying("PLAYING");
    else setIsPlaying("STOPPED");
  };

  return (
    <Card backgroundColor={"white"} color={"gray.800"}>
      <CardBody paddingBlock={"3"} paddingInline={"3"}>
        <Flex flexDirection={"column"} textAlign={"center"}>
          <Stack paddingBlock={"3"} paddingInline={"1"}>
            <Center>{icon}</Center>
            <Text fontWeight={"semibold"} marginTop={"5px"}>
              {title}
            </Text>
          </Stack>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={sliderValue}
            colorScheme="teal"
            size={"lg"}
            onChange={(value) => onSliderValueChange(value)}
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
              <SliderThumb />
            </Tooltip>
            <Sound
              url={audio}
              playStatus={isPlaying}
              volume={playBackRate}
              loop={true}
              autoLoad={true}
            ></Sound>
          </Slider>
        </Flex>
      </CardBody>
    </Card>
  );
};
