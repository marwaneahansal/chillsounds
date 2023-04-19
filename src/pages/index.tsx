import {
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Spacer,
} from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import { BsCloudRain } from "react-icons/bs";
import { MdOutlineThunderstorm, MdOutlineWaves } from "react-icons/md";
import { GiCelebrationFire, GiNestBirds } from "react-icons/gi";
import { CgCoffee } from "react-icons/cg";
import { SoundCard } from "~/components/SoundCard";
import { ReactNode, useState } from "react";
import { PomodoroCard } from "~/components/PomodoroCard";

export type TAudio = {
  id: number;
  title: string;
  icon: ReactNode;
  audio: any;
};

const Home: NextPage = () => {
  const availableAudios: TAudio[] = [
    {
      id: 1,
      title: "Rain",
      icon: <BsCloudRain size={"2.5rem"} style={{ flexGrow: 1 }}></BsCloudRain>,
      audio: "/sounds/rain.mp3",
    },
    {
      id: 2,
      title: "Thunder",
      icon: (
        <MdOutlineThunderstorm
          size={"2.5rem"}
          style={{ flexGrow: 1 }}
        ></MdOutlineThunderstorm>
      ),
      audio: "/sounds/thunder.mp3",
    },
    {
      id: 3,
      title: "Waves",
      icon: (
        <MdOutlineWaves
          size={"2.5rem"}
          style={{ flexGrow: 1 }}
        ></MdOutlineWaves>
      ),
      audio: "/sounds/waves.mp3",
    },
    {
      id: 4,
      title: "Fire",
      icon: (
        <GiCelebrationFire
          size={"2.5rem"}
          style={{ flexGrow: 1 }}
        ></GiCelebrationFire>
      ),
      audio: "/sounds/fire.mp3",
    },
    {
      id: 5,
      title: "Coffee Shop",
      icon: <CgCoffee size={"2.5rem"} style={{ flexGrow: 1 }}></CgCoffee>,
      audio: "/sounds/coffee-shop.mp3",
    },
    {
      id: 6,
      title: "Birds",
      icon: <GiNestBirds size={"2.5rem"} style={{ flexGrow: 1 }}></GiNestBirds>,
      audio: "/sounds/birds.mp3",
    },
  ];
  return (
    <>
      <Head>
        <title>Mix the beautiful sounds together</title>
        <meta name="description" content="Create chill sounds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-slate-800">
        <Spacer height={"3rem"} />
        <Grid
          className="w-5/6"
          alignItems={"center"}
          justifyContent={"center"}
          templateColumns={"repeat(6, minmax(0, 1fr))"}
          gap={6}
          margin={"auto"}
        >
          {availableAudios.map((audio) => {
            return (
              <GridItem key={audio.id}>
                <SoundCard
                  title={audio.title}
                  icon={audio.icon}
                  audio={audio.audio}
                />
              </GridItem>
            );
          })}
        </Grid>
        <Spacer height={"5"} />
        <PomodoroCard />
      </main>
    </>
  );
};

export default Home;
