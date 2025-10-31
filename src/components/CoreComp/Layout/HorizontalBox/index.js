import {useEffect, useState} from "react";
import {animated, useSpring, useSpringRef} from "@react-spring/web";
import clsx from "clsx";

export default function HorizontalBox(
    {
        children,
        FlexWrap = "wrap",
        Gap = "4px",
        Margin = "4px",
        Width = "auto",
        Height = "auto",
        AlignItems = "stretch",
        JustifyContent = "center",

        Order= 0,
        FlexGrow= 1,
        FlexShrink= 1,
        FlexBasis= "100%",
    }) {
    const DivStyle = {
        display: "flex",
        flexWrap: FlexWrap,
        flexDirection: "row",
        gap : Gap,
        alignItems: AlignItems,
        justifyContent: JustifyContent,
        width : Width,
        height : Height,
        margin: Margin,
    };

    const LayoutElemProps = {
        Order: Order,
        FlexGrow: FlexGrow,
        FlexShrink: FlexShrink,
        FlexBasis: FlexBasis,
    };

    return <div
        className={"HorizontalBox"}
        style={{
            ...DivStyle,
            ...LayoutElemProps
        }}
    >{children}</div>;
};
