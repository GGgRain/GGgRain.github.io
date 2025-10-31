import clsx from "clsx";
import styles from "./styles.module.css";
import {useEffect, useState} from "react";
import {animated, useSpring, useSpringRef} from "@react-spring/web";
import {useTransition} from "react-spring";

export default function Landing_TitleImage({imageInst, scale, delay = 350}) {
    const [originalDimensions, setOriginalDimensions] = useState({width: 0, height: 0});

    const TransformSpring = useSpring({
        loop: false,
        y: 0,
        from: {y: 50},
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
        delay: delay,
        config: {
            tension: 60,
            friction: 26,
        }
    });


    // Get original image dimensions on component mount
    useEffect(() => {
        const img = new Image();
        img.src = imageInst;
        img.onload = () => {
            setOriginalDimensions({width: img.width, height: img.height});
        };
    }, [imageInst]);

    const calculatedWidth = originalDimensions.width * scale;
    const calculatedHeight = originalDimensions.height * scale;

    const divStyle = {
        backgroundImage: `url(${imageInst})`,
        backgroundSize: `cover`,
        maxWidth: `${calculatedWidth}px`,
        width : `100%`,
        aspectRatio: `${calculatedWidth} / ${calculatedHeight}`,
    };

    return <animated.div
        style={{
            ...divStyle,
            ...TransformSpring,
            ...OpacitySpring
        }}
    ></animated.div>;
};
