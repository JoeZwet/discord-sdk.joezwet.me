import React from "react";
import SiteHeader from "../components/SiteHeader";
import { Box, BranchName, Grid, Heading, Label, Link, Pagehead } from "@primer/components";

const Home: React.FC = () => {
  return (
    <>
      <SiteHeader />
      <Grid padding={40} gridGap={3} gridTemplateColumns="20% auto 20%" gridTemplateRows="auto">
        <Box />
        <Box>
          <Pagehead><Heading>About</Heading></Pagehead>
          <p>This website is an unofficial listing of known <Link href="https://discord.com/developers/docs/game-sdk/getting-started" target="_blank">
            Discord Game Sdk</Link> versions and third-party, open-sourced packages that re-bundle the sdk for all kinds of platforms.
            The versions list was last checked for updates on the 30th of March 2021, at 10:19pm NZST.
            <br /><br />
            An explanation of version tags:
            <ul>
              <li><Label variant="medium" bg="#6f42c1" m={1}>Latest</Label> This tag represents the version listed by Discord as latest, indicated by using <BranchName>latest</BranchName> in the download url.</li>
              <li><Label key="recommended" variant="medium" bg="#28a745" m={1}>Recommended</Label> This is the version recommended for use by Discord, check the <BranchName>#gamesdk-and-dispatch-announcements</BranchName> channel in the Discord Developers server for more info.</li>
              <li><Label key="bleeding" variant="medium" bg="#d73a49" m={1}>Bleeding Edge</Label> This is the absolute latest version, found by querying versions incrementally till no more can be found.</li>
            </ul>
          </p>

          <Pagehead><Heading>versions.json</Heading></Pagehead>
          <BranchName>versions.json</BranchName> is a json file that contains all known versions of the Discord Game Sdk and label data indicating versions for the above labels.
          <br />
          The file is located at <BranchName><Link href="https://discord.pyrrha.dev/versions.json" target={"_blank"}>https://discord.pyrrha.dev/versions.json</Link></BranchName>.
          <br />
          <br />

          The specification for this file is as follows:
          <ul>
            <li><BranchName>labels</BranchName> a single <BranchName>labels</BranchName> object.</li>
            <li><BranchName>versions</BranchName> a list of <BranchName>version</BranchName> objects.</li>
          </ul>
          <br />
          <BranchName>version</BranchName> object:
          <ul>
            <li><BranchName>versions</BranchName> the version of this version.</li>
            <li><BranchName>md5</BranchName> the md5 hash of the zip for this version.</li>
            <li><BranchName>publish</BranchName> an ISO string of the version's publish date.</li>
            <li><BranchName>size</BranchName> the size of the version's zip in mb.</li>
          </ul>
          <br />
          <BranchName>labels</BranchName> object:
          <ul>
            <li><BranchName>latest</BranchName> the version listed as latest by Discord.</li>
            <li><BranchName>recommended</BranchName> the version recommended for production use by Discord.</li>
            <li><BranchName>bleeding</BranchName> the bleeding edge version, not recommended for production use.</li>
          </ul>

          <Pagehead><Heading>Author</Heading></Pagehead>
          The author of this site is not affiliated with Discord, Inc.<br />
          The developer, <Link href="https://pyrrha.dev" target={"_blank"}>Pyrrha Wills</Link>, can be contacted at <BranchName>JustPyrrha#0001</BranchName> on Discord.
        </Box>
        <Box />
      </Grid>
    </>
  );
}

export default Home;
