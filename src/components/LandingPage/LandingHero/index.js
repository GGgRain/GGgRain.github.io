import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import {Image, Container, Col, Row,} from "react-bootstrap";


//Images
import LogoImage from "/static/img/Logo.png"
import GitHubImage from "/static/img/LandingPage/GitHub.png"
import MegaGrantImage from "/static/img/External/Epic_MegaGrants_Recipient_logo.png"
import MegaGrantImageHorizontal from "/static/img/External/Epic_MegaGrants_Recipient_logo_horizontal.png"

import DiscordImage from "/static/img/External/Discord-Symbol-Blurple.png"
import LandingBackgroundImage from "/static/img/LandingPage/LandingPage.png"


import {useEffect, useState} from "react";
import {animated, useSpring, useSpringRef} from "@react-spring/web";

import Landing_TitleImage from "/src/components/LandingPage/Landing_TitleImage";
import Landing_TitleTextSectionBlock from "/src/components/LandingPage/Landing_TitleText";
import BetterImage from "/src/components/LandingPage/BetterImage";
import HorizontalBox from "/src/components//CoreComp/Layout/HorizontalBox";
import VerticalBox from "/src/components//CoreComp/Layout/VerticalBox";
import Button from "/src/components/CoreComp/Interaction/Button";
import LayoutElem from "/src/components/CoreComp/Layout/LayoutElem";
import Showcases from "/src/components/LandingPage/Showcases";
import LandingFeatures from "/src/components/LandingPage/SupportAndDocumentation";

export default function LandingHero() {

    const {siteConfig} = useDocusaurusContext();
    return (

        <VerticalBox Width={"auto"}>

            <Landing_TitleTextSectionBlock delay={100}>
                <VerticalBox AlignItems={"center"}>

                    <h1 className={clsx(styles.Header)}>Welcome to the blog of<span
                        className={clsx(styles.Header_Emphas)}> DevGrain!</span></h1>
                    <p className={clsx(styles.Tagline)}>This is a blog of my works and projects!</p>

                    <HorizontalBox Margin={"4px"}>

                        <Button To="https://github.com/GGgRain">
                            Visit GitHub
                        </Button>

                    </HorizontalBox>

                </VerticalBox>
            </Landing_TitleTextSectionBlock>

            <Landing_TitleTextSectionBlock delay={400}>

                <HorizontalBox Width={"stretch"} AlignItems={"center"} FlexWrap={"wrap"}>

                    <VerticalBox AlignItems={"flex-start"} JustifyContent={"center"} Margin={"45px"}>
                        <h1 className={clsx(styles.Header)}>&#127881; Check out Unreal Joint!</h1>

                        <p className={clsx(styles.Tagline)}>
                            All content is available on our official GitHub repository,<br/>
                            and you can download it and start using Joint in a second!
                        </p>

                        <Button To="https://github.com/GGgRain/Unreal-Joint">
                            Visit GitHub to start off
                        </Button>

                    </VerticalBox>

                    <BetterImage imageInst={GitHubImage} scale={0.2} MouseOverAnimScale={1.02} ShadowBorderRadius={"45px"}></BetterImage>

                </HorizontalBox>

            </Landing_TitleTextSectionBlock>

        </VerticalBox>
    );
}
