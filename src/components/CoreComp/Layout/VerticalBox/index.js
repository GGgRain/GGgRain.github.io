import clsx from "clsx";

export default function VerticalBox(
    {
        children,
        FlexWrap = "wrap",
        Margin = "4px",
        Gap = "4px",
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
        flexDirection: "column",
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
        className={"VerticalBox"}
        style={{
            ...DivStyle,
            ...LayoutElemProps
        }}
    >{children}</div>;
};

