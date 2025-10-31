import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";


import {Navigation, Pagination, A11y, Parallax, EffectCards} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import BetterImage from "../BetterImage";


function Feature_UseNode({imageRef}) {

    const first = require("@site/static/img/showcase/features/node/img.png").default;


    return (<div className={clsx(styles.card, styles.card_useNode)}>
        <h1 className={clsx(styles.features__feature__header)}>
            Use Various Nodes To Express Your Dialogue
        </h1>
        <p>
            You can express a line, a question and answers with Monologue node and Select node.
            More than that you can even use dialogue nodes to control dialogue flow and execute gameplay events.
            ...Or you can create your own node type and declare unique logic to it, such as creating and displaying
            custom
            widget and controlling it.
        </p>
        <div className={clsx(styles.features__container__row)}>
            <BetterImage imageInst={first} scale={0.75}/>

        </div>
    </div>);
}

function Feature_UseEvents({imageRef}) {
    const first = require("@site/static/img/showcase/features/event/img_1.png").default;
    const second = require("@site/static/img/showcase/features/event/image-3.png").default;
    const third = require("@site/static/img/showcase/features/event/img.png").default;

    return (<div className={clsx(styles.card, styles.card_useEvent)}>
        <h1 className={clsx(styles.features__feature__header)}>
            Use Dialogue Events
        </h1>
        <p>
            Use Dialogue Events to trigger blueprint logic in the dialogue you want that works with your gameplay.
        </p>
        <div className={clsx(styles.features__container__row)}>
            <BetterImage imageInst={first} scale={0.75}/>
            <BetterImage imageInst={second} scale={0.4}/>
            <BetterImage imageInst={third} scale={0.4}/>

        </div>
    </div>);
}

function Feature_UseInlineCommand({imageRef}) {
    const first = require("@site/static/img/showcase/features/inlinecommand/img.png").default;
    const second = require("@site/static/img/showcase/features/inlinecommand/image-2.png").default;
    const third = require("@site/static/img/showcase/features/inlinecommand/image-5.png").default;

    return (<div className={clsx(styles.card, styles.card_useInlineCommand)}>
        <h1 className={clsx(styles.features__feature__header)}>
            Use Dialogue Inline Commands
        </h1>
        <p>
            Use Dialogue Inline Commands to execute specific logic in the specific location of your text on the text
            display update for much more dramatic and convincing production.
        </p>
        <div className={clsx(styles.features__container__row)}>
            <BetterImage imageInst={first} scale={0.4}/>
            <BetterImage imageInst={third} scale={0.6}/>
            <BetterImage imageInst={second} scale={0.8}/>
        </div>
    </div>);
}

function Feature_UseFragment({imageRef}) {
    const first = require("@site/static/img/showcase/features/fragment/image-8.png").default;
    const second = require("@site/static/img/showcase/features/fragment/image-13.png").default;
    const third = require("@site/static/img/showcase/features/fragment/image-10.png").default;
    const Fourth = require("@site/static/img/showcase/features/fragment/image-5.png").default;
    const Fifth = require("@site/static/img/showcase/features/fragment/image-7.png").default;

    return (<div className={clsx(styles.card, styles.card_useFragment)}>
        <h1 className={clsx(styles.features__feature__header)}>
            Use Dialogue Fragments
        </h1>
        <p>
            Use sub node system named Dialogue Fragments that allows you to attach pre-defined storages or action sets
            called Dialogue Fragments to each node, enabling modification of the behavior and data of Dialogue Widget
            Base and Dialogue Node and also the interaction with the gameplay logics with just a few clicks.
        </p>

        <div className={clsx(styles.features__container__row)}>
            <BetterImage imageInst={first} scale={0.4}/>
            <BetterImage imageInst={second} scale={0.6}/>
            <BetterImage imageInst={third} scale={0.4}/>
            <BetterImage imageInst={Fourth} scale={0.4}/>
            <BetterImage imageInst={Fifth} scale={0.4}/>
        </div>
    </div>);
}


function Feature_UseCondition({imageRef}) {

    const first = require("@site/static/img/showcase/features/condition/image-12.png").default;
    const second = require("@site/static/img/showcase/features/condition/img.png").default;
    const third = require("@site/static/img/showcase/features/condition/third.png").default;

    return (<div className={clsx(styles.card, styles.card_useCondition)}>
        <h1 className={clsx(styles.features__feature__header)}>
            Use Dialogue Conditions
        </h1>
        <p>
            Use Dialogue Conditions to control the flow of your dialogues as you want according to your gameplay logic.
        </p>
        <div className={clsx(styles.features__container__row)}>
            <BetterImage imageInst={first} scale={0.6}/>
            <BetterImage imageInst={second} scale={0.5}/>
            <BetterImage imageInst={third} scale={0.4}/>

        </div>
    </div>);
}

export default function HomepageFeatures() {

    return (
        <section className={styles.features}>

            <h1 className={clsx(styles.features__header)}>
                Make Scripts <span style={{color: "cyan"}}>Beyond Just Script</span>
            </h1>
            <p className={clsx(styles.features__content)}>
                SimpleDialogueSystem focuses on the interaction between scripts and the gameplay and provides various
                features for it.
            </p>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Parallax, EffectCards]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                parallax
                effect={"cards"}
                cardsEffect={{perSlideRotate: 0.2, perSlideOffset: 4, slideShadows: false}}
                pagination={{clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                direction={"horizontal"}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Feature_UseEvents/>
                </SwiperSlide>
                <SwiperSlide>
                    <Feature_UseInlineCommand/>
                </SwiperSlide>
                <SwiperSlide>
                    <Feature_UseFragment/>
                </SwiperSlide>
                <SwiperSlide>
                    <Feature_UseCondition/>
                </SwiperSlide>
                <SwiperSlide>
                    <Feature_UseNode/>
                </SwiperSlide>
            </Swiper>
        </section>);
}
