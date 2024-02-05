import styles from "./infohome.module.css";
import InfoHome from "@/components/home/InfoHome";

export default function HomeCover() {
    return(
        <div>
            <video
                src={require("/videos/first.mp4")}
                autoPlay
                loop
                muted
                className={styles.video}
            />
            <InfoHome/>
        </div>
    )
}