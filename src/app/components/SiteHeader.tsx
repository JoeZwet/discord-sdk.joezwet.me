import React from "react";
import { Header, StyledOcticon } from "@primer/components";
import {HomeIcon, MarkGithubIcon, PackageIcon, RocketIcon, TagIcon} from "@primer/octicons-react";

const SiteHeader: React.FC = () => {
    return (
        <>
            <Header>
                <Header.Item>
                    <Header.Link href="/" fontSize={2}>
                        <StyledOcticon icon={RocketIcon} size={32} mr={2}/>
                        <span>Discord Game Sdk</span>
                    </Header.Link>
                </Header.Item>
                <Header.Item full />
                <Header.Item>
                    <Header.Link href="/" fontSize={2}>
                        <StyledOcticon icon={HomeIcon} size={16} mr={2}/>
                        <span>Home</span>
                    </Header.Link>
                </Header.Item>
                <Header.Item>
                    <Header.Link href="/versions" fontSize={2}>
                        <StyledOcticon icon={TagIcon} size={16} mr={2}/>
                        <span>Versions</span>
                    </Header.Link>
                </Header.Item>
                <Header.Item>
                    <Header.Link href="/packages" fontSize={2}>
                        <StyledOcticon icon={PackageIcon} size={16} mr={2}/>
                        <span>Packages</span>
                    </Header.Link>
                </Header.Item>
                <Header.Item>
                    <Header.Link href="https://github.com/joezwet/discord.joezwet.dev" fontSize={2}>
                        <StyledOcticon icon={MarkGithubIcon} size={16} mr={2}/>
                        <span>Source</span>
                    </Header.Link>
                </Header.Item>
            </Header>
        </>
    );
}

export default SiteHeader;