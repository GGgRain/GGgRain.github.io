import {useEffect, useState} from "react";
import {animated, useSpring, useSpringRef} from "@react-spring/web";

export default function LayoutElem(
    {
        children,
        Order = 0,
        FlexGrow = 1,
        FlexShrink = 1,
        FlexBasis = "100%",
        AlignItems = "stretch"
    })
{
    const divStyle = {
        order: Order,
        flexGrow: FlexGrow,
        flexShrink: FlexShrink,
        flexBasis: FlexBasis,
        alignItems: AlignItems
    };

    return <div
        className={"LayoutElem"}
        style={{
            ...divStyle,
        }}
    >{children}</div>;
};
