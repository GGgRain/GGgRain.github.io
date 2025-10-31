import clsx from "clsx";
import styles from "./styles.module.css";
import {useEffect, useState} from "react";
import {animated, useSpring, useSpringRef} from "@react-spring/web";

export default function Landing_TitleTextSectionBlock({children, delay = 150}) {

    const TransformSpring = useSpring({
        loop: false,
        y: 0,
        from: {y: 150},
        delay: delay,
        config: {
            tension: 120,
            friction: 26,
        }
    });

    const OpacitySpring = useSpring({
        loop: false,
        opacity: 1,
        from: {opacity: 0},
        delay : delay,
        config: {
            tension: 60,
            friction: 26,
        }
    });

    const DivStyle = {
        width : "100%",
        height : "auto",
    };

    // Get original image dimensions on component mount
    useEffect(() => {});

    return <animated.div
        style={{
            ...TransformSpring,
            ...OpacitySpring,
            ...DivStyle
        }}
    >{children}</animated.div>;
};
