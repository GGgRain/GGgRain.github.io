import clsx from "clsx";
import styles from "./styles.module.css";
import {useEffect, useState} from "react";
import {animated, useSpring, useSpringRef} from "@react-spring/web";
import Link from "@docusaurus/Link";

export default function Button({children, ButtonClass = "button button--primary button--lg", To = "https://github.com/GGgRain/Unreal-Joint"}) {

    return <div className={styles.ButtonBox}>
        <div className={styles.GapDiv}>
            <Link className={ButtonClass} to={To}>
                {children}
            </Link>
        </div>
    </div>;

};
