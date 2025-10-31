import clsx from "clsx";
import styles from "./styles.module.css";
import {useEffect, useState} from "react";
import {animated, useSpring, useSpringRef} from "@react-spring/web";

export default function BetterImage(
    {
        imageInst,
        scale,
        MouseOverAnimScale = 1.1,

        bUseShadow = true,
        ShadowBorderRadius = "30px",
    })
{
    const [originalDimensions, setOriginalDimensions] = useState({width: 0, height: 0});

    const IconSpring = useSpring({
        loop: true,
        from: {y: 0},
        to: [
            {y: 5},
            {y: 0}
        ],
        config: {
            tension: 30,
            friction: 32,
            mass: 1,
        }
    });

    const SizeSpringAPI = useSpringRef();

    const SizeSpring = useSpring({
        ref: SizeSpringAPI,
        from: {
            scale: 1,
        }
    });

    const handleMouseOver = () => {
        SizeSpringAPI.start({
            to: {
                scale: MouseOverAnimScale,
            },
            config: {
                tension: 300,
                friction: 20
            }
        });
    };

    const handleMouseOut = () => {
        SizeSpringAPI.start({
            to: {
                scale: 1,
            },
            config: {
                tension: 300,
                friction: 20
            }
        });

    };


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
        display: "flex",
        margin: "8px",
    };

    const ShadowStyle = {
        borderRadius: ShadowBorderRadius,
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    };

    if(bUseShadow){
        return <animated.div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
                ...divStyle,
                ...IconSpring,
                ...SizeSpring,
                ...ShadowStyle
            }}
        ></animated.div>;
    }else{

        return <animated.div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
                ...divStyle,
                ...IconSpring,
                ...SizeSpring
            }}
        ></animated.div>;
    }

};
