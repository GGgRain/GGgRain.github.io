import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import {useEffect, useState} from "react";


import { Navigation, Pagination, A11y, Parallax, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import BetterImage from "../BetterImage";

function Feature_WYSIWYGEditor() {

  const backgroundImage = require("@site/static/img/showcase/features/img.png").default;
  const third = require("@site/static/img/showcase/features/editorfeature/img_4.png").default;


  return (<div className={clsx(styles.card_WYSIWYGEditor)}>
    <h1 className={clsx(styles.features__feature__header)}>
      Text WYSIWYG Editor
    </h1>
    <p>
      Plugin provides an <span style={{color:"cyan"}}>WYSIWYG editor</span> for the Unreal Engine's Rich Text System that you can use on the plugin.
    </p>

    <div className={clsx(styles.features__container__row)}>
      <BetterImage imageInst={backgroundImage} scale={0.6}/>
      <BetterImage imageInst={third} scale={0.6}/>
    </div>
  </div>);
}

function Feature_EditorCustomization() {

  const third = require("@site/static/img/showcase/features/editorfeature/img_3.png").default;

  return (<div className={clsx(styles.card_editorCustomization)}>
    <h1 className={clsx(styles.features__feature__header)}>
      Editor Customization
    </h1>
    <p>
      Plugin provides abilities to change the editor's visual and layout features as you want.
    </p>
    <div className={clsx(styles.features__container__row)}>

      <BetterImage imageInst={third} scale={0.4}/>

    </div>
  </div>);
}

function Feature_EditorTab({imageRef}) {

  const first = require("@site/static/img/showcase/features/editorfeature/img.png").default;
  const second = require("@site/static/img/showcase/features/editorfeature/img_1.png").default;
  const third = require("@site/static/img/showcase/features/editorfeature/img_2.png").default;

  return (<div className={clsx(styles.card_editorTab)}>
    <h1 className={clsx(styles.features__feature__header)}>
      Useful Editor Features
    </h1>
    <p>
      Plugin provides some useful features like Dialogue Management tab / Search & Replace tab for the uniform edit of
      the dialogue asset and dialogue manager asset browser.
    </p>
    <div className={clsx(styles.features__container__row)}>
      <BetterImage imageInst={first} scale={0.4}/>
      <BetterImage imageInst={second} scale={0.4}/>
      <BetterImage imageInst={third} scale={0.4}/>

    </div>
  </div>);
}


export default function EditorFeatures() {

  return (
      <section className={styles.features}>

        <h1 className={clsx(styles.features__header)}>
          Boost Your Development With <span style={{color:"cyan"}}>Convenient Editor Features</span>
        </h1>
        <p className={clsx(styles.features__content)}>
          SimpleDialogueSystem also focuses on the convenience on the development and provides various features for it.
        </p>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Parallax, EffectCoverflow]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            parallax
            effect={"coverflow"}
            coverflowEffect={{slideShadows : false}}
            pagination={{clickable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            direction={"horizontal"}
            onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Feature_WYSIWYGEditor/>
          </SwiperSlide>
          <SwiperSlide>
            <Feature_EditorTab/>
          </SwiperSlide>
          <SwiperSlide>
            <Feature_EditorCustomization/>
          </SwiperSlide>

        </Swiper>
      </section>);
}
