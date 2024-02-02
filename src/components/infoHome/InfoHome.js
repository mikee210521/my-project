import Projects from "@/components/infoHome/Projects";
import styles from "./infohome.module.css"

export default function InfoHome() {
    return(
        <div className={styles.info_container}>
            <h1>Better Strategy With <br/> Quality Business</h1>
            <p>Problems trying to resolve the conflict between <br/> the two major realms of Classical physics: Newtonian mechanics </p>
            <Projects/>
        </div>
    )
}