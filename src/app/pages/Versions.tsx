import React, {useEffect} from "react";
import TimelineVersion from "../components/TimelineVersion";
import {Box, Grid, Heading, Pagehead, Timeline} from "@primer/components";
import SiteHeader from "../components/SiteHeader";
import VersionData from "../data/VersionData";
import LabelsData from "../data/LabelsData";


const Versions: React.FC = () => {
  const [items, setItems] = React.useState<Array<any>>([]);
  const [labels, setLabels] = React.useState<LabelsData>(new LabelsData("0", "0", "0"));

  useEffect(() => {
    const itemsTemp: Array<VersionData> = [];
    let tempLabels: LabelsData | null = null;

    fetch("/versions.json").then(res => res.json()).then(json => {
      tempLabels = new LabelsData(json.labels.latest, json.labels.recommended, json.labels.bleeding);

      json.versions.forEach((item: any) => {
        itemsTemp.push(new VersionData(
          getTypeForVersion(item.version, tempLabels),
          item.version,
          item.md5,
          item.size,
          new Date(item.publish)))
      });

      setLabels(tempLabels);
      setItems(itemsTemp.reverse);
    });
  }, []);

  return (
    <>
      <SiteHeader />
      <Grid padding={40} gridGap={3} gridTemplateColumns="20% auto 20%" gridTemplateRows="auto">
        <Box />
        <Box>
          <Pagehead><Heading>Versions</Heading></Pagehead>
          <Timeline clipSidebar={true}>
            {
             mapVersionsToTimelineItem(items, labels)
            }
          </Timeline>
        </Box>
        <Box/>
      </Grid>
    </>
  )
}

const getTypeForVersion = (version: string, labels: LabelsData | null | undefined) => {
  if(labels === null || labels === undefined) return "DEFAULT";
  switch (version) {
    case labels.latest: {
      return "LATEST";
    }
    case labels.bleeding: {
      return "BLEEDING";
    }
    case labels.recommended: {
      return "RECOMMENDED";
    }
    default: {
      return "DEFAULT";
    }
  }
}

const mapVersionsToTimelineItem = (versions: Array<VersionData>, labels: LabelsData) => {
  return versions.map((value: VersionData) => <TimelineVersion key={value.version} version={value} labels={labels} />);
}

export default Versions;