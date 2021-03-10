import {
    BaseStyles,
    Box, BranchName,
    Label,
    Link,
    StyledOcticon, Text,
    theme as primer,
    Timeline,
    Tooltip
} from '@primer/components';
import React, {useEffect} from 'react';
import {ThemeProvider} from "styled-components";
import {BeakerIcon, GitCommitIcon, MilestoneIcon, ZapIcon} from "@primer/octicons-react";

interface LabelsInfo {
    latest: string,
    recommended: string,
    bleeding: string,
}

interface ItemProps {
    version: string,
    size: string,
    md5: string,
    publish: string,
    labels: LabelsInfo,
    key: string,
}

interface LabelsProps {
    labels: LabelsInfo,
    active: string
}

const Labels = (props: LabelsProps) => {
    let out: Array<JSX.Element> = []
    if(props.active === props.labels.latest) {
        out.push(<Label key="latest" variant="medium" bg="#6f42c1" m={1}>Latest</Label>)
    }

    if(props.active === props.labels.recommended) {
        out.push(<Label key="recommended" variant="medium" bg="#28a745" m={1}>Recommended</Label>)
    }

    if(props.active === props.labels.bleeding) {
        out.push(<Label key="bleeding" variant="medium" bg="#d73a49" m={1}>Bleeding</Label>)
    }

    return out
}

const IconForLabel = (props: LabelsProps) => {
    switch (props.active) {
        case props.labels.recommended: {
            return ZapIcon;
        }
        case props.labels.latest: {
            return MilestoneIcon;
        }
        case props.labels.bleeding: {
            return BeakerIcon;
        }
        default: {
            return GitCommitIcon;
        }
    }
}

const Item = (props: ItemProps) => {
    const date = new Date(props.publish);
    console.log(props.version, date.toISOString())
    return (
        <Timeline.Item>
            <Timeline.Badge>
                <StyledOcticon icon={IconForLabel({labels: props.labels, active: props.version})}/>
            </Timeline.Badge>
            <Timeline.Body>
                <BaseStyles>
                    <Link href={`https://dl-game-sdk.discordapp.net/${props.version}/discord_game_sdk.zip`} target="_blank" fontWeight="bold" color="text.primary" mr={1} muted>
                        v{props.version}
                    </Link>
                    was released <Text fontWeight="bold" color="timeline.text">
                    <Tooltip direction="s" aria-label={date.toISOString()}>{date.toLocaleDateString(navigator.language,
                        { year: 'numeric', month: 'long', day: 'numeric' })}</Tooltip></Text>
                    { Labels({labels: props.labels, active: props.version}) }
                    <br /><BranchName>md5/{props.md5}</BranchName> <BranchName>size/{Math.round((Number.parseFloat(props.size)) * 100) / 100}mb</BranchName>
                </BaseStyles>

            </Timeline.Body>
        </Timeline.Item>
    )
}

const App = () => {
    const [items, setItems] = React.useState<Array<any> | null>();

    useEffect(() => {
        const itemsTemp: Array<any> = []
        fetch("versions.json").then(res => res.json()).then(json => {
            json.versions.forEach((item: any) => {
                itemsTemp.push(
                    Item({
                        version: item.version,
                        md5: item.md5,
                        size: item.size,
                        publish: item.publish,
                        labels: json.labels,
                        key: json.version
                    })
                )
            })

            setItems(itemsTemp)
        })
    }, []);

    return (
        <div>
            <ThemeProvider theme={primer}>
                <div style={{
                    position: 'absolute', left: '50%',
                    transform: 'translate(-50%)',
                }}>
                    <Timeline>
                        { items }
                    </Timeline>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default App;