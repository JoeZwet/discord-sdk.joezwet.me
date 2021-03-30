import React from "react";
import LabelsData from "../data/LabelsData";
import VersionData from "../data/VersionData";
import {Label} from "@primer/components";

interface VersionLabelsProps {
  version: VersionData,
  labels: LabelsData,
}

const VersionLabels: React.FC<VersionLabelsProps> = (props) => {
  return (
    <>
      {props.version.version === props.labels.latest && (<Label variant="medium" bg="#6f42c1" m={1}>Latest</Label>)}
      {props.version.version === props.labels.recommended && (<Label key="recommended" variant="medium" bg="#28a745" m={1}>Recommended</Label>)}
      {props.version.version === props.labels.bleeding && (<Label key="bleeding" variant="medium" bg="#d73a49" m={1}>Bleeding Edge</Label>)}
    </>
  )
}

export default VersionLabels;