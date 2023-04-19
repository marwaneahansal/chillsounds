import { Grid, GridItem } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import { BsCloudRain } from "react-icons/bs";
import { MdOutlineThunderstorm, MdOutlineWaves } from "react-icons/md";
import { GiCelebrationFire, GiNestBirds } from "react-icons/gi";
import { CgCoffee } from "react-icons/cg";
import { SoundCard } from "~/components/SoundCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mix the beautiful sounds together</title>
        <meta name="description" content="Create chill sounds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-slate-800">
        <Grid
          className="w-5/6"
          alignItems={"center"}
          justifyContent={"center"}
          height={"100vh"}
          templateColumns={"repeat(6, minmax(0, 1fr))"}
          gap={6}
          margin={"auto"}
        >
          <GridItem>
            <SoundCard
              title="Rain"
              icon={
                <BsCloudRain
                  size={"2.5rem"}
                  style={{ flexGrow: 1 }}
                ></BsCloudRain>
              }
              audio={"/sounds/rain.mp3"}
            />
          </GridItem>
          <GridItem>
            <SoundCard
              title="Thunder"
              icon={
                <MdOutlineThunderstorm
                  size={"2.5rem"}
                  style={{ flexGrow: 1 }}
                ></MdOutlineThunderstorm>
              }
            />
          </GridItem>
          <GridItem>
            <SoundCard
              title="Waves"
              icon={
                <MdOutlineWaves
                  size={"2.5rem"}
                  style={{ flexGrow: 1 }}
                ></MdOutlineWaves>
              }
            />
          </GridItem>
          <GridItem>
            <SoundCard
              title="Fire"
              icon={
                <GiCelebrationFire
                  size={"2.5rem"}
                  style={{ flexGrow: 1 }}
                ></GiCelebrationFire>
              }
            />
          </GridItem>
          <GridItem>
            <SoundCard
              title="Coffee Shop"
              icon={
                <CgCoffee size={"2.5rem"} style={{ flexGrow: 1 }}></CgCoffee>
              }
            />
          </GridItem>
          <GridItem>
            <SoundCard
              title="Birds"
              icon={
                <GiNestBirds
                  size={"2.5rem"}
                  style={{ flexGrow: 1 }}
                ></GiNestBirds>
              }
            />
          </GridItem>
        </Grid>
      </main>
    </>
  );
};

export default Home;
