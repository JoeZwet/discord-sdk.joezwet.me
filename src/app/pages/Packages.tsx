import React from "react";
import SiteHeader from "../components/SiteHeader";
import {Box, Grid, Heading, Link, Pagehead} from "@primer/components";

const Packages: React.FC = () => {

  return (
    <>
      <SiteHeader />
      <Grid padding={40} gridGap={3} gridTemplateColumns="20% auto 20%" gridTemplateRows="auto">
        <Box />
        <Box>
          <Pagehead><Heading>Packages</Heading></Pagehead>
          This page is currently in development but will eventually contain a comprehensive list of third-party wrappers and
          re-packages of the Discord Game Sdk.

          <br />
          If you're a developer who has something that would fit this page, please create an issue on <Link href={"https://github.com/JoeZwet/discord.joezwet.dev/issues/new"} target={"_blank"}>Github</Link>.
        </Box>
        <Box />
      </Grid>
    </>
  )
}

export default Packages;