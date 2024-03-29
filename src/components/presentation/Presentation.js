import cover from "@/assets/cover.png";
import styles from "./presentation.module.css";
import Image from "next/image";
export default function Presentation() {
    return(
        <div>
            <div className={styles.container_presentation}>
                <div className={styles.info_presentation_container}>
                    <h1 className={styles.text_tittle}>Your Financial <br/> Assistant</h1>
                    <p className={styles.paragraph}>We know how large objects will act, <br/> but things on a small scale. </p>
                    <div className={styles.btn_container}>
                        <button className={styles.button}>Get Quote Now</button>
                        <button className={styles.button}>Learn More</button>
                    </div>
                </div>
                <div className={styles.image_cover_presentation}>
                    <Image
                        src={cover}
                        alt="Picture of the author"
                        priority={true}
                    />
                </div>
            </div>
        </div>
    )
}