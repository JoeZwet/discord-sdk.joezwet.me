import React from "react";
import {BranchName, Link, StyledOcticon, Timeline, Tooltip, Text} from "@primer/components";
import {BeakerIcon, DownloadIcon, Icon, MilestoneIcon, TagIcon, ZapIcon} from "@primer/octicons-react";
import VersionLabels from "./VersionLabels";
import VersionData from "../data/VersionData";
import LabelsData from "../data/LabelsData";

interface TimelineVersionProps {
  version: VersionData,
  labels: LabelsData
}

const TimelineVersion: React.FC<TimelineVersionProps> = (props) => {
  let bg: null | string = null;
  let color: null | string = null;
  let icon: Icon = TagIcon;

  switch (props.version.type) {
    case "DEFAULT":
      bg = null;
      color = null;
      icon = TagIcon;
      break;
    case "RECOMMENDED":
      bg = "prState.open.bg";
      color = "prState.open.text";
      icon = ZapIcon;
      break;
    case "LATEST":
      bg = "prState.merged.bg";
      color = "prState.merged.text";
      icon = MilestoneIcon;
      break;
    case "BLEEDING":
      bg = "prState.closed.bg";
      color = "prState.closed.text";
      icon = BeakerIcon;
      break;
  }

  return (
    <Timeline.Item>
      <Timeline.Badge bg={bg}>
        <StyledOcticon icon={icon} color={color}/>
      </Timeline.Badge>
      <Timeline.Body>
        <Link href={`https://dl-game-sdk.discordapp.net/${props.version.version}/discord_game_sdk.zip`} target="_blank" fontWeight="bold" color="text.primary" mr={1} muted>
          <StyledOcticon icon={DownloadIcon} />
          v{props.version.version}
        </Link>
        was released <Text fontWeight="bold" color="timeline.text">
        <Tooltip direction="s" aria-label={props.version.publish.toISOString()}>{props.version.publish.toLocaleDateString(navigator.language,
          { year: "numeric", month: "long", day: "numeric" })}</Tooltip></Text>
        <VersionLabels version={props.version} labels={props.labels} />
        <br /><BranchName>md5/{props.version.md5}</BranchName> <BranchName>size/{Math.round((props.version.size) * 100) / 100}mb</BranchName>
      </Timeline.Body>
    </Timeline.Item>
  )
}

export default TimelineVersion;