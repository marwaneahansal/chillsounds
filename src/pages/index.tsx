import { Grid, GridItem } from "@chakra-ui/react";
import { type NextPage } from "next";
import Head from "next/head";
import { BsCloudRain } from "react-icons/bs";
import { MdOutlineThunderstorm } from "react-icons/md";
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
          alignItems={"center"}
          justifyContent={"center"}
          height={"100vh"}
          templateColumns={"repeat(8, minmax(0, 1fr))"}
          gap={6}
          marginInline={"10"}
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
        </Grid>
      </main>
    </>
  );
};

export default Home;
