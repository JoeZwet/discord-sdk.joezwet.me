import React from "react";
import {BorderBox, BranchName, Label, LabelGroup, Link} from "@primer/components";

interface PackageProps {
  name: string,
  description: string,
  source: string,
  author: string,
  tags: Array<string>
}

const Package: React.FC<PackageProps> = (props: PackageProps) => {
  return (
    <React.Fragment>
      <BorderBox>
        <div style={{padding: "6px"}}>
          <BranchName><Link href={props.source} target={"_blank"}>{props.name}</Link></BranchName>
          <br/> by {props.author}
          <br/>
          {props.description}
          <br/>
          <LabelGroup>
            { props.tags.map((tag: string) => (<Label key={tag}>{tag}</Label>)) }
          </LabelGroup>
        </div>
      </BorderBox>
    </React.Fragment>
  )
}

export default Package;