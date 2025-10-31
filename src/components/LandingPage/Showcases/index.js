import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import styled from "styled-components";
import ParallexTilt from "react-parallax-tilt";
import ShadowTilt from "react-vanilla-tilt";

import React from "react";
import { useCallback, useEffect, useState, useRef } from "react";
import { animated, useSpring, useSpringRef } from "@react-spring/web";
import Link from "@docusaurus/Link";

//Icons
import { AiFillTwitterCircle, AiFillYoutube, AiFillHome } from "react-icons/ai";
import { BsSteam } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";


const ShowcaseList = [
  {
    title: "Wandering Cat",
    cardCoverImage:
      require("@site/static/img/showcase/card/wandering_cat/store_capsule_main.png").default,
    description: (
        <>
          Wandering Cat is a fantasy adventure game for all cat lovers. The game offers an immersive and fun experience,
          where players can take on the role of a brave and independent cat with a refined palate!
        </>
    ),
    links: [
      {
        url : "https://store.steampowered.com/app/2182470/Wandering_Cat/",
        elem : "BsSteam"
      },
      {
        url : "https://wanderingcat.it/",
        elem : "AiFillHome"
      },
      {
        url : "https://twitter.com/WanderingCat_G",
        elem : "AiFillTwitterCircle"
      },
      {
        url : "https://discord.gg/W4jxU4Ex2F",
        elem : "FaDiscord"
      },

    ],
    bEnabled : false
  },
  {
    title: "...And Your project!",
    description: (
      <>
        If you have any great project with SDS you want to let everyone know
        about, please tell us in the Official Discord!
      </>
    ),
    links: [
        {
       url : "https://discord.com/invite/DzNFax2aBS",
           elem : "FaDiscord"
     }
     ],
    bEnabled : true
  },
];

function SocialLink({ url, elem }) {
  const IconComponent = getIconComponent(elem);

  const IconSpringAPI = useSpringRef();

  const IconSpring = useSpring({
    ref: IconSpringAPI,
    from: {
      scale: 1
    }
  });

  const handleMouseOver = () => {
    IconSpringAPI.start({
      to: {
        scale: 1.3
      },
      config : {
        tension: 300,
        friction: 12
      }
    });
  };

  const handleMouseOut = () => {
    IconSpringAPI.start({
      to: {
        scale: 1
      },
      config : {
        tension: 300,
        friction: 12
      }
    });
  };

  return (
        <animated.a href={url}
           target="_blank"
           rel="noopener noreferrer"
           style={{ fontSize: 52, cursor: "pointer", ...IconSpring}}
           onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>
          {IconComponent && <IconComponent style={{margin: `8px`}}/>}
        </animated.a>
  );
}

function getIconComponent(elem) {
  switch (elem) {
    case "AiFillTwitterCircle":
      return AiFillTwitterCircle;
    case "AiFillYoutube":
      return AiFillYoutube;
    case "FaDiscord" :
      return FaDiscord;
    case "AiFillHome":
      return AiFillHome;
    case "BsSteam":
      return BsSteam;
    default:
      return null;
  }
}
function GlassmorphismCard({
  title,
  cardCoverImage,
  description,
  links,
  bEnabled
}) {
  const CoverApi = useSpringRef();
  const ContentApi = useSpringRef();

  const CoverSpring = useSpring({
    ref: CoverApi,
    from: {
      opacity: bEnabled ? 1 : 0,
    },
  });

  const ContentSpring = useSpring({
    ref: ContentApi,
    from: {
      scale: 0.8,
      opacity: bEnabled ? 1 : 0,
    }
  });

  const handleMouseOver = () => {
    CoverApi.start({
      to: {
        opacity: 1,
      },
      config : {
        tension: 300,
        friction: 20
      }
    });

    ContentApi.start({
      to: {
        scale: 1,
        opacity: 1,
      },
      config : {
        tension: 300,
        friction: 20
      }
    });
  };

  const handleMouseOut = () => {
    CoverApi.start({
      to: {
        opacity: bEnabled ? 1 : 0,
      },
      config : {
        tension: 300,
        friction: 20
      }
    });

    ContentApi.start({
      to: {
        scale: 0.8,
        opacity: bEnabled ? 1 : 0,
      },
      config : {
        tension: 300,
        friction: 20
      }
    });
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={clsx(styles.Showcases__card__holder)}
    >
      <ParallexTilt
        className="tilt"
        perspective={1000}
        transitionSpeed={1000}
        glareEnable={true}
        glareBorderRadius="30px"
        gyroscope={false}
      >
        <animated.div
          className={clsx(styles.Showcases__card)}
          style={{ background: `url(${cardCoverImage})`, backgroundSize : `cover`}}
        >
          <animated.div
            className={clsx(styles.Showcases__card__dark)}
            style={{
              backgroundSize : `cover`,
              ...CoverSpring,
            }}
          >
            <animated.div
              style={{
                ...ContentSpring,
              }}
            >
              <Heading as="h3" className={clsx(styles.Showcases__card__title)}>{title}</Heading>
              <p>{description}</p>
              <div className={clsx(styles.Showcases__card__socialholder)}>
                {links.map((props, idx) => (
                  <SocialLink key={idx} {...props} />
                ))}
              </div>
            </animated.div>
          </animated.div>
        </animated.div>
      </ParallexTilt>
    </div>
  );
}

export default function Showcases() {
  return (
    <section className={clsx(styles.Showcases)}>
      <h1 className={clsx(styles.Showcases__header)}>
        Projects Ongoing with SDS
      </h1>
      <div className={clsx(styles.card__container)}>
        {ShowcaseList.map((props, idx) => (
          <GlassmorphismCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
