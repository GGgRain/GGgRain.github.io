import clsx from "clsx";
import styles from "./styles.module.css";


export default function LandingFeatures() {
    return (
        <section className={styles.features}>
            <h1 className={clsx(styles.features__header)}>Good Supports and Documentation</h1>
            <p>
                You are not alone when you are using SDS! You can always ask any question in your mind on the Official
                Discord
                Channel, and all the friendly developers who use the plugin already will help you there.
                Also the developer of the SDS, <span style={{color: "cyan"}}>DevGrain</span>, really care about your
                projects
                and love to help you. So feel free to visit us!
            </p>
            <p>
                Also, SDS provides a good, qualified documentation that is actively updated for the users so it is easy
                to find how to use its feature online. Check out the Guide page of this webpage!
            </p>
        </section>
    );
}
