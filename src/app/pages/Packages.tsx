import React from "react";
import SiteHeader from "../components/SiteHeader";
import { Box, Grid, Heading, Link, Pagehead } from "@primer/components";
import Package from "../components/Package";

const Packages: React.FC = () => {
  const [items, setItems] = React.useState<Array<any>>([])

  fetch("/packages.json")
    .then(res => res.json())
    .then((data: any[]) => {
      const tempItems: any[] = [];
      data.forEach((item: any) => {
        tempItems.push(<Package key={item.name} name={item.name} description={item.description} source={item.source} author={item.author} tags={item.tags} />);
      });
      setItems(tempItems);
    })
    .catch(console.error);

  return (
    <>
      <SiteHeader />
      <Grid padding={40} gridGap={3} gridTemplateColumns="20% auto 20%" gridTemplateRows="auto">
        <Box />
        <Box>
          <Pagehead><Heading>Packages</Heading></Pagehead>
          If you're a developer who has something that would fit this page, create an issue on <Link href={"https://github.com/PyrrhaDevs/sdk.discord.pyrrha.dev/issues/new"} target={"_blank"}>Github</Link>.
          <br />
          Please note that only open-sourced projects will be added, we are not accepting closed-sourced projects at this time.
        </Box>
        <Box />

        <Box />
        <Grid gridGap={3} gridTemplateColumns={"repeat(2, 1fr)"}>
          {items}
        </Grid>
        <Box />
      </Grid>
    </>
  )
}

export default Packages;