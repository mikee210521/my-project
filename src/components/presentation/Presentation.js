import cover from "@/assets/cover.png";
import styles from "./presentation.module.css";
import Image from "next/image";
export default function Presentation() {
    return(
        <div id={styles.header_background} className={styles.container_presentation}>
            <div>
                <h1 className={styles.text}>Your Financial <br/> Assistant</h1>
                <p className={styles.paragraph}>We know how large objects will act, <br/> but things on a small scale. </p>
                <div className={styles.btn_container}>
                    <button className={styles.button}>Get Quote Now</button>
                    <button className={styles.button}>Learn More</button>
                </div>
            </div>
            <div>
                <Image
                    src={cover}
                    className={styles.image}
                    alt="Picture of the author"
                />
            </div>
        </div>
    )
}